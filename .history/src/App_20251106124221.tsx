import "./App.css";
import CallButton from "./components/CallButton";
import { Clock } from "./components/Clock";
import { NoteInput } from "./components/NoteInput";
import { NotesList } from "./components/NotesList";
import { WeatherWidget } from "./components/WeatherWidget";

function App() {
  return (
    <main className="container mx-auto p-4">
      <section className="flex flex-row items-center justify-between gap-4 w-[800px] h-[200px] mx-auto bg-white bg-opacity-20 backdrop-blur-md rounded-2xl shadow-lg p-4">
        <div className="flex flex-col justify-between h-full">
          <WeatherWidget />
          <Clock />
        </div>

        <div className="flex flex-col justify-between h-full w-[300px]">
          <NotesList />
          <NoteInput />
        </div>

        <div className="flex flex-col justify-center items-center h-full w-[150px]">
          <CallButton />
        </div>
      </section>
    </main>
  );
}

export default App;
