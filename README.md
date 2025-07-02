# Modern Dashboard App

A dashboard web application built with **Vue 3**, **TypeScript**, **Pinia**, **Vue Router**, and **Tailwind CSS**. Features authentication, toast notifications, and a clean, modern UI.

## Features

- User authentication (login/register)
- Dashboard with summary cards, country stats, team members, and comparison charts
- Toast notifications for feedback
- Responsive sidebar navigation
- Modern, clean design with Tailwind CSS


## Project Structure

```
project-root/
├── src/
│   ├── assets/           # SVGs and images
│   ├── components/       # Vue components (Toast, etc.)
│   ├── composables/      # Composable utilities (form validation)
│   ├── stores/           # Pinia stores (auth, toast)
│   ├── views/            # Main views (Dashboard, Login, Register)
│   ├── router/           # Vue Router setup
│   └── style.css         # Tailwind and global styles
├── public/
│   └── img/              # Public images
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/nishit-27/SecureBlink-Assignment.git
   cd <your-project-folder>
   ```
2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```
3. **Start the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
4. **Open your browser:**
   Visit [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal)

## Usage
- Register a new account or log in with your credentials.
- Explore the dashboard, view stats, and interact with the UI.
- Use the sidebar to navigate. Click the logout button to sign out.

## Customization
- **Assets:** Place your SVGs and images in `src/assets/`.
- **Styling:** Edit `src/style.css` and `tailwind.config.js` for custom styles.
- **Components:** Add or modify components in `src/components/`.

## Scripts
- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm run preview` — Preview production build

## License

MIT
