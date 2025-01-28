# Strong Fitness Website Project

## Overview
This project is a fitness website that features a variety of role-based functionalities for admins, trainers, and members. It includes a dashboard for managing user roles, booking slots, viewing classes, and forums, as well as public-facing pages for showcasing trainers, classes, and community discussions.

---

## Features by Role

### **Admin Features**
- **All Newsletter Subscribers**: Display all newsletter subscribers in a tabular format.
- **All Trainers**:
  - View trainers in a table.
  - Delete a trainer to revert their role back to a member.
- **Applied Trainer**:
  - View all trainer applications in a table or cards.
  - Redirect to a detailed page for each applicant with options to confirm or reject the application.
- **Balance Page**:
  - Display the total balance and the last six booking transactions.
  - Visualize newsletter subscribers vs. paid members with a chart.
- **Add New Class**:
  - A form to add a new class with the following fields:
    - Class name
    - Image
    - Details
    - Additional info (optional)

### **Trainer Features**
- **Manage Slots**:
  - View all slots in a tabular format.
  - See booked slots with details about the booking member.
  - Delete slots with a confirmation prompt.
- **Add New Slot**:
  - A form with the following fields:
    - Read-only trainer information.
    - Select days (React Select used).
    - Slot name (e.g., Morning Slot).
    - Slot time (e.g., 1 hour).
    - Classes (selectable from admin-added classes).
    - Additional info (optional).
- **Add New Forum**:
  - Add forum posts visible on the public **Community/Forums Page**.

### **Member Features**
- **Activity Log**:
  - View the status of trainer applications (e.g., Pending, Rejected).
  - Click an eye icon to view rejection feedback via a modal.
- **Profile Page**:
  - Manage account details (except email).
  - View profile picture, name, email, last login status, and more.
- **Booked Trainer**:
  - View details about booked trainers, including:
    - Trainer info
    - Classes
    - Slots
    - Additional info
  - Provide feedback via a review button that opens a modal with:
    - Textarea for comments
    - Star rating system

---

## Public Features

### **Homepage**
- Showcase the latest six community/forum posts.
- Include direct links for further reading.

### **Newsletter Subscription**
- Form to collect the user's name and email address.
- Save subscriber data to the database without requiring login.

### **Community/Forums Page**
- Display six posts per page with backend pagination.
- Implement an up-vote and down-vote system for logged-in users.

---

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd fitness-website
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add the required variables (e.g., database URL, Firebase configuration).

5. Start the development server:
   ```bash
   npm start
   ```

---

## Technologies Used
- **Frontend**: React, Tailwind CSS
- **State Management**: Redux or TanStack Query
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: Firebase Authentication
- **Charts**: Chart.js or similar library

---

## Folder Structure
```
fitness-website/
├── src/
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   ├── utils/
│   └── styles/
├── public/
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── utils/
├── .env
├── package.json
└── README.md
```

---

## Contribution
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.


## Live Website
[Live Link Here](https://strong-fitness-21629.web.app)






