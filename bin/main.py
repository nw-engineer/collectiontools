from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import pandas as pd
import sqlite3
import math

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class TimeSeriesData(BaseModel):
    id: int
    date: str
    value: int
    yhat: int
    yhat_lower: int
    yhat_upper: int

conn = sqlite3.connect("database.db", check_same_thread=False)
c = conn.cursor()
create_table_query = "CREATE TABLE IF NOT EXISTS predict (id INTEGER PRIMARY KEY AUTOINCREMENT, timestamp TEXT, value INTEGER, yhat INTEGER, yhat_lower INTEGER, yhat_upper INTEGER);"
c.execute(create_table_query)

@app.get("/timeseries-data")
def get_timeseries_data():
    conn = sqlite3.connect('database.db')
    cursor = conn.cursor()
    cursor.execute("SELECT timestamp, value, yhat, yhat_lower, yhat_upper FROM predict")
    data = cursor.fetchall()
    conn.close()
    return {"data": data}

@app.post("/timeseries-data")
def create_timeseries_data(data: TimeSeriesData):
    conn = sqlite3.connect('database.db')
    cursor = conn.cursor()
    cursor.execute(
        "INSERT INTO predict (timestamp, value, yhat, yhat_lower, yhat_upper) VALUES (?, ?, ?, ?, ?)",
        (data.date, data.value, data.yhat, data.yhat_lower, data.yhat_upper)
    )
    conn.commit()
    conn.close()
    return {"message": "Data received"}