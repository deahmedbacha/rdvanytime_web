# 🏥 RDV Anytime - Plateforme de Prise de Rendez-vous Médicaux

[![Status](https://img.shields.io/badge/Statut-En_Développement-orange.svg)]()
[![React](https://img.shields.io/badge/Frontend-React_18-blue.svg)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Backend-Node.js_&_Express-green.svg)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/Database-MongoDB-brightgreen.svg)](https://www.mongodb.com/)

RDV Anytime est une application web moderne permettant de **connecter facilement les patients et les professionnels de santé**. Elle offre une interface intuitive permettant aux patients de chercher des médecins et de prendre rendez-vous, tout en proposant un espace dédié ("Mode Pro") aux praticiens pour gérer leur agenda et leurs patients.

---

## 📸 Aperçu visuel

*Section à compléter avec des captures d'écran de l'application.*

| Page d'accueil | Mode Pro (Agenda) |
| :---: | :---: |
| ![Accueil](https://via.placeholder.com/400x250?text=Page+d%27Accueil) | ![Mode Pro](https://via.placeholder.com/400x250?text=Agenda+M%C3%A9decin) |

*(Lien vers la démo live à insérer ici)*

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
- **Profil (`/Profil`)** : Informations personnelles et données de santé détaillées (taille, poids, allergies, antécédents médicaux).
- **Paramètres (`/Parametres`)** : Configuration du compte (mot de passe, notifications).
- **Authentification (`/Signin`, `/Signup`)** : Connexion et création de compte patient sécurisées.

### Portail Professionnel (Modepro)
- **Accueil Pro (`/Modepro`)** : Dashboard et statistiques récapitulatives pour le médecin.
- **Connexion Pro (`/Signinpro`)** : Interface d'authentification sécurisée pour le corps médical.
- **Agenda (`/Agenda`)** : Visualisation et gestion complète du planning (créneaux libres, RDV pris).
- **Patients (`/Patientspro`)** : Liste et accès rapide aux dossiers des patients du praticien.
- **Profil Pro (`/Profilpro`)** : Informations du cabinet et spécialités affichées aux patients.
- **Notifications (`/NotificationsPro`)** : Alertes pour les annulations ou modifications de rendez-vous.

---

## ⚙️ Fonctionnalités détaillées

### 1. 🔍 Moteur de recherche médical
- **Description** : Permet de filtrer l'annuaire des médecins via la ville et le type de spécialité. 
- **Utilisation** : L'utilisateur remplit un formulaire multicritères qui interroge l'API.
- **Fichiers** : `Backend/server.js` (route `/search-doctors`), `src/Pages/Recherche`.

### 2. 🗓️ Gestion des disponibilités et Agenda
- **Description** : Liaison entre l'emploi du temps du médecin et l'interface de prise de RDV patient en temps réel.
- **Utilisation** : Évite les doubles réservations en vérifiant la disponibilité en direct dans la base de données.
- **Fichiers** : `Backend/server.js` (routes `/doc-calender`, `/add-appointment`), `src/Modepro/Agenda`.

### 3. 👤 Dossier Santé Complet (Profil)
- **Description** : Structure riche de données patients incluant allergies, traitements en cours, opérations chirurgicales, habitudes de vie (alcool, tabac).
- **Utilisation** : Le patient remplit ce formulaire depuis `/Profil`, facilitant le diagnostic pour les professionnels.
- **Fichiers** : `Backend/models/user.js`, API `/update-user`.

### 4. 🔔 Système de Notifications (Annulations)
- **Description** : Gestion des annulations générant une notification automatique.
- **Utilisation** : Si un patient annule un RDV, le médecin est alerté (et inversement).
- **Fichiers** : `Backend/server.js` (route `/cancel-appointment`), modèle `notification.js`.

---

## 💪 Points forts du projet

- **UI/UX Moderne & Réactive** : Utilisation intensive de Tailwind CSS et Material UI pour un design soigné, enrichi par des animations via Framer Motion et Lottie.
- **Séparation des Contextes** : L'architecture logique sépare clairement l'espace usager de l'espace administratif (Modepro), ce qui facilite l'évolutivité.
- **Modèle de données précis** : La modélisation MongoDB du dossier patient est exhaustive, permettant d'embarquer des attributs cliniques pertinents pour le secteur de la e-santé.

---

## ⚠️ Points faibles & limites connues (Dette technique)

- **Sécurité (Variables d'environnement)** : La clé secrète JWT ("Blitz") et les URI de base de données (`mongodb://localhost:27017...`) sont en **"dur"** dans le code backend. Cela nécessite la mise en place urgente d'un fichier `.env`.
- **Validation Backend manquante** : Peu de contrôle sur le type ou l'assainissement des données provenant de formulaires avant l'injection en base, ce qui est risqué (XSS / validation).
- **Absence de paiement / Téléconsultation** : Il manque aujourd'hui les intégrations de liens de paiement (ex: Stripe) et une API de visio pour effectuer de vraies téléconsultations.
- **Gestion des erreurs générique** : Le serveur renvoie souvent un simple `500 Server Error` sans capturer les erreurs spécifiques pour le debug.

---

## 🚀 Installation & Lancement

### Prérequis
- `Node.js` (v16 ou supérieur recommandé)
- `MongoDB` installé et actif localement sur le port `27017`
- `npm` ou `yarn`

### Étape 1 : Le Backend (API REST)
1. Ouvrir un terminal et naviguer dans le dossier Backend :
   ```bash
   cd Backend
   ```
2. Installer les dépendances :
   ```bash
   npm install
   ```
3. Lancer le serveur (vérifiez que MongoDB est lancé en arrière-plan) :
   ```bash
   node server.js
   ```
   *L'API tournera sur `http://localhost:4000`.*

### Étape 2 : Le Frontend (React/Vite)
1. Ouvrir un second terminal à la racine du projet (`rdvanytime_web`).
2. Installer les dépendances :
   ```bash
   npm install
   ```
3. Lancer l'environnement de développement :
   ```bash
   npm run dev
   ```
   *L'application sera accessible sur `http://localhost:5173`.*

---

## 📁 Structure des fichiers

```text
rdvanytime_web/
├── Backend/                 # Serveur Node.js / Express
│   ├── middlewares/         # Logique d'interception (ex: auth.js pour vérif JWT)
│   ├── models/              # Schémas Mongoose (User, Doctor, Appointment, Notification)
│   └── server.js            # Fichier principal définissant les routes API
├── src/                     # Code source Frontend (React)
│   ├── assets/              # Images, icônes et fichiers statiques
│   ├── Components/          # Composants UI partagés et réutilisables
│   ├── Modepro/             # L'intégralité du portail pour les médecins
│   ├── Pages/               # L'intégralité du portail pour les patients
│   ├── styles/              # CSS locaux et thèmes
│   ├── utils/               # Fonctions utilitaires
│   ├── App.jsx              # Wrapper principal de l'UI
│   └── main.jsx             # Point d'entrée avec définition des routes (React Router)
├── index.html               # Template racine HTML
├── package.json             # Dépendances Frontend et scripts métiers
├── tailwind.config.js       # Configuration design Tailwind CSS
└── vite.config.js           # Configuration du bundler Vite
```

---

## 🔌 API & Intégrations externes

- **API REST (Custom)** : Le backend est fait sur-mesure (Express & MongoDB) avec des requêtes faites via `axios` côté Frontend.
- **Mailing** : Emploi probable du package `@emailjs/browser` / `emailjs-com` intégré dans le Front pour l'envoi direct de tickets de contact sans passer par le backend.
- **Composants externes** : Utilisation de `react-google-recaptcha` (Sécurité des formulaires), `swiper` (carrousels interactifs), et `react-toastify` (alertes).

---

## 🛣️ Roadmap

- [ ] **Sécurisation du Backend** : Remplacement des clés secrètes par des variables `.env` (dotenv).
- [ ] **Visio-consultation** : Intégration de WebRTC ou d'une API de visioconférence.
- [ ] **Paiement en ligne** : Intégration de Stripe pour le prépaiement des actes de santé.
- [ ] **Module de Pharmaciel** : Gestion des ordonnances et télétransmission au sein des dossiers médicaux.

---

## 🤝 Contribution

Si vous souhaitez contribuer ou reprendre le développement du projet :
1. Créez un fork du dépôt.
2. Créez une branche de fonctionnalité (`git checkout -b feature/nomDeLaFonctionnalite`).
3. Appliquez les règles de nommage standardisées (Composants en PascalCase, Variables en camelCase).
4. Commitez vos modifications (`git commit -m "Ajout merveilleux"`).
5. Poussez vers la branche (`git push origin feature/nomDeLaFonctionnalite`).
6. Ouvrez une Pull Request structurée.

---

## 📄 Licence
Ce projet est développé par Abdou. Tous droits réservés.
