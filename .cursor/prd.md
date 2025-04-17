# Project Requirements Document (PRD) - Orbit Patrimoine

## Project Overview

Orbit Patrimoine is a web-based conversational assistant designed to help individual investors navigate the real estate investment process. The MVP focuses on delivering a freemium chat experience and a structured knowledge base.

This MVP is developed using React with Vite, TypeScript, Tailwind CSS, Supabase, and OpenAI GPT-4.

⸻

## Objective

Build a functional MVP where:
- Visitors can register and log in
- Users can access a chat interface powered by GPT-4
- The chatbot provides personalized responses based on the user's profile
- Relevant blog posts can be linked within the conversation
- A public blog provides static educational content for SEO and credibility

⸻

## Target Users
- Individual French-speaking real estate investors
- Beginner to intermediate level
- Seeking neutral, non-commercial financial advice

⸻

## Core Features

1. Authentication ✅
  - Sign-up and login via email/password (Supabase) ✅
  - Minimal UI: form with validation and error display ✅
  - Route protection with ProtectedRoute component ✅
  - Session management via Supabase Auth ✅

2. User Profile 🚧
  - After registration, users fill out a short form with:
  - Investment goal
  - Experience level
  - Strategy preference
  - The profile is saved in Supabase and reused by the AI

3. AI Chat Interface 🚧
  - Display the conversation in a familiar chat layout ✅
  - Text input field and send button ✅
  - Send user profile + message to OpenAI API 🚧
  - Display AI response below each user message ✅
  - Support context (remember previous interactions) 🚧
  - Link to a relevant blog post (if applicable) 🚧

4. Blog ✅
  - Public blog at /blog ✅
  - Articles displayed with BlogCard component ✅
  - Each article includes a title, summary, and content ✅
  - Route: /blog ✅
  - Article list with responsive grid ✅

5. Dashboard 🚧
  - Display user properties 🚧
  - Add new properties 🚧
  - Detailed property view 🚧
  - Intuitive UI with cards and responsive grid 🚧

6. UI Components ✅
  - Navbar: navigation bar with links to main sections ✅
  - AuthForm: reusable authentication form ✅
  - ProtectedRoute: route protection for authenticated pages ✅
  - Button, Input, Card: reusable UI components ✅
  - ThemeProvider: dark/light mode support ✅
  - Hero, Features, CTA, Testimonials: landing page components ✅
  - Footer: site footer with links and information ✅
  - Sidebar: navigation sidebar for dashboard 🚧

⸻

## Technical Constraints
- Use React with Vite for the frontend ✅
- Use TypeScript throughout the codebase ✅
- Use Tailwind CSS for all layout and styling ✅
- Use Supabase for authentication and database ✅
- Use shadcn/ui components for consistent UI ✅
- All rules defined in .cursor/rules.md must be followed

⸻

## Deliverables
- Pages:
  - / – Homepage ✅
  - /chat – Chat interface (auth protected) 🚧
  - /dashboard – Profile data and completion prompt 🚧
  - /login, /signup – Auth pages ✅
  - /blog – Blog article list (public) ✅
  - /reset-password – Password reset page ✅
- Components:
  - Navbar.tsx ✅
  - AuthForm.tsx ✅
  - ProtectedRoute.tsx ✅
  - Button.tsx, Input.tsx, Card.tsx ✅
  - ChatPanel.tsx, ChatMessage.tsx ✅
  - BlogCard.tsx ✅
  - Hero.tsx, Features.tsx, CTA.tsx, Testimonials.tsx ✅
  - Footer.tsx ✅
  - Sidebar.tsx 🚧
  - ThemeProvider.tsx ✅

⸻

## Out of Scope (for MVP)
- Payment integration (for premium tier)
- Real-time chat updates (use useState, no websockets)
- Admin dashboard
- Multilingual support

⸻

## Success Criteria
- The MVP is deployable on Vercel or similar platform
- Users can sign up, complete their profile, and chat
- Blog content is publicly accessible and searchable
- The code is modular, well-documented, and follows the project rules.md

⸻

## Progress Overview
- Authentication: ✅ Completed
- User Profile: 🚧 In Progress
- Dashboard: 🚧 In Progress
- Chat Interface: 🚧 In Progress
- Blog: ✅ Completed
- UI Components: ✅ Completed
- Landing Page: ✅ Completed
