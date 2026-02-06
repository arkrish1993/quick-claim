# QuickClaim - Mini Insurance Claim Status Tracker

1. Introduction
Document Title: QuickClaim – Mini Insurance Claim Status Tracker (MERN Capstone)
This document provides an end-to-end functional specification for a very small, time-bounded, 2–3 hour MERN project usable as a capstone for learners completing the 10-day MERN curriculum. It ensures any participant—even one joining mid-sprint—can understand what to build, what not to build, and how the application should behave without ambiguity.

2. Problem Statement & Business Context
What problem are we solving?
Customers often submit insurance claims and then have no easy way to quickly check their current claim status online.
Who is impacted?
• Customers who want quick visibility into their claim progress.
• Basic support staff who must otherwise answer status queries manually.
• Training participants who need a realistic but simple MERN scenario.
What happens if this is not solved?
• Increased support calls.
• Customer frustration due to lack of transparency.
• Training participants miss the opportunity to apply their MERN learnings.
How success is defined in business terms:
• A simple, functioning, single-user MERN module that demonstrates: a backend API returning claim data and a small React frontend fetching and displaying claim status.
• The module can be implemented and demoed within 2–3 hours after the 10-day training.

3. Scope Definition
3.1 In-Scope
The following items are explicitly in scope for this mini capstone:
•	A single-page React UI with: input for Claim ID, "Check Status" button, and a panel to display claim details.
•	A Node.js + Express backend exposing a single GET endpoint (/api/claims/:id).
•	Mock claim data stored in memory or in a simple local module (MongoDB optional).
•	Minimal error handling and validation on both frontend and backend.
•	Local development setup only (no deployment required).
3.2 Out-of-Scope
The following items are explicitly out of scope to prevent scope creep:
•	User authentication or authorization (no login, no JWT).
•	Role-based access control or separate officer portals.
•	Claim creation, update, or deletion flows (read-only status look-up only).
•	Policy management features, premium calculations, or payment processing.
•	Cloud deployment (AWS), CI/CD, or advanced performance tuning.
•	Detailed logging frameworks, monitoring, or alerting solutions.

5. User Personas & Roles
The following roles interact with the system or are relevant for the capstone context:
Role	Description	Key Capabilities
Customer (End User)	An insurance customer who wants to check the status of a previously submitted claim.	Can enter a Claim ID, trigger status lookup, and view claim information (read-only).
Developer (Trainee)	Training participant building and demonstrating the capstone application.	Implements the frontend and backend components, runs the application locally, and demonstrates the end-to-end flow.

6. User Journeys / Flows
Journey 1 – Customer checks claim status
1. User opens the QuickClaim web page in a browser.
2. User sees a single input field labeled "Enter Claim ID" and a button labeled "Check Status".
3. User types a claim ID (e.g., CLM1001) into the input field.
4. User clicks the "Check Status" button.
5. The frontend sends a GET request to /api/claims/CLM1001.
6. If the claim exists, the backend returns claim details.
7. The UI displays the claim details panel showing Claim ID, Policy Number, Amount, and Status badge.
8. If the user changes the Claim ID and clicks again, the UI updates with the new result.
Journey 2 – Invalid Claim ID
1. User enters a Claim ID that does not exist in the mock data.
2. User clicks "Check Status".
3. Backend returns HTTP 404 with { "message": "Claim not found" }.
4. UI displays an error banner with the text "Claim not found".
5. When the user performs another search, the error banner is cleared or replaced with the new result.

6. Functional Requirements
6.1 Feature Breakdown
Feature Name: Fetch Claim Status
Description: Retrieve a claim record based on Claim ID from mock data.
Trigger: User clicks the "Check Status" button on the UI.
Expected Behavior:
• Frontend validates that Claim ID is not empty and appears alphanumeric.
• Frontend sends a GET request to /api/claims/:id.
• Backend searches mock data for a claim whose id matches the requested Claim ID.
• If found, backend returns HTTP 200 with the claim object.
• Frontend renders the claim details panel with the returned data.
Edge Cases:
• Empty Claim ID input: frontend does not call API and shows inline validation message.
• Claim ID with leading/trailing spaces: frontend trims before sending.
• Backend unexpectedly fails: frontend shows a generic error message.
Validation Rules:
• Claim ID field is required.
• Claim ID must contain only letters and numbers (no spaces or special characters).
• If validation fails, API call is not made and an error message is displayed below the input.
Feature Name: Display Claim Details
Description: Present the claim details in a structured format once retrieved from the backend.
Trigger: Backend returns HTTP 200 with a valid claim object.
Expected Behavior:
• UI displays a result panel containing Claim ID, Policy Number, Amount, and Status.
• Status is shown as a colored badge (e.g., blue for SUBMITTED, green for APPROVED, red for REJECTED).
• Any previous error messages are cleared when valid data is displayed.
Edge Cases:
• If the claim object is missing any mandatory field, frontend shows a generic error instead of partial data.
Validation Rules:
• All four fields (id, policyNumber, amount, status) must be present before rendering the result panel.
Feature Name: Error Handling UI
Description: Provide clear feedback to the user when the claim is not found or when the server cannot be reached.
Trigger: Backend returns a non-200 response or the fetch call fails.
Expected Behavior:
• For 404 responses, UI displays the message from the API ("Claim not found").
• For network failures or 500 errors, UI displays a generic message ("Unable to connect to server" or "Something went wrong").
• Error message is shown in a distinct style (e.g., red banner).
Edge Cases:
• Repeated failed attempts show the same error message; message is replaced when a new result is successfully fetched.
Validation Rules:
• Error banner clears when a new lookup is initiated (e.g., when user changes Claim ID and clicks again).

