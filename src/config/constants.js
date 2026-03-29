export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000';

/** Routes used for navigation guards */
export const ROUTES = {
  HOME: '/',
  SIGNIN: '/Signin',
  SIGNUP: '/Signup',
  PROFIL: '/Profil',
  RECHERCHER: '/Rechercher',
  RENDEZVOUS: '/Rendezvous',
  DOSSIERS: '/Dossiers',
  PARAMETRES: '/Parametres',
  APROPOS: '/Apropos',
  CONTACT: '/contact',
  // Pro routes
  MODEPRO: '/Modepro',
  SIGNINPRO: '/Signinpro',
  AGENDA: '/Agenda',
  PATIENTSPRO: '/Patientspro',
  PROFILPRO: '/Profilpro',
  NOTIFICATIONS_PRO: '/NotificationsPro',
};
