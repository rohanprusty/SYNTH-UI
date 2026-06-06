# Synth-UI 🚀

Synth-UI is an AI-powered React UI Library and SaaS platform. It bridges the gap between static component libraries and generative AI, allowing developers to either install pre-built components via NPM or generate entirely custom UI elements dynamically using text prompts.

## ✨ Key Features

* **AI-Driven Generation:** Harness the OpenRouter API to generate custom React components by simply describing what you need.
* **NPM Integration:** Published as a standard NPM package for instant installation and usage in any React project.
* **SaaS Architecture:** Fully equipped with Razorpay integration to handle user subscriptions, credits, and paywalls.
* **Secure Authentication:** Robust user login, registration, and session management system to track generated components.
* **Full-Stack MERN:** Seamless data flow from a React frontend to an Express/Node backend, with prompt history and user data safely stored in MongoDB.

## 🛠️ Tech Stack

* **Frontend:** React.js
* **Backend:** Node.js, Express.js
* **Database:** MongoDB
* **AI Provider:** OpenRouter API
* **Payment Gateway:** Razorpay
* **Package Management:** NPM

## 📋 Prerequisites

* Node.js installed on your machine.
* MongoDB connection URI (local or Atlas).
* Active API keys for OpenRouter and Razorpay.

## ⚙️ Local Setup & Installation

**1. Clone the Repository**

```bash
git clone <your-repo-url>
cd synth-ui

```

**2. Install Dependencies**

* Navigate to both frontend and backend directories to install packages.

```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install

```

**3. Set Up Environment Variables**

* Create a `.env` file in your backend folder and include your secret keys:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
OPENROUTER_API_KEY=your_openrouter_key
RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_KEY_SECRET=your_razorpay_secret
JWT_SECRET=your_jwt_secret

```

**4. Run the Application**

* Start the development servers for both ends.

```bash
# Start backend server
cd backend
npm run dev

# Start frontend development server
cd frontend
npm start

```

## 📦 NPM Package Usage

**1. Install the Library**

* Add the UI library to your separate React project.

```bash
npm install synth-ui

```

**2. Import and Use**

* Import the ready-made components directly into your application.

```jsx
import { Button, Card } from 'synth-ui';

function App() {
  return (
    <Card>
      <Button text="Click Me" />
    </Card>
  );
}

```

## 💡 AI Generation Usage

* **Log In:** Access the deployed Synth-UI web application.
* **Prompt:** Navigate to the AI Generator and type your exact UI requirement (e.g., "Create a dark-mode pricing card with a hover effect").
* **Export:** Preview the AI-generated React code, copy it, and paste it directly into your own project files.

---

*Inspired by the "Build AI-Powered UI Library" MERN Stack tutorial by VIRTUAL CODE.*
