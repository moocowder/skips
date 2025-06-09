import React from "react"
// import { cn } from "../utils/cn" // optional utility to join classNames

interface ActionButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary"
  children: React.ReactNode
}

export const Bouton = ({
  variant = "primary",
  children,
  className,
  ...props
}: ActionButtonProps) => {
  const base =
    "flex-1 font-francois px-5 py-3 text-lg font-semibold rounded-md transition-all duration-300 cursor-pointer"

  const variants = {
    primary: "bg-green-400 text-black hover:bg-cyan-400",
    secondary:
      "text-white border-2 border-green-400 hover:bg-cyan-400 hover:border-cyan-400 hover:text-black",
  }

  return (
    <button
      className={`${base} ${variants[variant]} ${className ?? ""}`}
      {...props}
    >
      {children}
    </button>
  )
}
