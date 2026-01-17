
## Run Instructions:
```bash

### Backend
cd backend
python -m pip install fastapi uvicorn
python -m uvicorn main:app --reload
Backend runs on:
http://127.0.0.1:8000

### Frontend 
cd frontend
npm install
npm start
Frontend runs on:
http://localhost:3000



## Overview
This project implements a visual pipeline editor using React Flow on the frontend
and FastAPI on the backend. The initial UI provided by VectorShift was intentionally
minimal and served as a baseline for further extension.

---

languages_used:
  - name: JavaScript
    purpose:
      - Frontend development
      - React components
      - Application logic
      - State management

  - name: Python
    purpose:
      - Backend development
      - FastAPI server
      - Pipeline validation (DAG logic)

frameworks_and_libraries:
  frontend:
    - React:
        description: Component-based UI framework
    - React Flow:
        description: Node-based visual workflow builder
    - HTML:
        description: UI structure
    - CSS:
        description: Styling and layout

  backend:
    - FastAPI:
        description: Backend API framework
    - Uvicorn:
        description: ASGI server for running FastAPI
    - Pydantic:
        description: Data validation and request/response models


## Initial State
- Toolbar with basic node buttons (Input, LLM, Output, Text)
- Empty React Flow canvas
- Submit button with no backend integration

---

## Enhancements Implemented

### 1. Node Abstraction
A reusable `BaseNode` component was introduced to abstract common layout,
styling, and handle logic across all nodes. This significantly reduces duplication
and makes adding new node types straightforward.

New nodes were implemented using this abstraction:
- InputNode
- OutputNode
- TextNode
- LLMNode
- Additional demo nodes

---

### 2. Styling
A unified visual style was applied across all nodes:
- Consistent sizing and spacing
- Rounded corners and subtle shadows
- Unified typography and handle colors

---

### 3. Text Node Logic
The Text node was enhanced with:
- Automatic resizing based on text content
- Dynamic variable parsing using `{{variable}}`
- Automatic creation of input handles for detected variables

---

### 4. Backend Integration
The frontend submit action sends the pipeline graph (nodes and edges)
to a FastAPI backend, which:
- Counts nodes and edges
- Validates whether the pipeline forms a Directed Acyclic Graph (DAG)


