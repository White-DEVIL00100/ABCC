# Abbasi Green Contracting Company - Professional Website

## Overview

This is a full-stack web application for Abbasi Green Contracting Company featuring a complete professional website with authentic company information. The application combines a React frontend with Express backend, utilizing modern web technologies to create an engaging user experience with 3D graphics, particle effects, and comprehensive business information.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with custom design system
- **3D Graphics**: React Three Fiber (@react-three/fiber) with Three.js
- **UI Components**: Radix UI primitives with custom styling
- **State Management**: Zustand for global state management
- **Data Fetching**: TanStack Query for server state management

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (@neondatabase/serverless)
- **Development**: Hot reload with Vite middleware integration

### Build Strategy
- **Development**: TSX for TypeScript execution, Vite dev server
- **Production**: Vite build for frontend, esbuild for backend bundling
- **Deployment**: Single build output with static assets and Node.js server

## Key Components

### 3D Scene Components
- **Scene.tsx**: Main 3D scene orchestrator with lighting and camera controls
- **Building.tsx**: Procedurally generated building models with window details
- **ConstructionEquipment.tsx**: Animated construction machinery (excavators)
- **Lighting.tsx**: Dynamic lighting setup with shadows and color schemes
- **Camera.tsx**: Smooth orbital camera movement around the scene

### UI Components
- **HomePage.tsx**: Complete professional home page with hero section, services, about, projects, and contact sections
- **AboutUs.tsx**: Authentic company information with real mission, vision, values, and partnership details
- **Services.tsx**: Comprehensive services page detailing MEP, Civil, Facility Management, and specialized services
- **ContactUs.tsx**: Contact form with real business information (+966 59 608 6868, Ishtiaq Ahmed Abbasi)
- **Projects.tsx**: Showcase of actual AGCC projects including villas, gas stations, and commercial complexes
- **ParticleBackground.tsx**: Canvas-based particle animation system
- **Navigation.tsx**: Responsive navigation component with mobile menu (Home, About, Services, Projects, Contact)

### State Management
- **useGame.tsx**: Game phase management (ready/playing/ended)
- **useAudio.tsx**: Audio system with mute controls and sound effects

## Data Flow

### Client-Side Flow
1. **Initial Load**: React app renders with 3D scene loading
2. **3D Rendering**: React Three Fiber manages WebGL rendering loop
3. **User Interaction**: Email subscription triggers form submission
4. **State Updates**: Zustand stores manage UI state and audio preferences

### Server-Side Flow
1. **Request Handling**: Express middleware processes API requests
2. **Database Operations**: Drizzle ORM handles PostgreSQL interactions
3. **Static Serving**: Express serves built React application
4. **Development Mode**: Vite middleware provides hot reload capabilities

### Database Schema
- **Users Table**: Basic user management with username/password fields
- **Schema Location**: `shared/schema.ts` for type safety across frontend/backend
- **Migrations**: Drizzle handles database migrations in `./migrations` directory

## External Dependencies

### Core Technologies
- **React Ecosystem**: React, React DOM, React Three Fiber
- **3D Graphics**: Three.js, React Three Drei (utilities), React Three Postprocessing
- **Database**: Neon Database (serverless PostgreSQL), Drizzle ORM
- **UI Framework**: Radix UI components, Tailwind CSS
- **Build Tools**: Vite, esbuild, TypeScript

### Development Tools
- **Type Safety**: TypeScript with strict configuration
- **Code Quality**: ESM modules, path aliases for clean imports
- **Asset Handling**: Support for GLTF/GLB models, audio files (MP3/OGG/WAV)
- **GLSL Shaders**: Vite plugin for shader file support

### Font and Styling
- **Typography**: Inter font family via Fontsource
- **CSS Framework**: Tailwind with custom design tokens
- **Component Variants**: Class Variance Authority for component styling

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite compiles React app to `dist/public`
2. **Backend Build**: esbuild bundles Express server to `dist/index.js`
3. **Database Setup**: Drizzle push command syncs schema to database
4. **Production Start**: Node.js serves the bundled application

### Environment Configuration
- **Database**: `DATABASE_URL` environment variable required
- **Development**: Hot reload with Vite dev server
- **Production**: Static file serving with Express

### File Structure
```
├── client/          # React frontend application
├── server/          # Express backend server
├── shared/          # Shared types and database schema
├── dist/            # Built application output
└── migrations/      # Database migration files
```

## Recent Projects & Information Update

The website now features authentic information from the AGCC company profile including:
- Real contact information (Ishtiaq Ahmed Abbasi, +966 59 608 6868)
- Authentic mission, vision, and values from company documents
- Actual services: MEP, Civil & Turnkey Fit-out, Facility Management
- Real project portfolio including villas in Al Khobar, ADNOC gas stations, commercial complexes
- Partnership structure with multiple Abbasi Green companies
- Company principles and leadership statements

## Changelog

```
Changelog:
- July 05, 2025: Initial setup with 3D coming soon page
- July 05, 2025: Added About Us and Contact Us pages with navigation system  
- July 05, 2025: Updated with authentic AGCC company information and added Projects page
- July 05, 2025: Completely removed "coming soon" concept and created full professional website with HomePage, Services page, and complete navigation
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```