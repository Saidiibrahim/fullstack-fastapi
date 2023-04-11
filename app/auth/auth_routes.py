"""
Module containing FastAPI endpoints for user authentication and authorization.
"""

from fastapi import APIRouter, Depends, HTTPException, status
from sqlmodel import Session
from .auth_models import User, UserIn, UserOut
from .auth_utils import get_password_hash, create_access_token, verify_password
from .auth_dependencies import get_current_active_user, get_current_active_superuser
from ..database import engine

auth_router = APIRouter()


@auth_router.post("/login", response_model=UserOut)
def login(user_in: UserIn):
    """
    Endpoint to authenticate a user and return an access token.
    """
    with Session(engine) as session:
        user = session.query(User).filter(User.username == user_in.username).first()
        if not user or not verify_password(user_in.password, user.hashed_password):
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid credentials")
        access_token = create_access_token({"sub": user.username})
        return {"access_token": access_token, "token_type": "bearer"}


@auth_router.post("/register", response_model=UserOut)
def create_user(user_in: UserIn):
    """
    Endpoint to create a new user.
    """
    with Session(engine) as session:
        user = User(username=user_in.username, email=user_in.email, hashed_password=get_password_hash(user_in.password))
        session.add(user)
        session.commit()
        session.refresh(user)
        return user


@auth_router.get("/users/me", response_model=UserOut)
def read_users_me(current_user: User = Depends(get_current_active_user)):
    """
    Endpoint to get the current user's information.
    """
    return current_user
