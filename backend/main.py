from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/get-vibes")
async def get_vibes(request: Request):
    data = await request.json()
    city = data.get("city", "").strip().lower()
    category = data.get("category", "").strip().lower()

    if city == "new delhi" and category == "cafe":
        return {
            "results": [
                {"name": "Oceanic Café", "summary": "🌊 Cozy with a sea breeze vibe, perfect for sunsets."},
                {"name": "City Chill Park", "summary": "🌳 Quiet, green, and full of relaxed locals."}
            ]
        }
    return {"results": []}
