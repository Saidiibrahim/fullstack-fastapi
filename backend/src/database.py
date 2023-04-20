import os
from sqlmodel import SQLModel, create_engine
from sqlmodel import create_engine, Session
from sqlalchemy.orm import sessionmaker


#DATABASE_URL = os.getenv("DATABASE_URL", "postgresql://myuser:mypassword@db:5432/mydatabase")
DATABASE_URL = os.getenv("DATABASE_URL", "sqlite:///./mydatabase.db")

engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)


def create_db_and_tables():
    SQLModel.metadata.create_all(engine)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
