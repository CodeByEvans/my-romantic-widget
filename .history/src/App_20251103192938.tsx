import "./App.css";
import { NotesList } from "./components/NotesList";
import { WeatherWidget } from "./components/WeatherWidget";

function App() {
  return (
    <main className="container mx-auto p-4 max-w-2xl">
      <section className="flex flex-row gap-8 h-48">
        <WeatherWidget />
        <NotesList />
      </section>
    </main>
  );
}

export default App;
