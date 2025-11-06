import "./App.css";
import { Clock } from "./components/Clock";
import { WeatherWidget } from "./components/WeatherWidget";
import { NotesList } from "./components/NotesList";
import { NoteInput } from "./components/NoteInput";
import { CallButton } from "./components/CallButton";

function App() {
  return (
    <main className="w-[800px] h-[200px] mx-auto flex items-center justify-between gap-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-lg p-4 backdrop-blur-md">
      {/* Clima y reloj */}
      <section className="flex flex-col justify-between items-center h-full w-[180px]">
        <WeatherWidget />
        <Clock />
      </section>

      {/* Notas + input */}
      <section className="flex flex-col justify-between h-full flex-1">
        <NotesList />
        <NoteInput />
      </section>

      {/* Botón de llamada */}
      <section className="flex flex-col justify-center items-center h-full w-[150px]">
        <CallButton />
        <p className="text-xs text-gray-600 mt-1">Última conexión: hace 2h</p>
      </section>
    </main>
  );
}

export default App;
