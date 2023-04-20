FROM python:3.9

WORKDIR /app

COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt

COPY src/ /app/src

CMD ["uvicorn", "src.asgi:app", "--host", "0.0.0.0", "--port", "80"]
