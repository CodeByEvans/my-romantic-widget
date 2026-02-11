import { useEffect } from "react";
import "./App.css";

import { CallSection } from "./modules/call/components/CallSection";
import { ClockSection } from "./modules/clock/components/ClockSection";
import { NotesSection } from "./modules/notes/components/NotesSection";
import { load } from "@tauri-apps/plugin-store";
import React from "react";
import LinkModal from "./modules/connection/components/LinkModal";
import { connectionService } from "./modules/connection/services/connection.service";

function App() {
  const [userLinked, setUserLinked] = React.useState(true);
  const [partnerName, setPartnerName] = React.useState("Amor");

  useEffect(() => {
    const init = async () => {
      try {
        const store = await load("store.json");
        const connection_id = await store.get<string>("connection_id");
        if (connection_id) {
          const partner_name = await store.get<string>("partner_name");
          if (partner_name) {
            setPartnerName(partner_name);
          }
          setUserLinked(true);
          return;
        }
        const connection = await connectionService.getConnection();
        if (connection) {
          await store.set("connection_id", connection.id);
          await store.set("partner_name", connection.partnerName);
          await store.save();
          setUserLinked(true);
        }
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
      {userLinked ? null : <LinkModal />}
      {/* Clima + Reloj */}
      <section className="flex h-full divide-x divide-border/30">
        <ClockSection partnerName={partnerName} />

        <NotesSection onSendNote={() => {}} />

        <CallSection lastConnection={null} isOnline={false} onCall={() => {}} />
      </section>
    </main>
  );
}

export default App;
