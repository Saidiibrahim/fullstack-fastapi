from fastapi import FastAPI
from sqlmodel import Session
from sqlmodel import SQLModel
from .auth.auth_routes import auth_router
#from auth.auth_routes import auth_router
from .database import engine
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()

app.include_router(auth_router, prefix="/auth", tags=["auth"])

# Add this block of code to configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # You can specify the allowed origins if needed
    allow_credentials=True,
    allow_methods=["*"],  # You can specify the allowed methods if needed
    allow_headers=["*"],  # You can specify the allowed headers if needed
)


# Event handlers
@app.on_event("startup")
def on_startup():
    SQLModel.metadata.create_all(bind=engine)

