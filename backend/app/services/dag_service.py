from typing import List, Dict

def check_is_dag(nodes: List, edges: List) -> bool:
    """
    Checks if the given nodes and edges form a Directed Acyclic Graph (DAG)
    using Kahn's algorithm.
    """
    adjacency: Dict[str, List[str]] = {}
    indegree: Dict[str, int] = {n.id: 0 for n in nodes}

    for e in edges:
        adjacency.setdefault(e.source, []).append(e.target)
        indegree[e.target] = indegree.get(e.target, 0) + 1
        indegree.setdefault(e.source, indegree.get(e.source, 0))

    queue: List[str] = [n for n, d in indegree.items() if d == 0]
    visited: int = 0

    while queue:
        node = queue.pop(0)
        visited += 1
        for neighbor in adjacency.get(node, []):
            indegree[neighbor] -= 1
            if indegree[neighbor] == 0:
                queue.append(neighbor)

    return visited == len(indegree)
