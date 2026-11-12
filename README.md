# AI-Powered Multilingual Public Awareness and Mass Communication Platform

## 1. Project Overview

A web-based platform designed to create, manage and distribute
multilingual public awareness campaigns.

## 2. Technology Stack

### Frontend
- React.js
- TypeScript
- Vite
- Axios
- React Router
- Redux Toolkit
- Lucide React
- Recharts

### Backend
- Python
- Django
- Django REST Framework

### Database
- PostgreSQL

## 3. Project Structure

multilingual-platform/
├── frontend/
├── backend/
├── docs/
├── .gitignore
└── README.md

## 4. Development Setup

### Frontend Setup

cd frontend
npm install
npm run dev

Frontend runs at:
http://localhost:5173/

### Backend Setup

cd backend
python -m venv venv

Activate virtual environment:

.\venv\Scripts\Activate.ps1

Install dependencies:

pip install django djangorestframework
pip install djangorestframework-simplejwt
pip install django-filter drf-spectacular
pip install "psycopg[binary]" python-decouple django-cors-headers

Run migrations:

python manage.py migrate

Start backend:

python manage.py runserver

Backend runs at:
http://127.0.0.1:8000/

## 5. Database Configuration

Create a PostgreSQL database named:

multilingual_platform

Configure database credentials in backend/.env.

Required variables:

DB_NAME
DB_USER
DB_PASSWORD
DB_HOST
DB_PORT

Never commit the .env file.

## 6. API Verification

Health-check endpoint:

GET /api/health/

Expected response:

{
  "status": "success",
  "message": "Backend is working successfully!",
  "project": "Multilingual Public Awareness Platform"
}

## 7. Current Development Status

- Project initialization completed.
- React frontend initialized.
- Django backend initialized.
- PostgreSQL connection established.
- Initial dashboard created.
- Health-check API implemented.
- Frontend-backend communication verified.