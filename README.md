# Comment Management Application

## Overview
This project is a Mini Commenting Platform built using FastAPI for the backend and Angular for the frontend. Dummy log in, add, delete, and view comments. The application supports nested comments.

## Technologies Used
- Python with FastAPI
- MongoDB for data storage
- Angular for frontend development
- Reactive Forms for form handling

## Setup Instructions

### How to run Backend

1. Ensure you have Python installed and MongoDB running locally.

2. **Create and Activate a Virtual Environment** (optional but recommended)
    bash
    python -m venv venv
    venv\Scripts\activate

3. **Install Dependencies**:
    bash
    pip install -r requirements.txt

4. **Run the FastAPI Application**:
    bash
    uvicorn app.main:app --reload

### How to run Frontend

1. Install Node.js and npm

2. Install Angular CLI:
    npm install -g @angular/cli

4. Navigate to the Frontend Directory:
    bash
    cd ../frontend

5.Install Angular Dependencies:
    bash
    npm install

6.Run the Angular Application:
    bash
    ng serve