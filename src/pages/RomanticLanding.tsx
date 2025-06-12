
import React, { useState, useEffect } from 'react';
import PhotoCarousel from '../components/PhotoCarousel';
import TimeCounter from '../components/TimeCounter';
import Confetti from '../components/Confetti';

const RomanticLanding = () => {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    // Esconder confetti após alguns segundos
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-romantic-bg relative overflow-hidden">
      {showConfetti && <Confetti />}
      
      {/* Fundo com corações flutuantes */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-romantic-accent opacity-20 animate-heart-float"
            style={{
              left: `${Math.random() * 100}%`,
              fontSize: `${20 + Math.random() * 20}px`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          >
            ❤️
          </div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Header romântico */}
          <div className="text-center space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-great-vibes text-romantic-text">
              Meu Amor
            </h1>
            <p className="text-xl md:text-2xl font-dancing text-romantic-accent">
              Uma surpresa especial para você ✨
            </p>
          </div>

          {/* Contador de tempo */}
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <TimeCounter startDate="2021-05-15" />
          </div>

          {/* Carrossel de fotos */}
          <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <PhotoCarousel />
          </div>

          {/* Mensagem final */}
          <div className="text-center space-y-6 animate-fade-in" style={{ animationDelay: '0.9s' }}>
            <div className="bg-romantic-card p-8 rounded-2xl shadow-lg border border-romantic-gold/20">
              <h2 className="text-3xl font-dancing text-romantic-accent mb-4">
                Para você, com todo meu amor
              </h2>
              <p className="text-lg font-poppins text-romantic-text leading-relaxed">
                Cada momento ao seu lado é um presente. Obrigado por fazer minha vida mais colorida,
                mais feliz e mais completa. Você é minha inspiração diária e meu amor eterno.
              </p>
              <div className="mt-6 flex justify-center space-x-2">
                {['💕', '🌹', '✨', '💖', '🌟'].map((emoji, i) => (
                  <span 
                    key={i} 
                    className="text-2xl animate-float"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  >
                    {emoji}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Assinatura */}
          <div className="text-center animate-fade-in" style={{ animationDelay: '1.2s' }}>
            <p className="text-2xl font-great-vibes text-romantic-accent">
              Com amor, Matheus 💝
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RomanticLanding;
