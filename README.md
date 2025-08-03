# ThemeSwitcher React App

A responsive React + TypeScript app that allows users to switch between three visually distinct themes. Built with Vite, Tailwind CSS, and React Router.

## Project Overview

This project demonstrates how to implement **theme switching** in a React application. Users can choose between **three themes**, which update the entire layout, colors, fonts, and structure.

## 🎯 Features

- 🌗 **Three Themes**  
  - **Theme 1 (Default)**: Light, minimalist layout, sans-serif font  
  - **Theme 2**: Dark mode with sidebar layout and serif fonts  
  - **Theme 3**: Colorful card-grid layout with playful "Pacifico" font

- 🎛️ **Theme Switcher**
  - Dropdown in the fixed header
  - Persists using `localStorage`

- 🧠 **State Management**
  - Using **Context API** for managing global theme state

- 🌐 **Routing**
  - Multi-page setup using **React Router v6+**
  - Pages: Home, About, Contact

- 📱 **Responsive Design**
  - Layout adapts to both desktop and mobile
  - Built using **Tailwind CSS**

- 🔐 **Security**
  - Basic React best practices for safe rendering
  - Avoids unnecessary external libraries

- ⚙️ **Tech Stack**
  - React + Vite
  - TypeScript
  - Tailwind CSS
  - React Router
  - Context API
  - Local Storage

---

## 🧩 Folder Structure
src/
│
├── assets/ # Static files like images
├── components/ # Reusable UI components
├── context/ # Theme context provider
├── hooks/ # Custom React hooks
├── pages/ # Route-level components (Home, About, Contact)
├── router/ # React Router configuration
├── styles/ # theme.css, base.css, utilities.css (imported in index.css)
├── types/ # TypeScript interfaces/types
├── utils/ # Utility functions
│
├── App.tsx # Main App component
├── main.tsx # React entry point
├── index.css # Global styles + Tailwind + theme imports


## 🛠️ Setup Instructions

```bash
# Clone the repo
git clone https://github.com/shariqhasan29/themeSwitcher.git

# Navigate to project
cd themeSwitcher

# Install dependencies
pnpm install

# Start development server
pnpm dev

