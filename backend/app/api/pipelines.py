from fastapi import APIRouter
from app.models.pipeline import PipelineModel
from app.services.dag_service import check_is_dag

router = APIRouter()

@router.post('/parse')
def parse_pipeline(payload: PipelineModel):
    nodes = payload.nodes
    edges = payload.edges
    
    num_nodes = len(nodes)
    num_edges = len(edges)
    is_dag = check_is_dag(nodes, edges)

    return {
        "num_nodes": num_nodes,
        "num_edges": num_edges,
        "is_dag": is_dag
    }
