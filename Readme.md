# Microservices Project 🚀

## 📌 Overview
This project is built using a **microservices architecture** with three independent services:

- **Main Service** → Acts as the API gateway, handling requests and routing them to appropriate services.
- **User Service** → Handles user-related CRUD operations independently.
- **Product Service** → Manages product-related CRUD operations independently.

Each microservice is self-contained and operates independently, ensuring scalability and maintainability.

---

## 📌 Features Implemented

- ✅ **Independent CRUD Operations:** User and Product services perform their respective CRUD operations without dependencies.
- ✅ **API Gateway:** The Main Service routes incoming API requests to appropriate microservices.
- ✅ **Service Communication:** Microservices communicate using RESTful APIs or message queues like RabbitMQ.
- ✅ **Scalability:** Each service can be deployed and scaled independently.
- ✅ **Database Per Service:** Each microservice maintains its own database to ensure data separation.

---

## 🏗️ Architecture Overview

```
Client → Main Service (API Gateway) → User Service
                                    → Product Service
```

Each service runs independently and communicates via APIs or messaging queues.

---

## 🚀 Getting Started

### Prerequisites
- Node.js installed
- Database setup (MongoDB/PostgreSQL for each service)
- RabbitMQ for inter-service communication (if applicable)

### Running the Microservices
Each service must be started separately. Navigate to each service folder and execute:

```sh
# Install dependencies
npm install

# Start the service
npm start
```

