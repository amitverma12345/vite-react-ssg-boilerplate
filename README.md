# Vite React SSG Boilerplate

A modern, production-ready React boilerplate built with Vite, featuring SSR, SSG, and Supabase integration.

## Quick Start

### Option 1: Fork and Clone (Recommended)

1. **Fork the Repository**
   - Click the "Fork" button on the top right of this repository
   - This creates your own copy of the repository

2. **Clone Your Fork**
   ```bash
   git clone https://github.com/YOUR-USERNAME/vite-react-ssg-boilerplate.git
   cd vite-react-ssg-boilerplate
   ```

3. **Install Dependencies**
   ```bash
   npm install
   ```

4. **Start Development**
   ```bash
   npm run dev
   ```

### Option 2: Direct Clone

```bash
git clone https://github.com/amitverma12345/vite-react-ssg-boilerplate.git
cd vite-react-ssg-boilerplate
npm install
npm run dev
```

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details on how to:
- Fork the repository
- Create a new branch
- Make your changes
- Submit a pull request

## Features

- ⚡️ [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- ⚛️ [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- 🔥 [React Router](https://reactrouter.com/) - Declarative routing for React
- 🎨 [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- 🔐 [Supabase](https://supabase.com/) - Open source Firebase alternative
- 📦 [TypeScript](https://www.typescriptlang.org/) - JavaScript with syntax for types
- 🚀 [SSR & SSG](https://vite-plugin-ssr.com/) - Server-side rendering and static site generation
- 🎯 [ESLint](https://eslint.org/) - Code linting utility
- 💅 [Prettier](https://prettier.io/) - Code formatter
- 🧪 [Vitest](https://vitest.dev/) - Unit testing framework
- 📱 [PWA](https://vite-pwa-org.netlify.app/) - Progressive Web App support

## Project Structure

```
├── src/
│   ├── components/     # Reusable components
│   ├── pages/         # Page components
│   ├── layouts/       # Layout components
│   ├── hooks/         # Custom React hooks
│   ├── utils/         # Utility functions
│   ├── types/         # TypeScript type definitions
│   ├── styles/        # Global styles
│   ├── assets/        # Static assets
│   └── config/        # Configuration files
├── public/            # Public static files
├── tests/             # Test files
└── vite.config.ts     # Vite configuration
```

## Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Supabase Setup

1. Create a new project on [Supabase](https://supabase.com)
2. Copy your project URL and anon key
3. Add them to your `.env` file

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run test` - Run tests
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run type-check` - Run TypeScript type checking

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [Supabase](https://supabase.com/)
- [Tailwind CSS](https://tailwindcss.com/)
