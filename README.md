# AI-Powered Multilingual Public Awareness and Mass Communication Platform

## 1. Project Overview

The AI-Powered Multilingual Public Awareness and Mass Communication Platform is a web-based application designed to create, manage, translate and distribute public awareness messages in multiple languages.

The platform aims to make public information accessible to people from different linguistic backgrounds through multiple communication channels.

## 2. Project Objectives

- Create and manage public awareness campaigns.
- Support communication in multiple languages.
- Manage audience information.
- Provide a centralized platform for public communication.
- Enable communication through different channels.
- Use AI-powered services for multilingual communication.

## 3. Technology Stack

### Frontend
- React.js
- TypeScript
- Vite
- Tailwind CSS
- Material UI
- React Router
- Redux Toolkit
- Axios
- Lucide React
- Recharts

### Backend
- Python
- Django
- Django REST Framework
- Django REST Framework Simple JWT

### Database
- PostgreSQL

### AI and Language Processing
- FastAPI
- LLM APIs
- Indic NLP
- Translation and NLP models

### Development Tools
- Visual Studio Code
- Git
- GitHub
- Postman
- pgAdmin 4

## 4. Project Structure

```text
multilingual-platform/
│
├── backend/
│   ├── config/
│   ├── core/
│   ├── manage.py
│   └── venv/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── layouts/
│   │   ├── pages/
│   │   └── services/
│   ├── package.json
│   └── vite.config.ts
│
├── docs/
├── .gitignore
└── README.md
```

## 5. Prerequisites

Install the following before setting up the project:

- Python
- Node.js and npm
- PostgreSQL
- Git
- Visual Studio Code

## 6. Installation and Setup

### 6.1 Clone the Repository

```bash
git clone <repository-url>
cd multilingual-platform
```

### 6.2 Frontend Setup

Navigate to the frontend directory:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Frontend URL:

http://localhost:5173/

### 6.3 Backend Setup

Navigate to the backend directory:

```bash
cd backend
```

Create a virtual environment:

```bash
python -m venv venv
```

Activate the virtual environment using PowerShell:

```powershell
.\venv\Scripts\Activate.ps1
```

Install the backend dependencies:

```bash
pip install -r requirements.txt
```

Run database migrations:

```bash
python manage.py migrate
```

Start the Django development server:

```bash
python manage.py runserver
```

Backend URL:

http://127.0.0.1:8000/

## 7. Database Configuration

Database: PostgreSQL

Database name: multilingual_platform

Configure the following environment variables in `backend/.env`:

```env
DB_NAME=multilingual_platform
DB_USER=postgres
DB_PASSWORD=your_password
DB_HOST=127.0.0.1
DB_PORT=5432
```

**Note:** Never upload the actual `.env` file or database credentials to GitHub.

## 8. API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/health/` | Checks backend availability |

### Sample Response

```json
{
  "status": "success",
  "message": "Backend is working successfully!",
  "project": "Multilingual Public Awareness Platform"
}
```

## 9. Current Development Status

- Project environment initialized.
- GitHub repository created and connected.
- React frontend initialized.
- Django backend initialized.
- PostgreSQL database configured.
- Database connection established.
- Initial dashboard and navigation layout created.
- Health-check API implemented.
- Frontend and backend communication tested.

## 10. Future Development

- User authentication and authorization.
- Audience management.
- Campaign creation and management.
- Multilingual content generation.
- AI-powered translation.
- Communication channel integration.
- Campaign analytics and reporting.