# Pulse Board

A team productivity dashboard application built with modern web technologies to help teams track and manage their productivity metrics and tasks.

## Features

- **Dashboard Overview**: Displays key performance indicators (KPIs) including tasks completed, active users, and system uptime
- **Activity Chart**: Visual representation of team activity over time
- **Recent Activity Feed**: Shows the latest team activities
- **Task Management**:
  - Task list page with a comprehensive task table
  - Add new tasks via a modal interface
  - Track and manage all team tasks

## Technology Stack

- **Framework**: Next.js 16 (App Router)
- **Frontend**: React 19 with TypeScript
- **Styling**: Tailwind CSS with custom animations
- **Icons**: Lucide React
- **Theme Support**: Next Themes for dark/light mode
- **Analytics**: Vercel Analytics integration
- **Build Tools**: ESLint for linting, PostCSS for CSS processing

## Project Structure

```
src/
  app/
    page.tsx          # Dashboard overview page
    tasks/
      page.tsx        # Task management page
  components/          # Reusable UI components
    activity-chart.tsx
    add-task-modal.tsx
    header.tsx
    kpi-card.tsx
    recent-activity.tsx
    sidebar.tsx
    task-table.tsx
  lib/
    utils.ts          # Utility functions
public/                # Static assets
```

## Getting Started

### Prerequisites

- Node.js (latest LTS version recommended)
- pnpm package manager

### Installation

1. Install dependencies:

   ```bash
   pnpm install
   ```

2. Start the development server:

   ```bash
   pnpm dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

The app will auto-reload as you make changes to the code.

## Available Scripts

- `pnpm dev` - Start the development server
- `pnpm build` - Build the application for production
- `pnpm start` - Start the production server
- `pnpm lint` - Run ESLint for code linting

## Deployment

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [Tailwind CSS](https://tailwindcss.com/docs) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/docs/) - JavaScript with syntax for types
