import React from "react";
import { Droppable } from "@hello-pangea/dnd";
import Card from "./Card";

export default function Column({ colId, column }) {
  return (
    <div className="column-wrap">
      <div className="column-header">
        <h2>{column.name}</h2>
        <span className="count">{column.items.length}</span>
      </div>

      <Droppable droppableId={colId}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={`column ${snapshot.isDraggingOver ? "drag-over" : ""}`}
          >
            {column.items.map((item, idx) => (
              <Card key={item.id} item={item} index={idx} colId={colId} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}
