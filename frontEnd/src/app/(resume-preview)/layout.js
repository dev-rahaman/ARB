"use client";
import { useEffect } from "react";
import Alert from "../components/Alert";
import "../globals.css";

export default function PreviewLayout({ children }) {
  useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault();
    };
    document.addEventListener("contextmenu", handleContextMenu);
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  return (
    <html lang="en">
      <body>
        <Alert />
        {children}
      </body>
    </html>
  );
}
