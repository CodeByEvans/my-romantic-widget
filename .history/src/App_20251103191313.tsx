import "./App.css";
import { NotesList } from "./components/NotesList";
import { WeatherWidget } from "./components/WeatherWidget";

function App() {
  return (
    <main className="container mx-auto p-4 max-w-2xl">
      <section>
        <WeatherWidget />
        <NotesList />
      </section>
    </main>
  );
}

export default App;
