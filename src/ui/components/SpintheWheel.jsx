import { useState, useRef, useEffect } from 'react';
import { Volume2 } from 'lucide-react';

const sections = [
    { label: 'Silver Tongue', color: '#C0C0C0', textColor: '#1a1a1a' },
    { label: 'Fact Check', color: '#8B4513', textColor: '#ffffff' },
    { label: 'Insurance Policy', color: '#B8860B', textColor: '#1a1a1a' },
    { label: 'Whisper', color: '#8B0000', textColor: '#ffffff' },
    { label: 'Decoy', color: '#2F4F4F', textColor: '#ffffff' },
    { label: 'Follow Up', color: '#DAA520', textColor: '#1a1a1a' },
];

export default function SpinWheel() {
    const [rotation, setRotation] = useState(0);
    const [isSpinning, setIsSpinning] = useState(false);
    const [selectedSection, setSelectedSection] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    const audioRef = useRef(null);

    useEffect(() => {
        audioRef.current = new Audio();
    }, []);

    const playSound = () => {
        if (audioRef.current) {
            audioRef.current.src =
                'data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIGGe77OWhTRAMUKfk77RgGgU7k9jx0H4qBSh+zPDcizsIE2Cx6OunUxMKRp/h8r5rIAUsgs/y2Ik2Bxdns+3ln0wPClKn5O+0YRoFOpPY8dB+KgUofsz03Is7CBNgsejrp1MTCkaf4fK+ayAFLILP8tiJNgcXZ7Pt5Z9MDwpSp+TvtGEaBTqT2PHQfioFKH7M8NyLOwgTYLHo66dTEwpGn+HyvmsgBSyCz/LYiTYHF2ez7eWfTA8KUqfk77RhGgU6k9jx0H4qBSh+zPDcizsIE2Cx6OunUxMKRp/h8r5rIAUsgs/y2Ik2Bxdns+3ln0wPClKn5O+0YRoFOpPY8dB+KgUofsz03Is7CBNgsejrp1MTCkaf4fK+ayAFLILP8tiJNgcXZ7Pt5Z9MDwpSp+TvtGEaBTqT2PHQfioFKH7M8NyLOwgTYLHo66dTEwpGn+HyvmsgBSyCz/LYiTYHF2ez7eWfTA8KUqfk77RhGgU6k9jx0H4qBSh+zPDcizsIE2Cx6OunUxMK';
            audioRef.current.play().catch(() => { });
        }
    };

    const spinWheel = () => {
        if (isSpinning) return;

        setIsSpinning(true);
        setShowPopup(false);
        playSound();

        const spins = 5;
        const randomDegree = Math.floor(Math.random() * 360);
        const totalRotation = rotation + spins * 360 + randomDegree;

        setRotation(totalRotation);

        setTimeout(() => {
            const normalizedRotation = totalRotation % 360;
            const sectionAngle = 360 / sections.length;
            const adjustedRotation = (360 - normalizedRotation + sectionAngle / 2) % 360;
            const sectionIndex = Math.floor(adjustedRotation / sectionAngle) % sections.length;

            setSelectedSection(sections[sectionIndex].label);
            setShowPopup(true);
            setIsSpinning(false);
        }, 4000);
    };

    const closePopup = () => {
        setShowPopup(false);
        setSelectedSection(null);
    };

    return (
        <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-amber-900 via-red-900 to-orange-950">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}></div>
            </div>
            <div className="absolute inset-0 opacity-10">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                ></div>
            </div>

            <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-amber-800 to-transparent py-6 shadow-2xl border-b-4 border-amber-600">
                <h1
                    className="text-4xl md:text-6xl font-bold text-center text-amber-100 tracking-wider drop-shadow-lg"
                    style={{ fontFamily: 'Georgia, serif' }}
                >
                    ⚜ Ancient Dynasty Wheel ⚜
                </h1>
                <p className="text-center text-amber-200 mt-2 text-lg tracking-wide">Spin the Wheel of Destiny</p>
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen pt-32 pb-16 px-4">
                <div className="relative">
                    <div className="absolute -inset-8 bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 rounded-full opacity-30 blur-2xl animate-pulse"></div>

                    <div className="relative">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-16 z-20">
                            <div className="w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[40px] border-t-amber-600 drop-shadow-2xl"></div>
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 w-4 h-4 bg-amber-500 rounded-full border-2 border-amber-800"></div>
                        </div>

                        <svg
                            width="400"
                            height="400"
                            viewBox="0 0 400 400"
                            className="drop-shadow-2xl"
                            style={{
                                transform: `rotate(${rotation}deg)`,
                                transition: isSpinning ? 'transform 4s cubic-bezier(0.25, 0.1, 0.25, 1)' : 'none',
                            }}
                        >
                            <defs>
                                <filter id="shadow">
                                    <feDropShadow dx="0" dy="4" stdDeviation="8" floodOpacity="0.5" />
                                </filter>
                            </defs>

                            <circle cx="200" cy="200" r="190" fill="#4A2C2A" filter="url(#shadow)" />
                            <circle cx="200" cy="200" r="180" fill="#2C1810" />

                            {sections.map((section, index) => {
                                const angle = (360 / sections.length) * index;
                                const nextAngle = (360 / sections.length) * (index + 1);
                                const startAngle = (angle - 90) * (Math.PI / 180);
                                const endAngle = (nextAngle - 90) * (Math.PI / 180);

                                const x1 = 200 + 175 * Math.cos(startAngle);
                                const y1 = 200 + 175 * Math.sin(startAngle);
                                const x2 = 200 + 175 * Math.cos(endAngle);
                                const y2 = 200 + 175 * Math.sin(endAngle);

                                const middleAngle = (startAngle + endAngle) / 2;
                                const textX = 200 + 120 * Math.cos(middleAngle);
                                const textY = 200 + 120 * Math.sin(middleAngle);
                                const textRotation = (angle + nextAngle) / 2;

                                return (
                                    <g key={index}>
                                        <path
                                            d={`M 200 200 L ${x1} ${y1} A 175 175 0 0 1 ${x2} ${y2} Z`}
                                            fill={section.color}
                                            stroke="#2C1810"
                                            strokeWidth="3"
                                        />
                                        <text
                                            x={textX}
                                            y={textY}
                                            fill={section.textColor}
                                            fontSize="16"
                                            fontWeight="bold"
                                            textAnchor="middle"
                                            dominantBaseline="middle"
                                            transform={`rotate(${textRotation}, ${textX}, ${textY})`}
                                            style={{ fontFamily: 'Georgia, serif' }}
                                        >
                                            {section.label}
                                        </text>
                                    </g>
                                );
                            })}

                            <circle cx="200" cy="200" r="30" fill="#DAA520" stroke="#8B4513" strokeWidth="3" />
                            <circle cx="200" cy="200" r="20" fill="#B8860B" />
                            <circle cx="200" cy="200" r="10" fill="#FFD700" />
                        </svg>
                    </div>
                </div>

                <button
                    onClick={spinWheel}
                    disabled={isSpinning}
                    className={`mt-12 px-12 py-4 text-2xl font-bold rounded-lg shadow-2xl transform transition-all duration-200 border-4 ${isSpinning
                            ? 'bg-gray-600 border-gray-700 text-gray-400 cursor-not-allowed'
                            : 'bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 border-amber-700 text-amber-950 hover:scale-110 hover:shadow-amber-500/50 active:scale-95'
                        }`}
                    style={{ fontFamily: 'Georgia, serif' }}
                >
                    {isSpinning ? 'SPINNING...' : '⚡ SPIN THE WHEEL ⚡'}
                </button>
            </div>

            {showPopup && selectedSection && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 animate-fadeIn">
                    <div className="bg-gradient-to-br from-amber-800 via-red-900 to-amber-900 rounded-2xl p-8 md:p-12 max-w-md mx-4 shadow-2xl border-4 border-amber-600 animate-scaleIn relative overflow-hidden">
                        <div className="absolute inset-0 opacity-20">
                            <div
                                className="absolute inset-0"
                                style={{
                                    backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
                                    backgroundSize: '20px 20px',
                                }}
                            ></div>
                        </div>

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
                    </div>
                </div>
            )}
        </div>
    );
}
