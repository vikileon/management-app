# Project Management App

![Overview](./src/assets/overview.gif)

A simple and user-friendly project management application built with **React** and **Tailwind CSS**. This app allows users to create, manage, and delete projects, as well as add and remove tasks within each project.

## 📌 Features

- **Create New Projects** – Add a new project with a title, description, and due date.
- **Task Management** – Add and remove tasks within a selected project.
- **Project Selection** – Easily switch between different projects.
- **Minimalist UI** – Styled using Tailwind CSS for a clean and modern look.
- **Validation** – Prevents adding empty tasks or projects.

## 🛠️ Tech Stack

- **React** – Component-based UI.
- **Tailwind CSS** – Utility-first styling.
- **React Hooks** – `useState`, `useRef` for state and references.
- **Portals** – Used for modals.

## 🚀 Installation & Usage

### 1. Clone the Repository

```
git clone https://github.com/your-username/project-management-app.git
cd project-management-app
```

### 2. Install Dependencies

```
npm install
```

### 3. Start the Development Server

```
npm run dev
```

## 📂 Project Structure

src/
│── components/
│ ├── Button.jsx
│ ├── Input.jsx
│ ├── Modal.jsx
│ ├── Sidebar.jsx
│ ├── NewProject.jsx
│ ├── NoProjectSelected.jsx
│ ├── SelectedProject.jsx
│ ├── Tasks.jsx
│ ├── NewTask.jsx
│── assets/
│── App.js
│── index.js
│── styles.css

## ✨ Components Breakdown

### `Sidebar.jsx`

- Displays a list of projects.
- Allows selecting or creating a new project.

### `NewProject.jsx`

- Provides input fields for title, description, and due date.
- Validates input before submission.

### `SelectedProject.jsx`

- Displays project details and task list.
- Includes a delete button to remove the project.

### `Tasks.jsx`

- Manages the list of tasks for a project.
- Uses `NewTask.jsx` to add tasks.

### `Modal.jsx`

- Displays warnings when required fields are missing.

---

## 🔧 Future Improvements

- LocalStorage integration to persist projects.
- Drag-and-drop task reordering.
- Dark mode support.
- Refactor state management to eliminate prop drilling.
