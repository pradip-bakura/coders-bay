# AI Portfolio

A modern, interactive portfolio website of Pradip Bakutra, showcasing projects, skills, and professional experience as a Frontend Developer. Built with React, TypeScript, Vite, Tailwind CSS, and advanced 3D visualizations using Three.js.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Showcase](#showcase)
- [Contact](#contact)

---

## Features

- **Modern UI/UX**: Clean, responsive design with smooth navigation and beautiful gradients.
- **3D Visuals**: Interactive 3D backgrounds and effects using React Three Fiber and Drei.
- **Project Showcase**: Detailed cards for featured projects, including tech stack and key features.
- **Skills & Certifications**: Visual representation of technical skills and certifications.
- **Professional Experience**: Timeline of roles, responsibilities, and technologies used.
- **Contact Section**: Email, phone, and LinkedIn integration, plus resume download.
- **Dark Mode**: Fully themeable with dark/light support.
- **Custom Components**: Extensive use of reusable UI components (buttons, cards, forms, etc.).
- **404 Page**: Custom not-found page for invalid routes.

## Demo

> **Live Demo:** _[Add your deployment link here]_  
> **Screenshot:** > ![Portfolio Screenshot](public/screenshot.png) <!-- Add a screenshot if available -->

## Tech Stack

- **Frontend:** React 18, TypeScript, Vite
- **Styling:** Tailwind CSS, PostCSS, CSS Modules
- **3D/Visualization:** React Three Fiber, Drei, Three.js
- **State Management:** React Query, React Hook Form, Redux (in projects)
- **UI Components:** Radix UI, shadcn/ui, Lucide Icons
- **Routing:** React Router DOM
- **Linting:** ESLint, TypeScript ESLint
- **Other:** Zod, date-fns, recharts, embla-carousel, and more

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

```bash
git clone https://github.com/pradipbakutra/ai-portfolio.git
cd ai-portfolio
npm install
```

### Running Locally

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the app.

### Building for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Available Scripts

- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm run preview` — Preview production build
- `npm run lint` — Lint codebase

## Project Structure

```
ai-portfolio/
├── public/                # Static assets (favicon, images)
├── src/
│   ├── components/        # Reusable UI and 3D components
│   │   ├── 3d/            # 3D visual components (Galaxy, Particles, Scene3D, etc.)
│   │   └── ui/            # UI primitives (Button, Card, Modal, etc.)
│   ├── pages/             # Main pages (Index, NotFound)
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utilities and constants
│   ├── App.tsx            # App entry (routing, providers)
│   ├── main.tsx           # React root
│   └── index.css          # Tailwind and custom styles
├── package.json           # Project metadata and scripts
├── vite.config.ts         # Vite configuration
├── tailwind.config.ts     # Tailwind CSS config
├── postcss.config.js      # PostCSS config
├── tsconfig*.json         # TypeScript configs
└── README.md              # Project documentation
```

## Showcase

### Featured Projects

- **Tech Scouting Platform**: Technology research and scouting platform with advanced search, trend analysis, and data visualization. _(React.js, Redux, REST APIs)_
- **Research Design Tool (RDT)**: Drag-and-drop tool for research design and data flow visualization. _(React.js, SQL, Ant Design)_
- **Research Process Automation**: Automated data validation and workflow management system. _(React.js, JavaScript)_

### Skills & Certifications

- **Frontend:** React.js, JavaScript, Redux, HTML/CSS
- **Backend:** Java, MySQL
- **Tools:** Ant Design, Git, VS Code
- **Certifications:**
  - Software Development (jSpider Institute, Bengaluru)
  - React - The Complete Guide (Udemy)

### Experience

- **React Developer** @ Ideapdoke Technologies (2022–Present)
  - Built and maintained React-based applications, optimized performance, and collaborated with cross-functional teams.
- **Software Engineer** @ Ideapdoke Technologies (2021–2022)
  - Full-stack development with JavaScript, Java, SQL, and MySQL; API design and database integration.

## Contact

- **Email:** pradipbakutra002@gmail.com
- **Phone:** +91 9409557927
- **Location:** Bengaluru, India
- **LinkedIn:** [Pradip Bakutra](https://www.linkedin.com/in/pradip-bakutra-dev/)
- **Resume:** [Download Resume](https://drive.google.com/file/d/1eiT4iQlPbTVRy72QFqAa-gYeBxIGia0W/view?usp=drive_link)

---

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.
