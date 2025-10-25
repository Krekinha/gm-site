# Next.js Website Project

This is a Next.js website project for GM Manutenções, an electrical and industrial maintenance services company based in Belo Horizonte, Brazil.

## Project Overview

The project is a responsive website showcasing services offered by GM Manutenções. It features:

1. Several sections including Hero, About, Services, Portfolio, Testimonials, Compliance, Partners, and Contact
2. A contact form with form validation using Zod and React Hook Form
3. Responsive design using Tailwind CSS
4. Placeholder images from Unsplash
5. Components built with Radix UI and ShadCN UI primitives

## Key Technologies

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Zod (for form validation)
- React Hook Form
- Radix UI primitives
- Lucide React icons

## Building and Running

To run the development server:
```bash
npm run dev
```

To build the project for production:
```bash
npm run build
```

To start the production server:
```bash
npm run start
```

To run type checking:
```bash
npm run typecheck
```

To lint the project:
```bash
npm run lint
```

## Development Conventions

- Uses functional components with TypeScript
- Implements form validation with Zod schemas and React Hook Form
- Follows Tailwind CSS utility class conventions
- Uses Radix UI and ShadCN UI primitives for accessible UI components
- Organizes components in a section-based structure under `src/components/sections`
- Uses UI components under `src/components/ui`
- Implements placeholder images with a JSON configuration system