7. Non-Functional Requirements
Performance:
• API response time should be under 300 ms in a local development environment using mock data.
Accessibility:
• Input field must have an associated label.
• Buttons must be focusable and operable via keyboard (Enter/Space).
• Error messages should be visually distinct.
Security:
• No authentication is required; no sensitive personal data is handled.
• Do not expose any system or stack traces to the end user.
Browser / Device Support:
• Support latest versions of Chrome and Edge on desktop. Mobile optimization is a nice-to-have but not required for this mini capstone.
Load Expectations:
• Application is intended for single-user demonstration in a training environment; high concurrency is not a concern.

8. UI / UX Requirements
The UI consists of a single screen (Claim Status Lookup).
Screen List:
• Claim Status Lookup Screen (single page).
Field-Level Specifications:
Claim ID Input Field
• Label: "Enter Claim ID".
• Type: single-line text.
• Placeholder: "CLM1001".
• Mandatory: Yes.
• Error message (empty): "Claim ID is required."
• Error message (invalid characters): "Claim ID must be alphanumeric."
Check Status Button
• Text: "Check Status".
• Default state: enabled when input is non-empty and passes basic validation; disabled when input is empty.
• Loading state: display "Checking..." or show a spinner while waiting for API response.
Result Panel
• Appears only after a successful API response.
• Fields displayed: Claim ID, Policy Number, Amount, Status.
• Status badge colors: SUBMITTED = blue, APPROVED = green, REJECTED = red.
• Layout: label on the left, value on the right for each field.
Error Banner
• Displayed above the result panel area.
• Background color: light red; text color: dark red.
• Text examples: "Claim not found" or "Unable to connect to server".
• Should disappear or be replaced when a new request is made.

9. Data Model & Fields
9.1 Data Entities
Only one core entity is required for this mini capstone: Claim.
Field Name	Type	Mandatory (Yes/No)	Source	Notes
id	String	Yes	Mock data	Unique Claim ID used for lookup (e.g., CLM1001).
policyNumber	String	Yes	Mock data	Identifier of the policy associated with the claim.
amount	Number	Yes	Mock data	Claim amount requested by the customer.
status	String	Yes	Mock data	Enumeration: SUBMITTED, APPROVED, or REJECTED.
9.2 Status Transitions
This mini capstone is read-only for claims. No status changes occur within the application.
• Allowed transitions: None within this system (status is treated as static).
• Disallowed transitions: Any attempt to change claim status from the frontend or backend is out of scope.

10. API / Integration Details
The application exposes a single backend endpoint for claim lookup.
Endpoint: GET /api/claims/:id
Request:
• Method: GET.
• Path parameter: id (Claim ID).
• No request body.
Successful Response (200):
Example JSON:
{"id": "CLM1001", "policyNumber": "POL2003", "amount": 15000, "status": "APPROVED"}
Not Found Response (404):
Example JSON:
{"message": "Claim not found"}
Server Error Response (500):
Example JSON:
{"message": "Internal server error"}

11. Error Handling & Edge Cases
Empty States:
• When the page loads initially, no claim details are shown.
• If the user has not searched yet, display a neutral message such as "Enter a Claim ID to check status."
Network Failures:
• If the fetch request fails due to network issues or server being down, display: "Unable to connect to server."
Unauthorized Access:
• Not applicable. No authentication is used in this mini capstone.
Partial Saves:
• Not applicable. The system does not modify data; data is static mock data.
Retry Logic:
• Users may trigger new lookups by editing the Claim ID and clicking "Check Status" again. No automatic retries are required.

12. Logging, Alerts & Audit
Logging:
• Backend should log each incoming request to /api/claims/:id with timestamp and Claim ID.
• Errors should be logged to the console with stack trace in development mode.
Alerts:
• No automated alerting is required for this mini capstone.
Audit:
• No audit trail is required because the application is read-only and uses mock data.

13. Acceptance Criteria (Definition of Done)
Use Given–When–Then format:
1. Given a valid Claim ID exists in mock data, When the user enters that Claim ID and clicks "Check Status", Then the application displays the correct claim details with status badge.
2. Given a Claim ID does not exist in mock data, When the user enters that Claim ID and clicks "Check Status", Then the application displays an error banner with the message "Claim not found".
3. Given the Claim ID input is empty, When the user clicks "Check Status", Then the application does not call the API and shows the inline message "Claim ID is required."
4. Given the backend is unreachable, When the user clicks "Check Status", Then the UI displays "Unable to connect to server." and does not crash.

14. Testing Checklist (For the Developer)
The developer should confirm the following before considering the capstone complete:
☐ Input validation prevents empty Claim ID submissions.
☐ Valid Claim IDs return correct claim data.
☐ Invalid Claim IDs result in a visible "Claim not found" message.
☐ Network or server errors result in a visible generic error message.
☐ Result panel only appears when valid data is present.
☐ Error banner clears or updates on subsequent lookups.
☐ No console errors occur during normal usage.
☐ Code is reviewed by a peer or instructor.

15. Open Questions & Assumptions
Assumptions:
• Mock data is sufficient; integration with MongoDB is optional.
• No authentication is required; any user can check claim status if they know the Claim ID.
• Application will be run locally on developer machines.
Open Questions:
• Should the mock data include additional fields (e.g., customer name, claim type) for display?
• Should the UI include basic responsive styling for mobile, or is desktop-only acceptable?

16. Appendix
Sample Mock Claim List (JSON):
[{"id": "CLM1001", "policyNumber": "POL2003", "amount": 15000, "status": "APPROVED"},
 {"id": "CLM1002", "policyNumber": "POL1009", "amount": 5200, "status": "SUBMITTED"},
 {"id": "CLM1003", "policyNumber": "POL3005", "amount": 8400, "status": "REJECTED"}]


