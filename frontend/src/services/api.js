const PRIMARY_BASE = process.env.REACT_APP_API_BASE || 'http://127.0.0.1:8000';
const SECONDARY_BASE = 'http://localhost:8000';

export async function parsePipeline(nodes, edges) {
    const payload = { nodes, edges };
    const bases = [PRIMARY_BASE, SECONDARY_BASE].filter(
        (b, i, arr) => !!b && arr.indexOf(b) === i
    );

    let lastErr;
    for (const base of bases) {
        try {
            const res = await fetch(`${base}/pipelines/parse`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });
            if (!res.ok) throw new Error(`Server responded with ${res.status}`);
            return await res.json();
        } catch (e) {
            lastErr = e;
        }
    }
    throw lastErr;
}

export function analyzeLocally(nodes, edges) {
    const num_nodes = nodes.length;
    const num_edges = edges.length;

    const indegree = {};
    const adj = {};
    for (const n of nodes) indegree[n.id] = 0;
    for (const e of edges) {
        adj[e.source] = adj[e.source] || [];
        adj[e.source].push(e.target);
        indegree[e.target] = (indegree[e.target] || 0) + 1;
        if (indegree[e.source] === undefined) indegree[e.source] = 0;
    }
    const queue = Object.entries(indegree)
        .filter(([, d]) => d === 0)
        .map(([id]) => id);
    let visited = 0;
    while (queue.length) {
        const node = queue.shift();
        visited += 1;
        for (const nb of adj[node] || []) {
            indegree[nb] -= 1;
            if (indegree[nb] === 0) queue.push(nb);
        }
    }
    const is_dag = visited === Object.keys(indegree).length;
    return { num_nodes, num_edges, is_dag };
}
