
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PhotoCarousel from '../components/PhotoCarousel';
import TimeCounter from '../components/TimeCounter';
import Confetti from '../components/Confetti';
import { Button } from '@/components/ui/button';
import { RotateCcw } from 'lucide-react';

const RomanticLanding = () => {
  const [showConfetti, setShowConfetti] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Esconder confetti após alguns segundos
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const handleBackToQuiz = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-romantic-bg via-pink-50 to-orange-50 relative overflow-hidden">
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
            💖
          </div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-6 md:py-8">
        <div className="max-w-4xl mx-auto space-y-8 md:space-y-12">
          {/* Header romântico */}
          <div className="text-center space-y-4 md:space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-great-vibes text-romantic-accent bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              Luana, meu amor!
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl font-dancing text-romantic-text">
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
          <div className="text-center space-y-4 md:space-y-6 animate-fade-in" style={{ animationDelay: '0.9s' }}>
            <div className="bg-gradient-to-br from-white via-pink-50 to-orange-50 p-6 md:p-8 rounded-2xl shadow-xl border border-romantic-gold/30 backdrop-blur-sm">
              <h2 className="text-2xl md:text-3xl font-dancing text-romantic-accent mb-4 bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                Para você, com todo meu amor
              </h2>
              <p className="text-base md:text-lg font-poppins text-romantic-text leading-relaxed">
                Cada momento ao seu lado é um presente. Obrigado por fazer minha vida mais colorida,
                mais feliz e mais completa. Você é minha inspiração diária e meu amor eterno.
              </p>
              <div className="mt-6 flex justify-center space-x-2">
                {['💕', '🌹', '✨', '💖', '🌟'].map((emoji, i) => (
                  <span 
                    key={i} 
                    className="text-xl md:text-2xl animate-float"
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
            <p className="text-xl md:text-2xl font-great-vibes text-romantic-accent bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              Com amor, Matheus 💝
            </p>
          </div>
        </div>
      </div>

      {/* Botão de voltar ao quiz - canto inferior direito */}
      <Button
        onClick={handleBackToQuiz}
        variant="outline"
        size="sm"
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 bg-white/80 hover:bg-white border-romantic-accent text-romantic-accent backdrop-blur-sm shadow-lg transition-all duration-300 hover:scale-105"
      >
        <RotateCcw size={16} className="mr-1" />
        <span className="hidden sm:inline">Voltar ao Quiz</span>
        <span className="sm:hidden">Quiz</span>
      </Button>
    </div>
  );
};

export default RomanticLanding;
