
# Sprint 11 - Quality Assurance

https://sprint-11-quality-assurance.vercel.app

A frontend-focused QA project built as part of Prodesk Sprint 11.

This sprint focused on testing the ecommerce application using unit tests, component tests, and end-to-end testing.

## Features

- Product listing with 6 products
- Product detail pages
- Add to cart
- Increase and decrease cart quantities
- Remove products from cart
- Checkout flow
- User creation during checkout
- Order creation and confirmation
- Responsive frontend

## Testing

### Jest

Used Jest for testing the Redux cart logic.

Tests cover:

- Adding products
- Adding the same product multiple times
- Increasing quantity
- Decreasing quantity
- Removing products
- Clearing the cart
- Handling products that are not in the cart

### React Testing Library

Used React Testing Library to test cart UI interactions.

The tests verify that the DOM updates correctly when users:

- Increase product quantity
- Remove products
- Interact with the cart

### Cypress

Added an end-to-end test for the complete purchase flow:

`Products → Product → Cart → Checkout → Order Confirmation`

The Cypress test runs in a headless browser.

## Coverage

Current Jest coverage:

- Statements: 97.91%
- Branches: 90%
- Functions: 94.44%
- Lines: 97.82%

## Tech Stack

- Next.js
- React
- Redux Toolkit
- Node.js
- Express
- MongoDB
- Jest
- React Testing Library
- Cypress

## Running Locally

Install dependencies:

```bash
cd frontend
npm install
```
