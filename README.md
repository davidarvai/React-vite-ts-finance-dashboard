# 💰 Finance Dashboard

A hobby project – a simple finance dashboard built with React, TypeScript, and Vite, with unit testing using Vitest.

---

## 🎯 Purpose of the Project

The main objectives of this project were:

- To understand how to set up a modern React application using Vite
- To apply TypeScript for type safety and better developer experience
- To implement a clean and scalable project structure
- To practice writing reusable utility functions
- To introduce unit testing using Vitest
- To learn how to configure a testing environment for frontend applications

---

## 🧱 What Was Implemented

### 1. Project Setup

- Initialized a React project using Vite
- Configured TypeScript with strict mode enabled
- Set up development, build, and preview scripts
- Organized the project into logical folders

---

### 2. TypeScript Integration

- Added TypeScript support across the project
- Defined custom types for application data
- Ensured type safety in utility functions and components
- Used strict compiler options to enforce best practices

---

### 3. Project Structure

The project was structured to improve maintainability and scalability:

- `assets/` → static resources
- `hooks/` → custom React hooks
- `services/` → API and external logic
- `utils/` → reusable helper functions
- `components/` → UI components (if applicable)

---

### 4. Utility Function Example

A utility function (`calculateBalance`) was implemented to demonstrate business logic separation from UI:

- Accepts an array of transactions
- Each transaction contains an `amount`
- Returns the total balance by summing all amounts

This helps keep logic reusable and testable.

---

### 5. Unit Testing with Vitest

- Installed and configured Vitest as the testing framework
- Added jsdom to simulate a browser environment
- Wrote unit tests for utility functions
- Learned how to run tests in watch mode
- Verified correctness of business logic using assertions

---

### 6. Testing Configuration

- Configured Vitest in the Vite setup
- Enabled global test APIs (`test`, `expect`)
- Integrated TypeScript support for tests
- Ensured test files are recognized using `.test.ts` naming convention

---

## 🚀 Tech Stack

- React
- TypeScript
- Vite
- Vitest

