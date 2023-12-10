"use client";
import { useEffect } from "react";

export const Snow = () => {
  // Ajouter cette fonction dans ton composant Home
  useEffect(() => {
    // Crée des flocons de neige
    const snowflakes: HTMLElement[] = [];
    const numberOfSnowflakes = 50; // Nombre de flocons de neige

    for (let i = 0; i < numberOfSnowflakes; i++) {
      const snowflake = document.createElement("div");
      snowflake.innerHTML = "❄";
      snowflake.style.left = `${Math.random() * 100}vw`;
      snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`; // Durée de chute variable
      snowflake.style.fontSize = `${Math.random() * 10 + 10}px`; // Taille variable
      snowflake.classList.add("snowflake");
      document.body.appendChild(snowflake);
      snowflakes.push(snowflake);
    }

    // Nettoyer les flocons de neige après désassemblage
    return () => {
      snowflakes.forEach((snowflake) => document.body.removeChild(snowflake));
    };
  }, []);

  return <></>;
};
