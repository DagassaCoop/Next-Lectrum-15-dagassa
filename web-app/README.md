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

- **Apollo Client Setup**: Configured with `ApolloNextAppProvider` for seamless GraphQL integration.

- **Custom Layouts**: Use of custom layouts for different sections of the app, such as `RootLayout` and `TeacherLayout`.

- **Dynamic API Routes**: Implementation of dynamic API routes for fetching course details.

- **Component-Based Architecture**: Modular components for reusability, such as `CourseCard`, `CourseDetail`, and `ProfileInfo`.

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

## Deployment

The project is configured for deployment on Vercel. For more details, refer to the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## Contributing

Contributions are welcome! Please ensure that you follow the code style and add tests for any new features.

## License

This project is private and proprietary as indicated in the package.json configuration.
