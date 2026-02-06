# QuickClaim – Mini Insurance Claim Status Tracker

## Introduction

**Document Title:** QuickClaim – Mini Insurance Claim Status Tracker (MERN Capstone)

This project provides an end-to-end functional specification for a very small, time-bounded **2–3 hour MERN project** usable as a capstone for learners completing a 10-day MERN curriculum.  

It ensures any participant—even one joining mid-sprint—can clearly understand:

- What to build  
- What **not** to build  
- How the application should behave  

without ambiguity.

---

## Problem Statement & Business Context

### What problem are we solving?
Customers often submit insurance claims and then have **no easy way to quickly check their claim status online**.

### Who is impacted?
- **Customers** who want quick visibility into their claim progress.
- **Basic support staff** who must otherwise answer status queries manually.
- **Training participants** who need a realistic but simple MERN scenario.

### What happens if this is not solved?
- Increased support calls.
- Customer frustration due to lack of transparency.
- Training participants miss the opportunity to apply their MERN learnings.

### How success is defined in business terms
A simple, functioning, **single-user MERN module** that demonstrates:
- A backend API returning claim data.
- A small React frontend fetching and displaying claim status.
- The module can be implemented and demoed within **2–3 hours** after the 10-day training.

---

## Scope Definition

### 3.1 In-Scope

The following items are explicitly **in scope** for this mini capstone:

- A **single-page React UI** with:
  - Input for Claim ID
  - “Check Status” button
  - Panel to display claim details
- A **Node.js + Express backend** exposing a single GET endpoint  
  `/api/claims/:id`
- **Mock claim data** stored in memory or a simple local module  
  (MongoDB optional)
- **Minimal error handling and validation** on both frontend and backend
- **Local development setup only** (no deployment required)

---

### 3.2 Out-of-Scope

The following items are explicitly **out of scope** to prevent scope creep:

- User authentication or authorization (no login, no JWT)
- Role-based access control or officer portals
- Claim creation, update, or deletion flows (read-only lookup only)
- Policy management, premium calculations, or payment processing
- Cloud deployment (AWS), CI/CD, or performance tuning
- Advanced logging, monitoring, or alerting solutions

---

## User Personas & Roles

| Role | Description | Key Capabilities |
|------|------------|------------------|
| **Customer (End User)** | Insurance customer checking claim status | Enter Claim ID, trigger lookup, view claim info (read-only) |
| **Developer (Trainee)** | Training participant building the project | Implement frontend & backend, run locally, demo end-to-end flow |

---

## User Journeys / Flows

### Journey 1 – Customer Checks Claim Status

1. User opens the **QuickClaim web page** in a browser.
2. User sees:
   - Input field labeled **“Enter Claim ID”**
   - Button labeled **“Check Status”**
3. User types a claim ID (e.g., `CLM1001`).
4. User clicks **“Check Status”**.
5. Frontend sends a `GET` request to:
   `/api/claims/CLM1001`
6. If the claim exists, backend returns claim details.
7. UI displays a **claim details panel** showing:
   - Claim ID
   - Policy Number
   - Amount
   - Status Badge
8. If the user changes the Claim ID and clicks again, the UI updates with the new result.

---

### Journey 2 – Invalid Claim ID

1. User enters a Claim ID that **does not exist** in mock data.
2. Frontend sends request to backend.
3. Backend returns **404 / Not Found** (or equivalent error).
4. UI displays a **friendly error message**, such as:
   "Claim not found. Please check the ID and try again."

---

## Functional Requirements

### Frontend
- Single React page
- Input field for Claim ID
- Button to trigger API call
- Display panel for claim details
- Error message handling

### Backend
- Express server
- Single endpoint:
  `GET /api/claims/:id`
- Mock data stored in array/object/module
- Basic validation & error handling

---

## Non-Functional Requirements

- Simple and lightweight
- Easy to understand for beginners
- Runs locally
- No authentication
- Fast setup and demo

---

## Tech Stack

- **Frontend:** React
- **Backend:** Node.js, Express
- **Database:** Optional MongoDB (mock data preferred)
- **Tools:** VS Code, Postman, npm

---

## Expected Outcome

By completing this project, learners will demonstrate:

- API creation with Express
- React API integration
- State management basics
- Input validation
- Full MERN request-response flow understanding

---

## License

This project is intended for **educational and training purposes only**.
