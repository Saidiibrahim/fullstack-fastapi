"""
Module containing the User models for authentication and authorization.
"""

from sqlmodel import Field, SQLModel
from typing import Optional


class UserBase(SQLModel):
    username: str = Field(unique=True, index=True)
    email: str = Field(unique=True, index=True)
    hashed_password: str
    is_active: bool = Field(default=True)
    is_superuser: bool = Field(default=False)


class User(UserBase, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)


class UserIn(SQLModel):
    email: str
    password: str


class UserOut(SQLModel):
    username: str = Field(unique=True, index=True)
    email: str = Field(unique=True, index=True)
    is_active: bool = Field(default=True)
    is_superuser: bool = Field(default=False)
