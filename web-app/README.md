# Cursus Platform

A modern learning and teaching platform built with Next.js 15, TypeScript, and GraphQL.

## Technology Stack

- **Frontend Framework**: Next.js 15.0.3
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **API Integration**: Apollo Client
- **Code Generation**: GraphQL Codegen
- **Development Tools**: ESLint, Prettier

## Features

- **Modern React Implementation**: Utilizing React 19 RC for building components.
- **GraphQL Integration**: Apollo Client is used for managing GraphQL operations, with code generation for type-safe queries.
- **Responsive Design**: Tailwind CSS is used for styling, ensuring a responsive and modern UI.
- **Custom Fonts**: Integration of custom fonts using `next/font`.
- **Dynamic Routing**: Next.js dynamic routing for pages like courses and news.
- **State Management**: Use of React hooks for managing state and side effects.
- **Server-Side Rendering**: Leveraging Next.js features for SSR and static site generation.

## Key Solutions

### Apollo Client Integration

- **Custom Apollo Provider**: Implemented using `ApolloNextAppProvider` for seamless GraphQL integration with Next.js 15
- **Type-Safe Queries**: Utilizes GraphQL Codegen to generate TypeScript types from the GraphQL schema
- **GraphQL Codegen**: Automated type generation from GraphQL schema
- **GraphQL Operations**: Structured queries and mutations for course management

### Authentication System

- **JWT-based Auth**: Implementation of login and registration flows with JWT token storage
- **Protected Routes**: Authentication state management for protected routes
- **Responsive Auth Forms**: Modern, accessible authentication forms with error handling

### Layout System

- **Root Layout**: Global layout with header and footer components

- **Teacher Dashboard Layout**: Specialized layout for teacher section with profile information

### Parallel Routing

- **Implementation of parallel routes for info pages (team and contact sections)**

### Component Architecture

- **Reusable Course Components**: Modular course cards and detail views\*\*

- **Dynamic News System**: Interactive news components with real-time comments and likes

- **Profile Management**: Comprehensive profile information display with course statistics

### API Integration

- **Dynamic API Routes**: Implementation of RESTful endpoints for various data fetches

### State Management

- **Custom Hooks**: Specialized hooks for data fetching and state management

- **Local State**: Efficient use of React's useState for component-level state management

### Styling Solution

- **Tailwind Configuration**: Custom Tailwind setup with extended theme options

## Project Structure

```
├── src/
│ ├── app/                    # Next.js App Router directory - contains all pages and routing logic
│ │   ├── admin/              # Admin section routes and pages
│ │   ├── api/                # API routes for backend functionality
│ │   ├── info/               # Information pages with parallel routing
│ │   ├── login/              # Authentication login pages
│ │   ├── news/               # News section with dynamic routing
│ │   └── teacher/            # Teacher-specific section and routes
│ │
│ ├── components/             # Reusable React components
│ │   ├── courses/            # Course-related components (cards, lists, details)
│ │   ├── header/             # Header-related components (navigation, logo, auth)
│ │   └── news/               # News-related components
│ │
│ ├── constants/              # Application constants and configurations
│ │   └── graphql/            # GraphQL queries and mutations
│ │       ├── mutations/      # GraphQL mutation definitions
│ │       └── queries/        # GraphQL query definitions
│ │
│ ├── hooks/                  # Custom React hooks for shared logic
│ │
│ ├── lib/                    # Utility functions and service configurations
│ │
│ ├── mock/                   # Mock data for development and testing
│ │
│ ├── styles/                 # Global styles and CSS configurations
│ │
│ └── types/                  # TypeScript type definitions
│     └── __generated__/      # Auto-generated types from GraphQL schema
```

## Getting Started

1. **Install Dependencies**:

   ```bash
   npm install
   # or
   yarn install
   ```

2. **Run Development Server**:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

3. **Open [http://localhost:3000](http://localhost:3000)** to view the app.
