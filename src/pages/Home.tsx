import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ThemeToggle from '../components/ui/ThemeToggle';
import SectionAnimation from '../components/ui/SectionAnimation';
import ErrorBoundary from '../components/ui/ErrorBoundary';
import { Helmet } from 'react-helmet-async';

export default function Home() {
  return (
    <ErrorBoundary>
      <Helmet>
        <title>Vite + React + SSG Boilerplate</title>
        <meta name="description" content="A modern, SEO-friendly React boilerplate with Static Site Generation (SSG) capabilities. Perfect for building fast, static websites with React." />
        <meta name="keywords" content="vite, react, ssg, static site generation, seo, typescript, boilerplate, template" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Vite + React + SSG Boilerplate" />
        <meta property="og:description" content="A modern, SEO-friendly React boilerplate with Static Site Generation (SSG) capabilities." />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Vite + React + SSG Boilerplate" />
        <meta name="twitter:description" content="A modern, SEO-friendly React boilerplate with Static Site Generation (SSG) capabilities." />
      </Helmet>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Navbar />
        <main className="pt-16">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <SectionAnimation type="fade-up">
              <div className="flex justify-between items-center">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                  Vite + React + SSG Boilerplate
                </h1>
                <ThemeToggle />
              </div>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                A modern, SEO-friendly React boilerplate with Static Site Generation (SSG) capabilities.
              </p>
            </SectionAnimation>
            
            <SectionAnimation type="fade-up" delay="sm">
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Server-Side Rendering
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    Built with ReactDOMServer and StaticRouter for optimal initial page load and SEO.
                  </p>
                </div>
                
                <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Client-Side Hydration
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    Seamless hydration with BrowserRouter and React Query for dynamic content.
                  </p>
                </div>
              </div>
            </SectionAnimation>

            <SectionAnimation type="fade-up" delay="md">
              <div className="mt-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Key Features
                </h2>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Static Site Generation</h3>
                      <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300 text-sm">
                        <li>Pre-rendered routes at build time</li>
                        <li>Automatic static HTML generation</li>
                        <li>Configurable route pre-rendering</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">SEO Optimization</h3>
                      <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300 text-sm">
                        <li>Server-side meta tag rendering</li>
                        <li>Helmet integration for dynamic meta tags</li>
                        <li>Proper HTML structure for search engines</li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Data Management</h3>
                      <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300 text-sm">
                        <li>React Query for data fetching</li>
                        <li>Server-side data pre-fetching</li>
                        <li>Client-side data hydration</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Development Features</h3>
                      <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300 text-sm">
                        <li>TypeScript for type safety</li>
                        <li>Tailwind CSS for styling</li>
                        <li>Dark mode support</li>
                        <li>Responsive design</li>
                        <li>Error boundary for crash prevention</li>
                        <li>Section animations for better UX</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </SectionAnimation>

            <SectionAnimation type="fade-up" delay="lg">
              <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Implementation Details
                </h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Server entry point with ReactDOMServer and StaticRouter</li>
                  <li>Client entry point with BrowserRouter and hydration</li>
                  <li>Pre-render script for static HTML generation</li>
                  <li>Helmet integration for meta tag management</li>
                  <li>React Query for data fetching and caching</li>
                </ul>
              </div>
            </SectionAnimation>
          </div>
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  );
} 