
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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

  const timelineData = [
    {
      year: '2021',
      title: 'O dia em que nossos olhares se encontraram',
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Tudo começou com um sorriso'
    },
    {
      year: '2022',
      title: 'Carimbos no passaporte e corações acelerados',
      image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Nossa primeira aventura juntos'
    },
    {
      year: '2023',
      title: 'Chaves na porta, sonhos compartilhados',
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Construindo nosso lar'
    },
    {
      year: '2024',
      title: 'Maya chegou para completar nossa família',
      image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Amor de quatro patas'
    },
    {
      year: '2025',
      title: 'De mãos dadas, celebrando o presente',
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Nosso momento atual'
    }
  ];

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

      <div className="relative z-10 container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-6xl mx-auto space-y-12 md:space-y-16">
          {/* Header romântico com margem maior */}
          <div className="text-center space-y-4 md:space-y-6 animate-fade-in pt-8 md:pt-12">
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

          {/* Timeline - Nossa Jornada */}
          <div className="animate-fade-in space-y-8" style={{ animationDelay: '0.6s' }}>
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-great-vibes text-romantic-accent bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent mb-4">
                Nossa Jornada: Capítulos de Amor
              </h2>
              <p className="text-lg font-dancing text-romantic-text">
                Cinco anos de nós, eternizados em memórias
              </p>
            </div>

            {/* Timeline Desktop */}
            <div className="hidden lg:block">
              <div className="relative">
                {/* Linha conectora */}
                <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-pink-300 via-orange-300 to-pink-300 rounded-full transform -translate-y-1/2"></div>
                
                {/* Anos */}
                <div className="flex justify-between items-center relative z-10">
                  {timelineData.map((item, index) => (
                    <div key={item.year} className="text-center group">
                      {/* Círculo do ano */}
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold text-lg mb-6 mx-auto shadow-lg transform transition-all duration-300 group-hover:scale-110">
                        {item.year.slice(-2)}
                      </div>
                      
                      {/* Foto */}
                      <div className="relative mb-4 transform transition-all duration-300 group-hover:scale-105">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-48 h-32 object-cover rounded-xl shadow-xl border-4 border-white"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl"></div>
                        
                        {/* Coração flutuante no hover */}
                        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span className="text-white text-xl animate-float">💖</span>
                        </div>
                      </div>
                      
                      {/* Título */}
                      <h3 className="font-dancing text-lg text-romantic-text mb-2 max-w-48">
                        {item.title}
                      </h3>
                      
                      {/* Descrição no hover */}
                      <p className="text-sm text-romantic-text/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Timeline Mobile */}
            <div className="lg:hidden space-y-8">
              {timelineData.map((item, index) => (
                <div key={item.year} className="flex items-center space-x-4 group">
                  {/* Círculo do ano */}
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 shadow-lg">
                    {item.year.slice(-2)}
                  </div>
                  
                  {/* Conteúdo */}
                  <div className="flex-1">
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-romantic-gold/20">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-40 object-cover rounded-lg mb-3"
                      />
                      <h3 className="font-dancing text-lg text-romantic-text mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-romantic-text/70">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Encerramento inspirador */}
            <div className="text-center mt-12">
              <p className="text-2xl md:text-3xl font-great-vibes text-romantic-accent bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                E o melhor capítulo ainda está por vir...
              </p>
            </div>
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

      {/* Botão de voltar ao quiz - canto inferior direito - CORRIGIDO */}
      <button
        onClick={handleBackToQuiz}
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 bg-white/90 hover:bg-white border-2 border-romantic-accent text-romantic-accent backdrop-blur-sm shadow-lg transition-all duration-300 hover:scale-105 rounded-full p-3 md:px-4 md:py-2 md:rounded-lg flex items-center gap-2 z-50"
      >
        <RotateCcw size={16} />
        <span className="hidden sm:inline font-poppins text-sm">Voltar ao Quiz</span>
      </button>
    </div>
  );
};

export default RomanticLanding;
