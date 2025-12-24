from pydantic import BaseModel
from typing import List, Dict, Optional

class EdgeModel(BaseModel):
    id: Optional[str] = None
    source: str
    target: str
    sourceHandle: Optional[str] = None
    targetHandle: Optional[str] = None

class NodeData(BaseModel):
    id: str
    nodeType: str

class NodeModel(BaseModel):
    id: str
    type: str
    position: Optional[Dict[str, float]] = None
    data: NodeData

class PipelineModel(BaseModel):
    nodes: List[NodeModel]
    edges: List[EdgeModel]
