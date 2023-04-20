from fastapi import FastAPI
from sqlmodel import Session
from sqlmodel import SQLModel
from .auth.auth_routes import auth_router
#from auth.auth_routes import auth_router
from .database import engine

app = FastAPI()

app.include_router(auth_router, prefix="/auth", tags=["auth"])


# Event handlers
@app.on_event("startup")
def on_startup():
    SQLModel.metadata.create_all(bind=engine)

