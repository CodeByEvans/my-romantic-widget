import "./App.css";
import { NotesList } from "./components/NotesList";
import { WeatherWidget } from "./components/WeatherWidget";

function App() {
  return (
    <main className="container">
      <NotesList />
      <WeatherWidget />
    </main>
  );
}

export default App;
