# project-structure.md – Orbit Patrimoine (English Version)

## Objective
This file defines the folder and file structure for the MVP of Orbit Patrimoine. The goal is to maintain a clean, modular, and scalable architecture for development using React with Vite.

---

## Project Folder Structure

```
/
├── src/                    # Main source code
│   ├── main.tsx           # Application entry point
│   ├── App.tsx            # Root application component
│   ├── index.css          # Global styles
│   ├── App.css            # App-specific styles
│   ├── vite-env.d.ts      # Vite environment types
│   │
│   ├── components/        # Reusable components
│   │   ├── Navbar.tsx     # Navigation bar
│   │   └── ...           # Other components
│   │
│   ├── pages/            # Application pages
│   │   ├── Home.tsx      # Home page
│   │   ├── Login.tsx     # Login page
│   │   └── ...          # Other pages
│   │
│   ├── hooks/            # Custom React hooks
│   │   └── useAuth.ts    # Authentication hook
│   │
│   ├── context/          # React contexts
│   │   └── AuthContext.tsx # Authentication context
│   │
│   ├── lib/              # Utilities and services
│   │   └── supabase.ts   # Supabase client
│   │
│   └── types/            # TypeScript types
│       └── index.ts      # Global types
│
├── public/               # Static assets
│
├── .cursor/             # Cursor configuration
│   └── project-structure.md  # (this file)
│
├── node_modules/        # npm dependencies
├── .env.local          # Environment variables
├── .gitignore          # Git ignored files
├── package.json        # Dependencies and scripts
├── package-lock.json   # Dependency lock file
├── tsconfig.json       # TypeScript configuration
├── tsconfig.app.json   # TypeScript app configuration
├── tsconfig.node.json  # TypeScript Node configuration
├── vite.config.ts      # Vite configuration
├── postcss.config.js   # PostCSS configuration
├── tailwind.config.ts  # Tailwind configuration
├── components.json     # Components configuration
├── eslint.config.js    # ESLint configuration
└── README.md           # Project documentation
```

---

## Organization Principles
- Use a **modular** structure in `/src/` with clear separation of concerns
- Group all **reusable components** in `/components/`
- Organize components by feature/domain
- Place **custom hooks** in `/hooks/`
- Store **authentication logic** in `/context/`
- Define **TypeScript types** in `/types/`
- Maintain Cursor configuration in `/.cursor/`

---

## Naming Conventions
- Use **PascalCase** for React components (ex: `Navbar.tsx`)
- Use **camelCase** for hooks and functions (ex: `useAuth.ts`)
- Use **kebab-case** for configuration files
- Use **index.ts** for barrel exports in component directories

---

## Best Practices
- Document complex components directly in the code
- Avoid nested folders unless structurally necessary
- Maintain a clear and readable structure
- Place all new utility functions in `/lib/`
- Use TypeScript for type safety
- Implement proper authentication flow

---

**Keep this file updated as the project evolves.**
