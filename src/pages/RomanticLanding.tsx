
import { RotateCcw } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Confetti from '../components/Confetti';
import TimeCounter from '../components/TimeCounter';

const RomanticLanding = () => {
  const [showConfetti, setShowConfetti] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
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
          <div className="text-center space-y-4 md:space-y-6 animate-fade-in pt-8 md:pt-12">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-great-vibes text-romantic-accent bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              Luana, meu amor!
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl font-dancing text-romantic-text">
              Uma surpresa especial para você ✨
            </p>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <TimeCounter startDate="2021-05-15" />
          </div>

          <div className="animate-fade-in space-y-8" style={{ animationDelay: '0.6s' }}>
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-great-vibes text-romantic-accent bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent mb-4">
                Nossa Jornada: Capítulos de Amor
              </h2>
              <p className="text-lg font-dancing text-romantic-text">
                Cinco anos de nós, eternizados em memórias
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              <div className="absolute left-1/2 top-0 w-1 h-full bg-gradient-to-b from-pink-300 via-orange-300 to-pink-300 rounded-full transform -translate-x-1/2 hidden md:block"></div>
              
              <div className="absolute left-8 top-0 w-0.5 h-full bg-gradient-to-b from-pink-300 via-orange-300 to-pink-300 rounded-full md:hidden"></div>

              <div className="space-y-12 md:space-y-16">
                {timelineData.map((item, index) => (
                  <div 
                    key={item.year} 
                    className={`relative animate-fade-in opacity-0 transform translate-y-8 transition-all duration-1000 ease-out ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    } flex flex-col md:flex items-center group`}
                    style={{ 
                      animationDelay: `${0.8 + index * 0.3}s`,
                      animationFillMode: 'forwards'
                    }}
                  >
                    <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-br from-orange-400 to-pink-400 rounded-full items-center justify-center text-white font-bold text-xl shadow-xl z-10 transition-all duration-300 group-hover:scale-110">
                      {item.year}
                    </div>

                    <div className="md:hidden absolute left-8 top-6 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-orange-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg z-10">
                      {item.year.slice(-2)}
                    </div>

                    <div className={`md:w-5/12 w-full ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'} ml-16 md:ml-0`}>
                      <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-romantic-gold/30 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                        <div className="relative mb-4 overflow-hidden rounded-xl group-hover:scale-105 transition-transform duration-500">
                          <img 
                            src={item.image} 
                            alt={item.title}
                            className="w-full h-48 md:h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          
                          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                            <span className="text-white text-2xl animate-pulse">💖</span>
                          </div>
                        </div>
                        
                        <h3 className="font-dancing text-xl md:text-2xl text-romantic-text mb-3 leading-relaxed">
                          {item.title}
                        </h3>
                        
                        <p className="text-romantic-text/80 font-poppins text-sm md:text-base leading-relaxed">
                          {item.description}
                        </p>

                        <div className="flex justify-center mt-4 space-x-2">
                          {['✨', '💕', '🌟'].map((emoji, i) => (
                            <span 
                              key={i}
                              className="text-lg opacity-60 animate-float"
                              style={{ animationDelay: `${i * 0.2}s` }}
                            >
                              {emoji}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="hidden md:block md:w-5/12"></div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '2.5s' }}>
              <p className="text-2xl md:text-3xl font-great-vibes text-romantic-accent bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                E o melhor capítulo ainda está por vir...
              </p>
            </div>
          </div>

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

          <div className="text-center animate-fade-in" style={{ animationDelay: '1.2s' }}>
            <p className="text-xl md:text-2xl font-great-vibes text-romantic-accent bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              Com amor, Matheus 💝
            </p>
          </div>
        </div>
      </div>

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
