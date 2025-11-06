import "./App.css";
import { Clock } from "./components/Clock";
import { WeatherWidget } from "./components/WeatherWidget";
import { NotesList } from "./components/NotesList";
import { NoteInput } from "./components/NoteInput";
import { CallButton } from "./components/CallButton";

function App() {
  return (
    <main
      className="w-[800px] h-[200px] mx-auto flex items-center justify-between gap-4
                     bg-white/20 backdrop-blur-xl backdrop-saturate-150 
                     border border-white/30 rounded-2xl shadow-[0_8px_32px_0_rgba(31,38,135,0.25)] p-4
                     text-gray-800"
    >
      {/* Clima + Reloj */}
      <section className="flex flex-col justify-between items-center h-full w-[180px]">
        <WeatherWidget />
        <Clock />
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
