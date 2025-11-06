import "./App.css";
import CallButton from "./components/CallButton";
import { Clock } from "./components/Clock";
import { NoteInput } from "./components/NoteInput";
import { NotesList } from "./components/NotesList";
import { WeatherWidget } from "./components/WeatherWidget";

function App() {
  return (
    <main className="container mx-auto p-4">
      <section className="flex flex-row justify-between gap-6 w-[800px] h-[320px] mx-auto bg-white bg-opacity-30 backdrop-blur-md rounded-2xl shadow-xl p-6">
        <div className="flex flex-col justify-between">
          <div className="flex flex-row gap-2 items-center">
            <WeatherWidget />
            <Clock />
          </div>
        </div>

        <div className="flex flex-col justify-between w-[340px]">
          <NotesList />
          <NoteInput />
        </div>

        <div className="flex flex-col justify-between items-center">
          <CallButton />
          <div className="text-sm text-gray-500 mt-2">💬 en línea</div>
        </div>
      </section>
    </main>
  );
}

export default App;
