# API Documentation

## Authentication Endpoints

### POST /api/auth/register
Register a new user

### POST /api/auth/login  
Login user

### GET /api/auth/profile
Get user profile (requires authentication)

## Schedule Endpoints

### GET /api/schedule
Get all classes for authenticated user

### POST /api/schedule
Create new class

### PUT /api/schedule/:id
Update existing class

### DELETE /api/schedule/:id
Delete class

## Budget Endpoints

### GET /api/budget/transactions
Get all transactions

### POST /api/budget/transactions
Add new transaction

### GET /api/budget/summary
Get budget summary

## Study Endpoints

### GET /api/study/tasks
Get all study tasks

### POST /api/study/tasks
Create new task

### PUT /api/study/tasks/:id
Update task

## Quiz Endpoints

### GET /api/quiz
Get all quizzes

### POST /api/quiz
Create new quiz

### PUT /api/quiz/:id
Update quiz

### POST /api/quiz/:id/attempt
Submit quiz attempt
