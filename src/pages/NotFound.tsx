import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | Vite React TypeScript Boilerplate</title>
        <meta name="description" content="This page could not be found" />
      </Helmet>
      <main className="container mx-auto p-4 text-center">
        <h1 className="text-3xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="mb-4">The page you are looking for does not exist.</p>
        <Link to="/" className="text-blue-600 hover:underline">
          Return to Home
        </Link>
      </main>
    </>
  );
}

export default NotFound; 