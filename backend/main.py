from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "Vibe Navigator Backend is Running!"}

@app.post("/get-vibes")
async def get_vibes(request: Request):
    data = await request.json()
    city = data.get("city")
    category = data.get("category")

    # Dummy response for now
    return {
        "results": [
            {"name": "Oceanic Café", "summary": "🌊 Cozy with a sea breeze vibe, perfect for sunsets."},
            {"name": "City Chill Park", "summary": "🌳 Quiet, green, and full of relaxed locals."}
        ]
    }
