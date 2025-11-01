"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  // Placeholder gallery images - user can replace with their own photos
  const photos = [
    "/Benty/IMG-20231114-WA0035.jpg",
    "/Benty/IMG-20231226-WA0045.jpg",
    "/Benty/IMG-20241026-WA0002.jpg",
    "/Benty/IMG-20241214-WA0014.jpg",
    "/Benty/IMG-20250208-WA0001.jpg",
    "/Benty/IMG-20250212-WA0007.jpg",
    "/Benty/IMG-20250306-WA0033.jpg",
    "/Benty/IMG-20250715-WA0010.jpg",
    "/Benty/IMG-20250816-WA0003.jpg",
  ]

  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % photos.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlay, photos.length])

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length)
    setIsAutoPlay(false)
  }

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length)
    setIsAutoPlay(false)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative">
      {/* Background music player */}
      <audio autoPlay loop className="hidden" crossOrigin="anonymous">
        <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
      </audio>

      {/* Gallery container */}
      <div className="w-full max-w-4xl">
        {/* Title */}
        <h1 className="text-center text-4xl md:text-5xl font-bold text-white mb-12 glow-text">ذكرياتنا الجميلة ❤️</h1>

        {/* Photo frame */}
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-rose-300 via-pink-200 to-purple-300 rounded-3xl blur-3xl opacity-50"></div>

          <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl aspect-video">
            <img
              src={photos[currentIndex] || "/placeholder.svg"}
              alt={`Memory ${currentIndex + 1}`}
              className="w-full h-full object-cover animate-fade-in"
            />

            {/* Decorative corners */}
            <div className="absolute inset-0 pointer-events-none border-8 border-rose-200/20 rounded-3xl"></div>
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={goToPrev}
            className="p-4 rounded-full bg-white/80 backdrop-blur-md hover:bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 text-rose-500 glow-button"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Photo counter */}
          <div className="flex gap-2">
            {photos.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentIndex(idx)
                  setIsAutoPlay(false)
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? "bg-rose-400 w-8" : "bg-white/50 hover:bg-white/70"
                }`}
                aria-label={`Go to photo ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={goToNext}
            className="p-4 rounded-full bg-white/80 backdrop-blur-md hover:bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 text-rose-500 glow-button"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Photo count */}
        <p className="text-center text-white/80 text-sm">
          {currentIndex + 1} من {photos.length}
        </p>
      </div>

      {/* Floating decorations */}
      <div className="absolute top-10 left-10 text-4xl opacity-30 animate-float">❤️</div>
      <div className="absolute bottom-10 right-10 text-5xl opacity-30 animate-float" style={{ animationDelay: "1s" }}>
        💕
      </div>
      <div className="absolute top-1/3 right-5 text-3xl opacity-20 animate-float" style={{ animationDelay: "2s" }}>
        ✨
      </div>
    </div>
  )
}
