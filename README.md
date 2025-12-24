# VectorShift Pipeline Builder - Anshika's Version

**Author**: Anshika

A mini full‑stack app for building and analyzing visual AI pipelines. It showcases:
- A React Flow canvas with reusable node components (Input, Output, LLM, Text, plus 5 extra nodes)
- A glassmorphism UI themed with Tailwind CSS
- Smart Text node (auto‑resize, {{variable}} inputs → dynamic handles)
- Backend FastAPI endpoint that counts nodes/edges and checks if the graph is a DAG

## Tech Stack
- Frontend: React 18, React Flow, Zustand, Tailwind CSS, react-hot-toast
- Backend: FastAPI, Uvicorn, Pydantic

## Project Structure
vectorShift/
  backend/
    app/
      api/            # API endpoints
      models/         # Pydantic models
      services/       # Business logic (DAG check)
      core/           # Config & constants
      main.py         # App entry point
    requirements.txt
  frontend/
    src/
      components/     # UI Components (PipelineUI, SubmitButton, AnalysisPanel)
      nodes/          # Node implementations
      services/       # API integration
      App.js          # Root component
      index.css
    package.json
  README.md

## Features
- Node abstraction via `src/nodes/NodeBase.js` (or similar) for consistent headers, fields, and styling.
- Nodes implemented in `src/nodes/`: `Input`, `Output`, `LLM`, `Text`, `Filter`, `Merge`, `Delay`, `HTTP`, `Math`.
- Text node
  - Auto-resizes height
  - Expands width to fit content
  - Parses `{{variable}}` and spawns left handles per unique variable
- Submission flow
  - Sends pipeline (nodes + edges) to `POST /pipelines/parse`
  - Falls back to local analysis if backend is unreachable
  - Shows a themed bottom analysis panel and toast
- DAG check (Kahn’s algorithm) on backend

## Prerequisites
- Node.js 18+
- Python 3.10+

## Setup & Run
1) Backend
```
cd backend
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload --host 127.0.0.1 --port 8000
```
Verify:
```
curl http://127.0.0.1:8000/            # {"Ping":"Pong"}
```

2) Frontend
```
cd frontend
npm i
# (optional) set API base if not using default 127.0.0.1:8000
# macOS/Linux: export REACT_APP_API_BASE=http://127.0.0.1:8000
npm start
```
Open the app at http://localhost:3000

## Usage
- Drag nodes from the top toolbar into the canvas
- Connect nodes; handles appear on hover
- For Text nodes, type `{{foo}}` (or any JS-valid variable name) to create an input handle automatically
- Click Submit to see:
  - Number of nodes
  - Number of edges
  - Whether the pipeline is a DAG

## API
`POST /pipelines/parse`
- Request body: `{ nodes: Node[], edges: Edge[] }` (React Flow shape)
- Response: `{ num_nodes: number, num_edges: number, is_dag: boolean }`

## Theming & Styling
- Tailwind-based dark, glassmorphism UI
- Global tokens in `frontend/src/index.css` under `@layer components`:
  - `.glass`, `.glass-card`, `.glass-button`, `.glass-stats`, `.glass-ring`
- Grid color, node visuals, and panel styling match the theme

## Adding a New Node (Quickstart)
1. Create a file in `frontend/src/nodes/`.
2. Register it in `nodeTypes` in `frontend/src/components/PipelineUI.js`.
3. Add a `DraggableNode` in `frontend/src/components/PipelineToolbar.js`.

## Troubleshooting
- Backend connection refused
  - Ensure backend is running on 127.0.0.1:8000 or set `REACT_APP_API_BASE`
- CORS
  - CORS is enabled in `backend/main.py`
- Tailwind warnings in CSS
  - CRA’s linter may warn on `@tailwind/@apply`; safe to ignore at runtime

## License
For assessment/demo use.