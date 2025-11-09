🗂️ Kanban Board – React Task Management App

A Kanban-style task management web application built with React that allows users to create, organize, and manage tasks visually across columns like To Do, In Progress, and Done.
This app includes drag-and-drop, local storage persistence, and an intuitive editing experience — everything you need to manage projects easily.

🧠 Tech Stack
Technology	Purpose
React JS	Core UI framework
Context API	Global state management
dnd-kit	Drag and drop for smooth task movement
CSS Modules	Custom styling without Tailwind
LocalStorage	Persistent data even after page reloads
🚀 Features

✅ Create, Edit, and Delete Tasks

Add tasks with title and description

Edit inline by pressing Enter or cancel with Escape

Delete instantly from any column

✅ Drag and Drop

Move tasks between “To Do”, “In Progress”, and “Done” columns easily

Order is saved automatically using localStorage

✅ Persistent Data

All tasks remain saved after refresh

✅ Responsive Design

Works smoothly on desktops, tablets, and mobiles

✅ Keyboard Shortcuts

Enter → Save edit

Escape → Cancel edit

✅ Custom Tab Icon & Title

Shows 🗂️ favicon and KanbanBoard tab name

🧩 Folder Structure
kanban-board/
├── public/
│   ├── index.html
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Board.jsx
│   │   ├── Column.jsx
│   │   └── Card.jsx
│   ├── context/
│   │   └── BoardContext.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── package.json
└── README.md

⚙️ Installation & Setup

1️⃣ Clone the repository

git clone https://github.com/yourusername/kanban-board.git
cd kanban-board


2️⃣ Install dependencies

npm install


3️⃣ Run the development server

npm run dev


4️⃣ Open the app
Visit → http://localhost:5173/

🧰 Scripts
Command	Description
npm run dev	Run the app in development mode
npm run build	Create a production build
npm run preview	Preview the production build locally
🧠 How It Works

State Management: All columns and tasks are stored in a BoardContext using React Context API.

Persistence: Each update automatically syncs with localStorage.

Drag-and-Drop: Implemented with @dnd-kit/core for seamless drag transitions.

Editing: Tasks can be edited directly inside cards — press Enter to save.

🧪 Future Enhancements

Add deadlines and priorities

Filter tasks by tag or status

Search functionality

Dark/Light theme toggle

Export board data as JSON or CSV

💡 Troubleshooting
Issue	Solution
Tasks not moving	Ensure you installed @dnd-kit/core correctly
Changes not saving	Check localStorage permissions or clear cache
CSS not applied	Confirm the import import './index.css'; in main.jsx
🧑‍💻 Author

Your Name
💼 https://github.com/Bhuviofficial

💌bhuvi1928.g@gmail.com

📜 License

This project is licensed under the MIT License — free to use and modify.