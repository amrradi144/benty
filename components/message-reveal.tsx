"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

interface MessageRevealProps {
  onDone: () => void
}

export default function MessageReveal({ onDone }: MessageRevealProps) {
  const [clicked, setClicked] = useState(false)
  const [showButton, setShowButton] = useState(false)

  const handleScreenClick = () => {
    setClicked(true)
    setTimeout(() => setShowButton(true), 500)
  }

  return (
    <div
      onClick={handleScreenClick}
      className="min-h-screen flex flex-col items-center justify-center p-4 cursor-pointer select-none"
    >
      {/* Initial glowing message */}
      {!clicked && (
        <div className="text-center animate-fade-in">
          <div className="mb-8">
            <p className="text-5xl md:text-6xl font-bold text-rose-400 glow-text animate-pulse">دوسي على الشاشة ❤️</p>
          </div>
        </div>
      )}

      {/* Main message container */}
      {clicked && (
        <div className={`transition-all duration-1000 ${clicked ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
          <div className="max-w-2xl mx-auto">
            {/* Glowing background card */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-rose-300 via-pink-200 to-purple-300 rounded-3xl blur-2xl opacity-40 animate-pulse"></div>

              <div className="relative bg-white/90 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-white/50 shadow-2xl">
                {/* Decorative hearts */}
                <div className="text-center mb-6">
                  <span className="text-4xl">❤️</span>
                </div>

                {/* Main Arabic message */}
                <p className="text-lg md:text-xl leading-relaxed text-right text-gray-800 font-serif" dir="rtl">
                  انا بحبك يبنتي
                  <br />
                  <br />
                  عارف اننا بنتخانق كتير وانا ساعات ببقي زنان
                  <br />
                  (مش ساعات الصراحه دايما)
                  <br />
                  <br />
                  وعارف ان دا طبيعي يخليكي تملي منيي
                  <br />
                  يخليكي تتخنقي مني
                  <br />
                  <br />
                  بس انتي عارفه انا بحبك ازاي
                  <br />
                  وانا عايز اننا نرجع
                  <br />
                  عشان انا بحبك ومش عايز ابطل احبك
                  <br />
                  <br />
                  بحبك بكل تفاصيلك
                  <br />
                  <br />
                  وبجد مش كلام مح
                  <br />
                  نبصي الخناق في اي علاقه طبيعي جدا
                  <br />
                  وبعدين طالما احنا بنتخانق
                  <br />
                  دا يدل ع اننا عايزين نصلح السبب اللي بنتخانق عشانه
                  <br />
                  <br />
                  <span className="text-2xl">تيجي نرجع بقا يا حبيبي؟ ❤️</span>
                </p>
              </div>
            </div>
          </div>

          {/* Next button */}
          {showButton && (
            <div className="mt-10 flex justify-center animate-fade-in">
              <Button
                onClick={(e) => {
                  e.stopPropagation()
                  onDone()
                }}
                className="px-8 py-3 bg-gradient-to-r from-rose-400 to-pink-400 hover:from-rose-500 hover:to-pink-500 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 glow-button"
              >
                Next ❤️
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
