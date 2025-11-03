import "./App.css";
import { NotesList } from "./components/NotesList";
import { WeatherWidget } from "./components/WeatherWidget";

function App() {
  return (
    <main className="container mx-auto p-4 max-w-2xl">
      <div className="mb-8 w-2/3">
        <WeatherWidget />
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Notas Románticas</h2>
        <NotesList />
      </div>
    </main>
  );
}

export default App;
