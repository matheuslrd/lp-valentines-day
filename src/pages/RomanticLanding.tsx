
import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Heart } from 'lucide-react';
import PhotoCarousel from '@/components/PhotoCarousel';
import TimeCounter from '@/components/TimeCounter';

const RomanticLanding = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-romantic-bg via-romantic-pink to-orange-50">
      {/* Corações flutuantes */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-pink-400 text-xl animate-heart-float"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          >
            ❤️
          </div>
        ))}
      </div>

      <div className={`container mx-auto px-4 py-8 transition-all duration-1000 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-great-vibes text-romantic-accent mb-4 animate-fade-in">
            Nossa História de Amor
          </h1>
          <div className="flex items-center justify-center gap-2 text-romantic-text">
            <Heart className="text-pink-500 animate-float" size={24} />
            <p className="font-dancing text-xl">Uma surpresa especial para você</p>
            <Heart className="text-pink-500 animate-float" size={24} />
          </div>
        </div>

        {/* Carrossel de Fotos */}
        <div className="mb-12">
          <PhotoCarousel />
        </div>

        {/* Contador de Tempo */}
        <Card className="bg-romantic-card/80 backdrop-blur-sm border-none shadow-lg p-8 mb-8 max-w-2xl mx-auto">
          <TimeCounter startDate="2021-05-15" />
        </Card>

        {/* Mensagem Romântica */}
        <Card className="bg-romantic-card/80 backdrop-blur-sm border-none shadow-lg p-8 max-w-3xl mx-auto">
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-dancing text-romantic-accent mb-4">
              Para Minha Pessoa Especial
            </h2>
            <p className="text-lg font-poppins text-romantic-text leading-relaxed">
              Depois dessa brincadeira toda, queria te dizer o quanto você é importante na minha vida. 
              Cada dia ao seu lado é uma nova aventura, repleta de amor, risos e momentos únicos.
            </p>
            <p className="text-lg font-poppins text-romantic-text leading-relaxed">
              Você transforma os dias comuns em extraordinários, e mesmo nas pegadinhas mais bobas, 
              seu sorriso faz tudo valer a pena. ❤️
            </p>
            <div className="pt-4">
              <p className="text-2xl font-dancing text-romantic-accent">
                Te amo infinitamente! 💕
              </p>
            </div>
          </div>
        </Card>

        {/* Footer romântico */}
        <div className="text-center mt-12 pb-8">
          <p className="font-dancing text-xl text-romantic-text opacity-70">
            Feito com muito amor por Matheus 💝
          </p>
        </div>
      </div>
    </div>
  );
};

export default RomanticLanding;
