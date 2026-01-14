import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AuthGuard from "./modules/auth/components/AuthGuard";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AuthGuard>
      <App />
    </AuthGuard>
  </React.StrictMode>
);
