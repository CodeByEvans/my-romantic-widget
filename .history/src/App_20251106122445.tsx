import "./App.css";
import { Clock } from "./components/Clock";
import { NoteInput } from "./components/NoteInput";
import { NotesList } from "./components/NotesList";
import { WeatherWidget } from "./components/WeatherWidget";

function App() {
  return (
    <main className="container mx-auto p-4">
      <section className="flex flex-row gap-8  max-w-4xl mx-auto">
        <div>
          <WeatherWidget />
          <Clock />
        </div>

        <div>
          <NotesList />
          <NoteInput />
        </div>
        <div></div>
      </section>
    </main>
  );
}

export default App;
