"""
Module containing the User models for authentication and authorization.
"""

from sqlmodel import Field, SQLModel
from typing import Optional


class User(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    username: str = Field(unique=True, index=True)
    email: str = Field(unique=True, index=True)
    hashed_password: str
    is_active: bool = Field(default=True)
    is_superuser: bool = Field(default=False)


class UserIn(SQLModel):
    username: str
    email: str
    password: str


class UserOut(SQLModel):
    id: int
    username: str
    email: str
    is_active: bool
    is_superuser: bool
