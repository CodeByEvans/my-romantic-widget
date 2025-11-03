import { useState } from "react";
import { invoke } from "@tauri-apps/api/core";
import "./App.css";
import { NotesList } from "./components/NotesList";

function App() {
  return (
    <main className="container">
      <NotesList />
    </main>
  );
}

export default App;
