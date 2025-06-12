
import React, { useEffect, useState } from 'react';

const Confetti = () => {
  const [pieces, setPieces] = useState<Array<{ id: number; x: number; y: number; color: string; delay: number }>>([]);

  useEffect(() => {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#f0932b', '#eb4d4b', '#6c5ce7'];
    const newPieces = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: -10,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: Math.random() * 2
    }));
    
    setPieces(newPieces);

    setTimeout(() => {
      setPieces([]);
    }, 4000);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {pieces.map((piece) => (
        <div
          key={piece.id}
          className="absolute w-2 h-2 animate-[confetti-fall_3s_ease-out_forwards]"
          style={{
            left: `${piece.x}%`,
            backgroundColor: piece.color,
            animationDelay: `${piece.delay}s`,
            '--random-x': `${(Math.random() - 0.5) * 200}px`
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
};

export default Confetti;
