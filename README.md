# MediCare — Patient Management System

A web application for registering patients, capturing vitals (Height, Weight, and auto-calculated BMI), 
performing conditional health assessments, and viewing a filterable patient listing.

Built for the Intellisoft Web App & Backend Development practical assignment.

## Approach

This project uses a **custom backend built from scratch**, rather than the API provided in the 
Postman collection.

- Backend: Django REST Framework, deployed at `https://patient-management-backend-e85b.onrender.com`
- Frontend: Next.js (App Router), TypeScript, Tailwind CSS

## Application Flow

1. **Patient Registration** — captures Patient ID (unique), Registration Date, First Name, Last Name, DOB, Gender.
   A patient cannot be registered twice; the Patient ID is enforced as unique on the backend.
2. **Vitals** — captures Visit Date, Height (cm), Weight (kg); BMI is auto-calculated (`weight / height(m)²`).
3. **Conditional Assessment**:
   - BMI ≤ 25 → **General Assessment** (General Health, Currently using drugs?, Comments)
   - BMI > 25 → **Overweight Assessment** (General Health, Ever been on a diet?, Comments)
4. **Patient Listing** — shows all registered patients with Name, Age (calculated from DOB), 
   Last BMI Status (Underweight / Normal / Overweight), and supports filtering by visit date.

## Tech Stack

**Frontend**
- Next.js (App Router) + TypeScript
- Tailwind CSS
- Axios for API requests

**Backend**
- Django + Django REST Framework
- Deployed on Render

## Backend Models

- **Patient**: `unique` (patient ID, unique), `reg_date`, `firstname`, `lastname`, `dob`, `gender`
- **Vital**: `patient` (FK), `visit_date`, `height`, `weight`, `bmi`
- **Visit**: `patient` (FK), `visit_date`, `general_health`, `on_diet` (optional), `on_drugs` (optional), `comments`

## Running Locally

```bash
git clone <your-repo-url>
cd Patients-Management
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

The app talks to the live deployed backend at:
`https://patient-management-backend-e85b.onrender.com/api`

No local backend setup is required — the app connects to the deployed API directly.

## API Endpoints

| Purpose | Method | Endpoint |
|---|---|---|
| Register patient | POST | `/api/patients/create` |
| List patients | GET | `/api/patients/view` |
| Get single patient | GET | `/api/patients/show/<id>` |
| Update patient | PUT | `/api/patients/update/<id>` |
| Delete patient | DELETE | `/api/patients/delete/<id>` |
| Add vitals | POST | `/api/vital/create` |
| List vitals | GET | `/api/vital/view` |
| Add visit/assessment | POST | `/api/visits/create` |
| List visits | GET | `/api/visits/view` |

## Notes

- The Overweight and General Assessment pages are reached only via the Vitals form redirect 
  (based on calculated BMI), not through direct navigation, per the assignment spec.