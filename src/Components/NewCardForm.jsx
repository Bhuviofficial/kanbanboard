import React, { useState, useContext } from "react";
import { BoardContext } from "../Context/BoardContext";

export default function NewCardForm() {
  const { boardData, setBoardData } = useContext(BoardContext);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const add = () => {
    if (!title.trim()) return;
    const newItem = {
      id: Date.now().toString(),
      title: title.trim(),
      desc: desc.trim(),
    };
    setBoardData({
      ...boardData,
      "To Do": { ...boardData["To Do"], items: [newItem, ...boardData["To Do"].items] },
    });
    setTitle("");
    setDesc("");
  };

  return (
    <div className="form">
      <input
        className="form-input"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && add()}
      />
      <input
        className="form-input"
        placeholder="Short description (optional)"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && add()}
      />
      <button className="btn primary" onClick={add}>
        Add Task
      </button>
    </div>
  );
}
