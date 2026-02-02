"use client";

import { Phone } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/globals/components/atoms/button";
import { authService } from "@/modules/auth/services/auth.service";

interface CallSectionProps {
  lastConnection: Date | null;
  isOnline: boolean;
  onCall: () => void;
}

export function CallSection({
  lastConnection,
  isOnline,
  onCall,
}: CallSectionProps) {
  const formatLastConnection = (date: Date | null) => {
    if (!date) return "Sin conexion";

    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (minutes < 1) return "Ahora mismo";
    if (minutes < 60) return `Hace ${minutes} min`;
    if (hours < 24) return `Hace ${hours}h`;
    if (days === 1) return "Ayer";
    return `Hace ${days} dias`;
  };

  return (
    <div className="flex flex-col items-center justify-center gap-3 px-4 h-full min-w-[140px]">
      {/* Call button */}
      <Button
        onClick={authService.logout}
        className={cn(
          "w-14 h-14 rounded-full p-0 shadow-lg transition-all duration-300",
          "bg-call-button hover:bg-call-button/90 hover:scale-105 active:scale-95",
          "text-call-button-foreground",
        )}
      >
        <Phone className="w-6 h-6" />
        <span className="sr-only">Llamar</span>
      </Button>

      {/* Connection status */}
      <div className="flex flex-col items-center gap-1">
        <div className="flex items-center gap-1.5">
          <div
            className={cn(
              "w-2 h-2 rounded-full",
              isOnline ? "bg-online animate-pulse" : "bg-offline",
            )}
          />
          <span className="text-xs font-medium text-foreground">
            {isOnline ? "En linea" : "Desconectado"}
          </span>
        </div>

        {!isOnline && lastConnection && (
          <span className="text-[10px] text-muted-foreground">
            {formatLastConnection(lastConnection)}
          </span>
        )}
      </div>
    </div>
  );
}
