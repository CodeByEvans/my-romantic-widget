import "./App.css";
import { NotesList } from "./components/NotesList";
import { WeatherWidget } from "./components/WeatherWidget";

function App() {
  return (
    <main className="container">
      <div>
        <WeatherWidget />
      </div>
      <NotesList />
    </main>
  );
}

export default App;
