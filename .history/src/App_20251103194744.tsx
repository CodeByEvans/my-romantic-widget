import "./App.css";
import { NotesList } from "./components/NotesList";
import { WeatherWidget } from "./components/WeatherWidget";

function App() {
  return (
    <main className="container mx-auto p-4">
      <section className="flex flex-row gap-8 h-48 max-w-4xl mx-auto">
        <WeatherWidget />
        <NotesList />
      </section>
    </main>
  );
}

export default App;
