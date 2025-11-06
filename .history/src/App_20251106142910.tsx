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
             rounded-3xl 
             bg-gradient-to-br from-[#1c1c1e]/98 to-[#2c2c2e]/98 
             backdrop-blur-2xl backdrop-saturate-150 
             border border-white/10 
             shadow-[0_4px_30px_rgba(0,0,0,0.3)] 
             p-4 text-gray-200"
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
