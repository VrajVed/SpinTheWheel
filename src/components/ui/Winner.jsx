import React from 'react'

const Winner = ({ selectedSection, spinWheel, closePopup }) => {
  return (
      <div className="relative z-10">
          <div className="flex items-center justify-center mb-6">
              <Volume2 className="w-12 h-12 text-amber-300 animate-pulse" />
          </div>

          <h2
              className="text-3xl md:text-4xl font-bold text-center text-amber-100 mb-4"
              style={{ fontFamily: 'Georgia, serif' }}
          >
              🏺 Destiny Revealed! 🏺
          </h2>

          <div className="bg-amber-950 bg-opacity-50 rounded-lg p-6 mb-6 border-2 border-amber-600">
              <p
                  className="text-4xl font-bold text-center text-yellow-300 animate-pulse"
                  style={{ fontFamily: 'Georgia, serif' }}
              >
                  {selectedSection}
              </p>
          </div>

          <div className="flex flex-col gap-3">
              <button
                  onClick={spinWheel}
                  className="w-full px-8 py-3 bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 text-amber-950 font-bold rounded-lg hover:scale-105 transform transition-all duration-200 shadow-lg border-2 border-amber-700"
                  style={{ fontFamily: 'Georgia, serif' }}
              >
                  ↻ SPIN AGAIN
              </button>

              <button
                  onClick={closePopup}
                  className="w-full px-8 py-3 bg-red-900 text-amber-100 font-bold rounded-lg hover:bg-red-800 transform transition-all duration-200 shadow-lg border-2 border-red-950"
                  style={{ fontFamily: 'Georgia, serif' }}
              >
                  ✕ Close
              </button>
          </div>
      </div>
  )
}

export default Winner