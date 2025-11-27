import { createContext, useContext, useState, useCallback, useEffect } from "react";
import type { ReactNode } from "react";

type ToastType = "success" | "error" | "info";

interface ToastItem {
  id: number;
  type: ToastType;
  message: string;
}

interface ToasterContextType {
  success: (msg: string) => void;
  error: (msg: string) => void;
  info: (msg: string) => void;
}

const ToasterContext = createContext<ToasterContextType | undefined>(undefined);

export const ToasterProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const add = useCallback((type: ToastType, message: string) => {
    const id = Date.now() + Math.floor(Math.random() * 1000);
    setToasts((s) => [...s, { id, type, message }]);
    // auto remove
    setTimeout(() => {
      setToasts((s) => s.filter((t) => t.id !== id));
    }, 3500);
  }, []);

  const ctx: ToasterContextType = {
    success: (m: string) => add("success", m),
    error: (m: string) => add("error", m),
    info: (m: string) => add("info", m),
  };

  return (
    <ToasterContext.Provider value={ctx}>
      {children}
      <div className="fixed top-4 right-4 z-50 flex flex-col gap-3">
        {toasts.map((t) => (
          <div
            key={t.id}
            className={`max-w-sm w-full px-4 py-3 rounded-lg shadow-md text-white ${
              t.type === "success"
                ? "bg-green-500"
                : t.type === "error"
                ? "bg-red-500"
                : "bg-blue-500"
            }`}
          >
            {t.message}
          </div>
        ))}
      </div>
    </ToasterContext.Provider>
  );
};

export const useToaster = () => {
  const ctx = useContext(ToasterContext);
  if (!ctx) throw new Error("useToaster must be used within ToasterProvider");
  return ctx;
};

export default ToasterContext;
