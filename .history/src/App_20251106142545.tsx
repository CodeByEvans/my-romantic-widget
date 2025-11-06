import "./App.css";
import { Clock } from "./components/Clock";
import { WeatherWidget } from "./components/WeatherWidget";
import { NotesList } from "./components/NotesList";
import { NoteInput } from "./components/NoteInput";
import { CallButton } from "./components/CallButton";

function App() {
  return (
    <main
      data-tauri-drag-region
      className="w-[800px] h-[200px] mx-auto flex items-center justify-between gap-4
             bg-[#2f2f2f]/95 backdrop-blur-4xl backdrop-saturate-150 border border-white/20 shadow-[8px_8px_25px_#d1d9e6,-8px_-8px_25px_#ffffff]
             p-4 text-gray-800"
    >
      {/* Clima + Reloj */}
      <section className="flex flex-col justify-between items-center h-full w-[180px] gap-2">
        <Clock />
        <WeatherWidget />
      </section>

      {/* Notas + input */}
      <section className="flex flex-col justify-between h-full flex-1">
        <NotesList />
        <NoteInput />
      </section>

      {/* Llamada */}
      <section className="flex flex-col justify-center items-center h-full w-[150px]">
        <CallButton />
        <p className="text-xs text-gray-200 mt-2 drop-shadow-sm">
          Última conexión: hace 2 h
        </p>
      </section>
    </main>
  );
}

export default App;
