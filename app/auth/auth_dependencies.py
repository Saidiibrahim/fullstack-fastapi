"""
Module containing dependency functions for authentication and authorization.
"""

from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from sqlmodel import Session
from typing import Optional
from .auth_models import User
from .auth_utils import decode_access_token, JWTError
from ..database import engine

# OAuth2PasswordBearer is a class that provides a way to get the token from the request
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/auth/login")


def get_current_user(token: str = Depends(oauth2_scheme)) -> Optional[User]:
    """
    Dependency function to get the current user based on the JWT token.
    """
    try:
        payload = decode_access_token(token)
        username: str = payload.get("sub")
        if username is None:
            raise ValueError("Invalid token")
        with Session(engine) as session:
            user = session.get(User, username)
            if user is None:
                raise ValueError("User not found")
            return user
    except (ValueError, JWTError):
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid credentials")


def get_current_active_user(current_user: User = Depends(get_current_user)) -> User:
    """
    Dependency function to get the current active user.
    """
    if not current_user.is_active:
        raise HTTPException(status_code=400, detail="Inactive user")
    return current_user


def get_current_active_superuser(current_user: User = Depends(get_current_user)) -> User:
    """
    Dependency function to get the current active superuser.
    """
    if not current_user.is_superuser:
        raise HTTPException(status_code=400, detail="Not a superuser")
    return current_user
