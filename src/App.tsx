import { useEffect } from "react";
import "./App.css";

import { CallSection } from "./modules/call/components/CallSection";
import { ClockSection } from "./modules/clock/components/ClockSection";
import { NotesSection } from "./modules/notes/components/NotesSection";
import { load } from "@tauri-apps/plugin-store";
import React from "react";
import LinkModal from "./modules/connection/components/LinkModal";

function App() {
  const [userLinked, setUserLinked] = React.useState(false);
  const [connecitonId, setConnecitonId] = React.useState<string | null>(null);

  useEffect(() => {
    const init = async () => {
      try {
        const store = await load("store.json");
        const userLinked = await store.get<boolean>("user_linked");
        setUserLinked(userLinked === true ? true : false);
      } catch (error) {
        console.error(error);
      }
    };
    init();
  }, []);
  return (
    <main
      className="w-[800px] h-[200px] rounded-xl border border-border/50 shadow-xl overflow-hidden py-4"
      data-tauri-drag-region
    >
      {userLinked ? null : <LinkModal isOpen={true} />}
      {/* Clima + Reloj */}
      <section className="flex h-full divide-x divide-border/30">
        <ClockSection partnerName="Alex" />

        <NotesSection notes={[]} onSendNote={() => {}} />

        <CallSection lastConnection={null} isOnline={false} onCall={() => {}} />
      </section>
    </main>
  );
}

export default App;
