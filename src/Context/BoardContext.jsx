import { createContext, useState, useEffect } from "react";

export const BoardContext = createContext();

export const BoardProvider = ({ children }) => {
  const [boardData, setBoardData] = useState(() => {
    const saved = localStorage.getItem("kanban-board-v2");
    return saved
      ? JSON.parse(saved)
      : {
          "To Do": { name: "To Do", items: [] },
          "In Progress": { name: "In Progress", items: [] },
          Done: { name: "Done", items: [] },
        };
  });

  useEffect(() => {
    localStorage.setItem("kanban-board-v2", JSON.stringify(boardData));
  }, [boardData]);

  return (
    <BoardContext.Provider value={{ boardData, setBoardData }}>
      {children}
    </BoardContext.Provider>
  );
};
