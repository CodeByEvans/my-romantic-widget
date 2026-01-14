import "./App.css";
import { Clock } from "./modules/clock/components/Clock";
import { Weather } from "./modules/weather/components/Weather";

import { CallButton } from "./modules/call/components/CallButton";
import { NotesList } from "./modules/notes/components/NotesList";
import { NoteInput } from "./modules/notes/components/NoteInput";

function App() {
  return (
    <main data-tauri-drag-region data-theme="glass">
      {/* Clima + Reloj */}
      <section className="flex flex-col justify-between items-center h-full w-[180px] gap-2">
        <Clock />
        <Weather />
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
