import { useState, useRef, useEffect } from 'react';
import Winner from './Winner';

const sections = [
    { label: 'Silver Tongue', color: '#00000000', textColor: '#ffffff' },
    { label: 'Fact Check', color: '#00000000', textColor: '#ffffff' },
    { label: 'Spin Again', color: '#00000000', textColor: '#ffffff' },
    { label: 'Insurance Policy', color: '#00000000', textColor: '#ffffff' },
    { label: 'Whisper', color: '#00000000', textColor: '#ffffff' },
    { label: 'Decoy', color: '#00000000', textColor: '#ffffff' },
    { label: 'Follow Up', color: '#00000000', textColor: '#ffffff' },
    { label: 'Spin Again', color: '#00000000', textColor: '#ffffff' },
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

                        <div className="w-[400px] h-[400px] relative flex items-center justify-center">
                            <img
                                src="/Wheel.png"
                                alt="Wheel of Destiny"
                                width={400}
                                height={400}
                                role="button"
                                tabIndex={0}
                                aria-pressed={isSpinning}
                                aria-label="Spin the wheel"
                                title="Click to spin"
                                onClick={spinWheel}
                                onKeyDown={(e) => {
                                    if ((e.key === 'Enter' || e.key === ' ') && !isSpinning) {
                                        e.preventDefault();
                                        spinWheel();
                                    }
                                }}
                                className="drop-shadow-2xl focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-500"
                                style={{
                                    transform: `rotate(${rotation}deg)`,
                                    transition: isSpinning ? 'transform 4s cubic-bezier(0.25, 0.1, 0.25, 1)' : 'none',
                                    cursor: isSpinning ? 'wait' : 'pointer',
                                    pointerEvents: isSpinning ? 'none' : 'auto',
                                    outline: 'none',
                                    WebkitTapHighlightColor: 'transparent',
                                }}
                            />
                        </div>
                    </div>
                </div>
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

                        
                    </div>
                </div>
            )}
        </div>
    );
}
