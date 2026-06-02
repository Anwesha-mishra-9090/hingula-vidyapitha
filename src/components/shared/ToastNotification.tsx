"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, XCircle, Info, X } from "lucide-react";

export type ToastType = "success" | "error" | "info";

interface ToastNotificationProps {
  message: string;
  type?: ToastType;
  duration?: number;
  onClose: () => void;
}

export function ToastNotification({
  message,
  type = "info",
  duration = 3000,
  onClose,
}: ToastNotificationProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const icons = {
    success: <CheckCircle className="h-5 w-5 text-green-500" />,
    error: <XCircle className="h-5 w-5 text-red-500" />,
    info: <Info className="h-5 w-5 text-blue-500" />,
  };

  const colors = {
    success: "border-green-500/20 bg-green-500/10",
    error: "border-red-500/20 bg-red-500/10",
    info: "border-blue-500/20 bg-blue-500/10",
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      className={`fixed top-20 right-4 z-50 flex items-center gap-3 rounded-lg border p-4 shadow-lg ${colors[type]}`}
    >
      {icons[type]}
      <span className="text-sm">{message}</span>
      <button onClick={onClose} className="ml-2 rounded p-1 hover:bg-white/10">
        <X className="h-4 w-4" />
      </button>
    </motion.div>
  );
}

export function ToastContainer() {
  const [toasts, setToasts] = useState<{ id: string; message: string; type: ToastType }[]>([]);

  const addToast = (message: string, type: ToastType = "info") => {
    const id = Math.random().toString(36);
    setToasts((prev) => [...prev, { id, message, type }]);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return (
    <>
      <div className="fixed top-16 right-4 z-50 space-y-2">
        <AnimatePresence>
          {toasts.map((toast) => (
            <ToastNotification
              key={toast.id}
              message={toast.message}
              type={toast.type}
              onClose={() => removeToast(toast.id)}
            />
          ))}
        </AnimatePresence>
      </div>
      {typeof window !== "undefined" &&
        (window as any).__toast === undefined &&
        ((window as any).__toast = addToast)}
    </>
  );
}
