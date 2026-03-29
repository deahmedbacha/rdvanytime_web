# 🏥 RDV Anytime — Plateforme de Prise de Rendez-vous Médicaux

[![Status](https://img.shields.io/badge/Statut-En_Développement-orange.svg)]()
[![React](https://img.shields.io/badge/Frontend-React_18-blue.svg)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Backend-Node.js_&_Express-green.svg)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/Database-MongoDB-brightgreen.svg)](https://www.mongodb.com/)
[![Architecture](https://img.shields.io/badge/Architecture-MVC_&_Feature--based-purple.svg)]()

RDV Anytime est une application web moderne permettant de **connecter facilement les patients et les professionnels de santé**. Elle offre une interface intuitive permettant aux patients de chercher des médecins et de prendre rendez-vous, tout en proposant un espace dédié ("Mode Pro") aux praticiens pour gérer leur agenda et leurs patients.

---

## 📸 Aperçu visuel

*Section à compléter avec des captures d'écran de l'application.*

| Page d'accueil | Mode Pro (Agenda) |
| :---: | :---: |
| ![Accueil](https://via.placeholder.com/400x250?text=Page+d%27Accueil) | ![Mode Pro](https://via.placeholder.com/400x250?text=Agenda+M%C3%A9decin) |

---

## ⚡ Stack Technique

| Couche | Technologies |
|---|---|
| **Frontend** | React 18, Vite, React Router v6, Zustand, Axios |
| **Styling** | Tailwind CSS, Material UI, Framer Motion, Lottie |
| **Backend** | Node.js, Express, Zod (validation) |
| **Base de données** | MongoDB, Mongoose |
| **Sécurité** | JWT, bcrypt, reCAPTCHA, dotenv |
| **Architecture** | Backend MVC strict, Frontend Feature-based |

---

## 🗂️ Architecture & Pages

L'application est divisée en deux portails principaux : le portail Patient et le portail Professionnel (Mode Pro).

### Portail Patient
- **Accueil (`/`)** : Page d'atterrissage vitrine présentant les services, les avantages et la recherche rapide.
- **Recherche (`/Rechercher`)** : Moteur de recherche pour trouver un médecin par spécialité et/ou ville.
- **Médecin (`/Medecin`)** : Page de profil d'un praticien spécifique (infos, spécialités, tarifs).
- **Prise de RDV (`/Rdv`)** : Interface de sélection d'un créneau et de confirmation du rendez-vous.
- **Mes Rendez-vous (`/Rendezvous`)** : Historique et suivi des rendez-vous à venir et passés du patient.
- **Dossiers Médicaux (`/Dossiers`)** : Accès aux documents de santé du patient.
- **Profil (`/Profil`)** : Informations personnelles et données de santé détaillées.
- **Paramètres (`/Parametres`)** : Configuration du compte.
- **Authentification (`/Signin`, `/Signup`)** : Connexion et création de compte patient.

### Portail Professionnel (Modepro)
- **Accueil Pro (`/Modepro`)** : Dashboard et statistiques du médecin.
- **Connexion Pro (`/Signinpro`)** : Authentification sécurisée pour le corps médical.
- **Agenda (`/Agenda`)** : Gestion complète du planning (créneaux libres, RDV pris).
- **Patients (`/Patientspro`)** : Liste et accès aux dossiers des patients du praticien.
- **Profil Pro (`/Profilpro`)** : Informations du cabinet et spécialités.
- **Notifications (`/NotificationsPro`)** : Alertes pour les annulations ou modifications de RDV.

---

## ⚙️ Fonctionnalités détaillées

### 1. 🔍 Moteur de recherche médical
- **Description** : Filtre l'annuaire des médecins via ville et spécialité.
- **Architecture** : `doctor.service.js` → `doctor.controller.js` → `GET /api/doctors/search`
- **Frontend** : Hook `useDoctors()`, pages `features/patient/`

### 2. 🗓️ Gestion des disponibilités et Agenda
- **Description** : Liaison calendrier médecin / prise de RDV patient en temps réel.
- **Architecture** : `appointment.service.js` → `appointment.controller.js` → `GET /api/appointments/calendar/:doctorId`
- **Frontend** : Hook `useAppointments()`, composant `Agenda.jsx`

### 3. 👤 Dossier Santé Complet (Profil)
- **Description** : Structure riche (allergies, traitements, antécédents, habitudes de vie).
- **Architecture** : `user.service.js` → `user.controller.js` → `PUT /api/users/settings`

### 4. 🔔 Système de Notifications
- **Description** : Notifications automatiques d'annulations/modifications.
- **Architecture** : `notification.service.js` → `notification.controller.js` → `GET /api/notifications/*`

---

## 📁 Structure des fichiers

```text
rdvanytime_web/
├── Backend/                     # Serveur Node.js / Express (Architecture MVC)
│   ├── config/
│   │   └── env.js               # Validation fail-fast des variables d'environnement
│   ├── controllers/             # Couche HTTP (réception requêtes, réponses)
│   │   ├── auth.controller.js
│   │   ├── user.controller.js
│   │   ├── doctor.controller.js
│   │   ├── appointment.controller.js
│   │   └── notification.controller.js
│   ├── middlewares/
│   │   ├── auth.js              # Vérification JWT (secret via .env)
│   │   ├── errorHandler.js      # Gestionnaire d'erreurs global
│   │   └── validate.js          # Middleware validation Zod
│   ├── models/                  # Schémas Mongoose
│   ├── routes/                  # Définitions des routes Express
│   │   ├── index.js             # Registre central /api/*
│   │   ├── auth.routes.js
│   │   ├── user.routes.js
│   │   ├── doctor.routes.js
│   │   ├── appointment.routes.js
│   │   └── notification.routes.js
│   ├── services/                # Logique métier pure
│   │   ├── auth.service.js
│   │   ├── user.service.js
│   │   ├── doctor.service.js
│   │   ├── appointment.service.js
│   │   └── notification.service.js
│   ├── validators/              # Schémas de validation Zod
│   ├── utils/                   # AppError, catchAsync
│   ├── app.js                   # Factory Express + montage routes
│   ├── server.js                # Bootstrap (17 lignes)
│   ├── .env                     # Variables d'environnement (non versionné)
│   └── .env.example             # Template pour les développeurs
│
├── src/                         # Code source Frontend (React)
│   ├── config/
│   │   ├── api.js               # Instance Axios centralisée + interceptors
│   │   └── constants.js         # Routes et URLs centralisées
│   ├── stores/                  # État global Zustand
│   │   ├── useAuthStore.js      # Auth (token, user, persist)
│   │   └── useNotificationStore.js
│   ├── services/                # Couche API (appels Axios isolés)
│   │   ├── auth.service.js
│   │   ├── doctor.service.js
│   │   ├── appointment.service.js
│   │   ├── user.service.js
│   │   └── notification.service.js
│   ├── hooks/                   # Hooks personnalisés
│   │   ├── useAuth.js           # Auto-fetch user on mount
│   │   ├── useDoctors.js        # Recherche + loading/error
│   │   ├── useAppointments.js   # CRUD RDV
│   │   └── useLoginForm.js      # Logique login extraite
│   ├── routes/
│   │   ├── AppRouter.jsx        # Router centralisé + lazy loading
│   │   ├── PrivateRoute.jsx     # Guard : redirect si non connecté
│   │   └── PublicRoute.jsx      # Guard : redirect si déjà connecté
│   ├── features/                # Architecture Feature-based (migration)
│   │   ├── auth/pages/          # Bridge re-exports auth
│   │   ├── patient/pages/       # Barrel re-exports patient
│   │   ├── pro/pages/           # Barrel re-exports pro
│   │   └── landing/pages/       # Barrel re-exports landing
│   ├── Components/              # Composants UI partagés (legacy)
│   ├── Modepro/                 # Portail médecin (legacy, en migration)
│   ├── Pages/                   # Portail patient (legacy, en migration)
│   ├── App.jsx                  # Wrapper principal de l'UI
│   └── main.jsx                 # Point d'entrée (14 lignes)
│
├── jsconfig.json                # Path aliases (@features/, @hooks/, etc.)
├── tailwind.config.js           # Configuration Tailwind CSS
└── vite.config.js               # Configuration bundler Vite
```

---

## 💪 Points forts du projet

- **Architecture MVC Backend** : Séparation stricte validators → services → controllers → routes
- **Architecture Feature-based Frontend** : Structure scalable avec stores, services, hooks
- **Sécurité renforcée** : JWT via `.env`, validation Zod, gestionnaire d'erreurs global
- **Code-splitting** : Lazy loading de toutes les pages (React.lazy + Suspense)
- **Rétrocompatibilité** : Migration progressive sans casser l'existant (routes legacy maintenues)
- **Modèle de données précis** : Modélisation exhaustive du dossier patient

---

## 🚀 Installation & Lancement

### Prérequis
- `Node.js` (v16 ou supérieur)
- `MongoDB` installé et actif localement sur le port `27017`
- `npm` ou `yarn`

### Configuration
1. Copier le template d'environnement :
   ```bash
   cp Backend/.env.example Backend/.env
   ```
2. Modifier `Backend/.env` avec vos valeurs (JWT secret, MongoDB URI).

### Démarrer le Backend
```bash
cd Backend
npm install
node server.js
```
*L'API tournera sur `http://localhost:4000`.*

### Démarrer le Frontend
```bash
# À la racine du projet
npm install
npm run dev
```
*L'application sera accessible sur `http://localhost:5173`.*

---

## 🔌 API & Intégrations

| Intégration | Usage |
|---|---|
| **API REST** (Express/MongoDB) | Backend sur-mesure, appels via instance Axios centralisée |
| **EmailJS** | Envoi de tickets de contact depuis le frontend |
| **reCAPTCHA** | Sécurisation des formulaires auth |
| **Swiper** | Carrousels interactifs |
| **React Toastify** | Notifications toast (alertes UI) |

---

## 🛣️ Roadmap

- [x] **Sécurisation Backend** : Variables `.env` + validation Zod
- [x] **Architecture MVC** : Découpage server.js en couches
- [x] **Fondations Frontend** : Stores Zustand, services API, hooks
- [x] **Feature-based structure** : Migration progressive
- [x] **Lazy loading** : Code-splitting par page
- [ ] **Route guards** : Activation PrivateRoute / PublicRoute
- [ ] **Visio-consultation** : Intégration WebRTC
- [ ] **Paiement en ligne** : Intégration Stripe
- [ ] **Module Pharmacie** : Gestion ordonnances

---

## 🤝 Contribution

1. Créez un fork du dépôt.
2. Créez une branche de fonctionnalité (`git checkout -b feature/nomDeLaFonctionnalite`).
3. Respectez l'architecture MVC backend et feature-based frontend.
4. Commitez vos modifications (`git commit -m "feat: description"`).
5. Poussez vers la branche (`git push origin feature/nomDeLaFonctionnalite`).
6. Ouvrez une Pull Request structurée.

---

## 📄 Licence
Ce projet est développé par Abdou. Tous droits réservés.
