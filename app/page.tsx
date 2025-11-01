"use client"

import { useState } from "react"
import PasswordScreen from "@/components/password-screen"
import MessageReveal from "@/components/message-reveal"
import Gallery from "@/components/gallery"

export default function Home() {
  const [stage, setStage] = useState<"password" | "message" | "gallery">("password")

  const handlePasswordCorrect = () => {
    setStage("message")
  }

  const handleMessageDone = () => {
    setStage("gallery")
  }

  return (
    <div className="min-h-screen w-full overflow-hidden bg-gradient-to-br from-rose-50 via-white to-purple-50">
      {/* Floating hearts background */}
      <div className="fixed inset-0 pointer-events-none">
        <FloatingHearts />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {stage === "password" && <PasswordScreen onCorrect={handlePasswordCorrect} />}
        {stage === "message" && <MessageReveal onDone={handleMessageDone} />}
        {stage === "gallery" && <Gallery />}
      </div>
    </div>
  )
}

function FloatingHearts() {
  return (
    <>
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute text-rose-300 opacity-40 animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.5}s`,
            fontSize: `${24 + Math.random() * 32}px`,
          }}
        >
          ❤️
        </div>
      ))}
    </>
  )
}
