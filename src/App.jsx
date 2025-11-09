import React, { useContext } from "react";
import { DragDropContext } from "@hello-pangea/dnd";
import { BoardContext, BoardProvider } from "./Context/BoardContext";
import Column from "./Components/Column";
import NewCardForm from "./Components/NewCardForm";
import "./index.css";

function Board() {
  const { boardData, setBoardData } = useContext(BoardContext);

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const { source, destination } = result;
    if (source.droppableId === destination.droppableId) {
      const col = boardData[source.droppableId];
      const copied = Array.from(col.items);
      const [moved] = copied.splice(source.index, 1);
      copied.splice(destination.index, 0, moved);
      setBoardData({
        ...boardData,
        [source.droppableId]: { ...col, items: copied },
      });
      return;
    }

    const startCol = boardData[source.droppableId];
    const endCol = boardData[destination.droppableId];

    const startItems = Array.from(startCol.items);
    const [movedItem] = startItems.splice(source.index, 1);
    const endItems = Array.from(endCol.items);
    endItems.splice(destination.index, 0, movedItem);

    setBoardData({
      ...boardData,
      [source.droppableId]: { ...startCol, items: startItems },
      [destination.droppableId]: { ...endCol, items: endItems },
    });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <header className="app-header">
        <h1>Kanban Board</h1>
      </header>

      <main className="container">
        <NewCardForm />

        <section className="columns">
          {Object.entries(boardData).map(([colId, col]) => (
            <Column key={colId} colId={colId} column={col} />
          ))}
        </section>
      </main>
    </DragDropContext>
  );
}

export default function App() {
  return (
    <BoardProvider>
      <Board />
    </BoardProvider>
  );
}
