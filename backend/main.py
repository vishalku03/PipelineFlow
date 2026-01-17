

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Dict

app = FastAPI()

# CORS FIX (MOST IMPORTANT)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Edge(BaseModel):
    source: str
    target: str

class Pipeline(BaseModel):
    nodes: List[Dict]
    edges: List[Edge]

@app.post("/pipelines/parse")
def parse(p: Pipeline):
    nodes = p.nodes
    edges = p.edges

    graph = {n["id"]: [] for n in nodes}
    for e in edges:
        graph[e.source].append(e.target)

    visited, stack = set(), set()

    def cycle(n):
        if n in stack:
            return True
        if n in visited:
            return False
        visited.add(n)
        stack.add(n)
        for nb in graph[n]:
            if cycle(nb):
                return True
        stack.remove(n)
        return False

    is_dag = not any(cycle(n) for n in graph)

    return {
        "num_nodes": len(nodes),
        "num_edges": len(edges),
        "is_dag": is_dag,
    }
