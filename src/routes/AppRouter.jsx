import { createBrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

// ── Loading Fallback ──
const PageLoader = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontSize: '1.1rem',
    color: '#6b7280',
  }}>
    Chargement...
  </div>
);

/**
 * Wraps a lazy-loaded component in Suspense with a fallback.
 */
const withSuspense = (LazyComponent) => (
  <Suspense fallback={<PageLoader />}>
    <LazyComponent />
  </Suspense>
);

// ── Lazy Imports (code-splitting per page) ──

// Landing / Public
const App = lazy(() => import('../App'));
const Contact = lazy(() => import('../Pages/Contactus/index'));
const Apropos = lazy(() => import('../Pages/Apropos/Apropos'));
const Benefits = lazy(() => import('../Components/Benefits/Benefits'));

// Auth
const Signin = lazy(() => import('../Pages/conecter/Signin'));
const Signup = lazy(() => import('../Pages/conecter/Signup'));

// Patient
const Rechercher = lazy(() => import('../Pages/Recherche/Recherche'));
const Rdv = lazy(() => import('../Pages/rdv/Rdv'));
const Medecin = lazy(() => import('../Pages/Médecin/Medecin'));
const Parametres = lazy(() => import('../Pages/Parametres/Parametres'));
const Profil = lazy(() => import('../Pages/Profil/Profil'));
const Dossiers = lazy(() => import('../Pages/Dossiers_médicaux/Dossiers'));
const Rendezvous = lazy(() => import('../Pages/Rendez-vous/Rendezvous'));

// Pro
const Modepro = lazy(() => import('../Modepro/Modepro'));
const Signinpro = lazy(() => import('../Modepro/Signinpro'));
const Profilpro = lazy(() => import('../Modepro/Profilpro/Profilpro'));
const Patientspro = lazy(() => import('../Modepro/Patientspro/Patientspro'));
const Agenda = lazy(() => import('../Modepro/Agenda/Agenda'));
const NotificationsPro = lazy(() => import('../Modepro/NotificationsPro/NotificationsPro'));

/**
 * Centralized route configuration with:
 * - Lazy loading (React.lazy + Suspense)
 * - Route guards (PrivateRoute / PublicRoute via Zustand)
 *
 * Route groups:
 * 1. Public — accessible by everyone (no guard)
 * 2. Auth — PublicRoute guard (redirects logged-in users away)
 * 3. Patient — PrivateRoute guard (requires authentication)
 * 4. Pro — PrivateRoute guard (requires authentication)
 */
export const router = createBrowserRouter([
  // ── 1. Public Routes (no guard) ──
  { path: '/', element: withSuspense(App) },
  { path: 'contact', element: withSuspense(Contact) },
  { path: 'Apropos', element: withSuspense(Apropos) },
  { path: 'Benefits', element: withSuspense(Benefits) },

  // ── 2. Auth Routes (PublicRoute guard) ──
  // Redirects to /Profil if already authenticated
  {
    element: <PublicRoute />,
    children: [
      { path: 'Signin', element: withSuspense(Signin) },
      { path: 'Signup', element: withSuspense(Signup) },
      { path: 'Modepro', element: withSuspense(Modepro) },
      { path: 'Signinpro', element: withSuspense(Signinpro) },
    ],
  },

  // ── 3. Patient Protected Routes (PrivateRoute guard) ──
  // Redirects to /Signin if not authenticated
  {
    element: <PrivateRoute />,
    children: [
      { path: 'Profil', element: withSuspense(Profil) },
      { path: 'Rechercher', element: withSuspense(Rechercher) },
      { path: 'Medecin', element: withSuspense(Medecin) },
      { path: 'Rdv', element: withSuspense(Rdv) },
      { path: 'Parametres', element: withSuspense(Parametres) },
      { path: 'Dossiers', element: withSuspense(Dossiers) },
      { path: 'Rendezvous', element: withSuspense(Rendezvous) },
    ],
  },

  // ── 4. Pro Protected Routes (PrivateRoute guard) ──
  // Redirects to /Signin if not authenticated
  {
    element: <PrivateRoute />,
    children: [
      { path: 'Profilpro', element: withSuspense(Profilpro) },
      { path: 'Patientspro', element: withSuspense(Patientspro) },
      { path: 'Agenda', element: withSuspense(Agenda) },
      { path: 'NotificationsPro', element: withSuspense(NotificationsPro) },
    ],
  },
]);
