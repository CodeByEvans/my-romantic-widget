import { Button } from "@/globals/components/atoms/button";
import { Input } from "@/globals/components/atoms/input";
import { useEffect, useState } from "react";

export const LoginScreen = () => {
  return (
    <section className="max-h-screen flex px-4" data-tauri-drag-region>
      <div className="w-full h-screen flex items-center justify-center flex-col">
        <img src="logo.svg" alt="logo" className="w-20 h-20" />
        <h1 className="text-2xl font-semibold text-[#03a3d7]">Cathub</h1>
      </div>
      <div className="w-full h-screen flex items-center justify-center flex-col gap-2 my-auto">
        <h1 className="text-2xl font-semibold text-[#03a3d7]">
          Iniciar sesión
        </h1>
        <Input placeholder="Usuario" />
        <Input placeholder="Contraseña" />
        <Button>Rotar Tema</Button>
      </div>
    </section>
  );
};
