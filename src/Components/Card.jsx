import React, { useState, useContext, useRef, useEffect } from "react";
import { Draggable } from "@hello-pangea/dnd";
import { BoardContext } from "../Context/BoardContext";

export default function Card({ item, index, colId }) {
  const { boardData, setBoardData } = useContext(BoardContext);
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(item.title || "");
  const [desc, setDesc] = useState(item.desc || "");
  const titleRef = useRef(null);

  useEffect(() => {
    if (isEditing && titleRef.current) titleRef.current.focus();
  }, [isEditing]);

  const saveEdit = () => {
    if (!title.trim()) return;
    const updated = boardData[colId].items.map((t) =>
      t.id === item.id ? { ...t, title: title.trim(), desc: desc.trim() } : t
    );
    setBoardData({ ...boardData, [colId]: { ...boardData[colId], items: updated } });
    setIsEditing(false);
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      saveEdit();
    } else if (e.key === "Escape") {
      setIsEditing(false);
      setTitle(item.title);
      setDesc(item.desc);
    }
  };

  const remove = () => {
    const updated = boardData[colId].items.filter((t) => t.id !== item.id);
    setBoardData({ ...boardData, [colId]: { ...boardData[colId], items: updated } });
  };

  return (
    <Draggable draggableId={item.id} index={index}>
      {(provided, snapshot) => (
        <div
          className={`card ${snapshot.isDragging ? "dragging" : ""}`}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {isEditing ? (
            <>
              <input
                ref={titleRef}
                className="card-input"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                onKeyDown={onKeyDown}
              />
              <textarea
                className="card-textarea"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                onKeyDown={onKeyDown}
              />
              <div className="card-controls">
                <button className="btn save" onClick={saveEdit}>
                  Save
                </button>
                <button
                  className="btn cancel"
                  onClick={() => {
                    setIsEditing(false);
                    setTitle(item.title);
                    setDesc(item.desc);
                  }}
                >
                  Cancel
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="card-top">
                <h3 className="card-title">{item.title}</h3>
              </div>
              <p className="card-desc">{item.desc}</p>
              <div className="card-actions">
                <button className="link" onClick={() => setIsEditing(true)}>
                  Edit
                </button>
                <button className="link danger" onClick={remove}>
                  Delete
                </button>
              </div>
            </>
            
          )}
        </div>
      )}
    </Draggable>
  );
}
