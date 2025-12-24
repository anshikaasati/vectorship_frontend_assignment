from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api import pipelines

app = FastAPI(title="VectorShift Pipeline Builder API")

# Allow local dev origins
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}

app.include_router(pipelines.router, prefix="/pipelines", tags=["pipelines"])

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("app.main:app", host="127.0.0.1", port=8000, reload=True)
