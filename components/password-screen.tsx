"use client"

import type React from "react"

import { useState } from "react"

interface PasswordScreenProps {
  onCorrect: () => void
}

export default function PasswordScreen({ onCorrect }: PasswordScreenProps) {
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const correctPassword = "19/1/2022"

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === correctPassword) {
      setError("")
      // Delay to show success
      setTimeout(() => onCorrect(), 300)
    } else {
      setError("كلمة المرور خاطئة")
      setPassword("")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-rose-200/50 glow-card">
          {/* Decorative hearts */}
          <div className="text-center mb-8">
            <div className="text-6xl mb-4 animate-pulse">❤️</div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent mb-2">
              حبيبتي
            </h1>
            <p className="text-gray-600 text-sm">أدخلي كلمة المرور</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl border-2 border-rose-200 focus:border-rose-400 focus:outline-none bg-white/50 backdrop-blur-sm text-center font-semibold text-lg tracking-widest transition-all duration-300"
                dir="rtl"
              />
            </div>

            {error && <p className="text-center text-red-500 text-sm animate-fade-in">{error}</p>}

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-rose-400 to-pink-400 hover:from-rose-500 hover:to-pink-500 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg glow-button"
            >
              دخول
            </button>
          </form>

          <p className="text-center text-gray-500 text-xs mt-6">تم تطويره بحب ❤️</p>
        </div>
      </div>
    </div>
  )
}
