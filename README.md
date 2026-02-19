# Next.js Expense Tracker

Welcome to the **Next.js Expense Tracker**! This is a beginner-friendly full-stack project that helps you manage your personal expenses. It’s built with **Next.js**, **React**, **Tailwind CSS**, and **Drizzle ORM** for database management. This project is perfect for learning full-stack development and deploying modern web apps.

---

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

---

## Demo

Add your deployed app link here (e.g., Vercel, Netlify):  
[Live Demo](https://expense-tracker-alpha-inky-61.vercel.app/)

---

## Features

- Add, edit, and delete expenses
- Track expenses by category
- Responsive and mobile-friendly UI
- Dark and light mode support
- Persistent storage with a database via Drizzle ORM
- Optional: Secure authentication with Clerk

---

## Tech Stack

- **Frontend:** Next.js, React  
- **Styling:** Tailwind CSS  
- **Backend / Database:** Drizzle ORM  
- **Authentication (Optional):** Clerk  
- **Deployment:** Vercel

---

## Getting Started

Follow these steps to run the project locally:

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/nextjs-expense-tracker.git
cd nextjs-expense-tracker
````

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Set up environment variables

Create a `.env` file in the root and add your environment variables, for example:

```env
NEXT_PUBLIC_CLERK_SIGN_IN_URL=your-clerk-sign-in-url
DATABASE_URL=your-database-connection-string
```

### 4. Run the development server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.
