# rules.md – Orbit Patrimoine Project

## Objective
You are developing a web MVP for **Orbit Patrimoine**, a conversational assistant dedicated to individual real estate investors. The goal is to provide neutral, personalized support through a chat-based AI interface and a public documentation blog.

The website includes two main areas:
- A conversational AI chat interface (accessible after sign-up)
- A public blog that displays internal documentation (from local markdown files)

## MVP Features to Build
1. ✅ Chat interface powered by the OpenAI GPT-4 API
2. ✅ Authentication using Supabase (email/password)
3. 🚧 User profile creation form (goals, experience level, strategy)
4. 🚧 User dashboard page (accessible after login)
5. ✅ Blog rendering system using markdown files with categories
6. ✅ Basic SEO for the blog section

## Required Tech Stack
- Framework: **React with Vite** (with TypeScript) ✅
- UI: **Tailwind CSS** (for responsive, modern styling) ✅
- Backend & Auth: **Supabase** (PostgreSQL, Auth, Storage) ✅
- AI: **OpenAI GPT-4 API** via HTTPS POST 🚧
- Blog: uses `.mdx` files integrated in the React project ✅
- Hosting: **Vercel or similar platform** ✅

## Constraints
- Must be fully responsive (desktop and mobile) ✅
- Code should be modular, clean, commented, and reusable ✅
- No external CMS (blog content is fully local) ✅
- Do not add external libraries unless explicitly requested ✅
- The blog must not rely on a database (markdown files only) ✅
- Prioritize performance and simplicity in the UX/UI ✅
- Use TypeScript for all code files ✅
- Properly handle client-side storage ✅
- Implement robust error handling ✅
- Code in English, but user interface in French ✅

## Recommended File Structure
- `/src`: main source code ✅
  - `/src/pages`: page components ✅
  - `/src/components`: reusable UI components ✅
    - `/src/components/ui`: basic UI components ✅
  - `/src/hooks`: custom React hooks ✅
  - `/src/context`: React contexts ✅
  - `/src/lib`: utility functions (Supabase helpers, etc.) ✅
  - `/src/types`: TypeScript type definitions ✅
- `/public`: static assets ✅
- `/.cursor`: Cursor configuration files ✅

## Expected Best Practices
- Use clear, descriptive names for files and functions ✅
- Document complex components ✅
- Use modern React hooks (`useEffect`, `useState`, etc.) ✅
- Build the foundation for future Premium features ✅
- Use functional components with hooks rather than classes ✅
- Implement local state management with `useState` and `useContext` ✅
- Use strict TypeScript types for all components and functions ✅
- Follow PascalCase naming convention for components and camelCase for functions ✅
- Implement appropriate error handling with clear user messages ✅
- Optimize performance by avoiding unnecessary re-renders ✅
- Use loading components to improve UX during asynchronous operations ✅

## Example Prompt to Use in AI Chat
> "You are an expert assistant in real estate investment strategy. You help users clarify their goals and better understand the steps of a rental property project. Here is the user profile: [user profile data]."

## Specific Development Rules
- **Authentication**: Use Supabase for authentication with session management ✅
- **Route Management**: Protect authenticated routes with ProtectedRoute component ✅
- **UI Components**: Create reusable and modular components ✅
- **State Management**: Use custom hooks for business logic ✅
- **Error Handling**: Implement robust error handling with clear user messages ✅
- **Performance**: Optimize performance by avoiding unnecessary re-renders ✅
- **Accessibility**: Ensure the application is accessible to users with special needs ✅
- **Testing**: Add tests for critical components and functions (to be implemented) 🚧
- **Documentation**: Maintain up-to-date documentation for complex components and functions ✅
- **Internationalization**: Prepare the application for future internationalization (i18n) ✅
- **Language**: Code in English, but user interface in French ✅

---

**This file should be updated progressively as development evolves.**
