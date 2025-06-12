
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';

const Quiz = () => {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    isGirlfriend: '',
    name: '',
    startDate: ''
  });
  const [showMessage, setShowMessage] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (field: string, value: string) => {
    setAnswers(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
      if (step < 3) {
        setStep(step + 1);
      } else {
        // Última pergunta - revelar a pegadinha
        setTimeout(() => {
          navigate('/romantic');
        }, 3000);
      }
    }, 2000);
  };

  const renderStep = () => {
    switch(step) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-poppins font-medium text-quiz-text text-center animate-fade-in">
              Você é a namorada atual do Matheus?
            </h2>
            <Input
              value={answers.isGirlfriend}
              onChange={(e) => handleInputChange('isGirlfriend', e.target.value)}
              placeholder="Digite sua resposta..."
              className="bg-quiz-card border-quiz-border text-quiz-text placeholder:text-gray-500 font-roboto-mono"
            />
            {showMessage && (
              <p className="text-indigo-400 text-center animate-shake font-roboto-mono">
                Hmm... estranho...
              </p>
            )}
          </div>
        );
      
      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-poppins font-medium text-quiz-text text-center animate-fade-in">
              Qual o seu nome?
            </h2>
            <Input
              value={answers.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              placeholder="Digite seu nome..."
              className="bg-quiz-card border-quiz-border text-quiz-text placeholder:text-gray-500 font-roboto-mono"
            />
            {showMessage && (
              <p className="text-yellow-400 text-center animate-shake font-roboto-mono">
                Tem algo errado aqui...
              </p>
            )}
          </div>
        );
      
      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-poppins font-medium text-quiz-text text-center animate-fade-in">
              Quando vocês começaram a namorar?
            </h2>
            <Input
              type="date"
              value={answers.startDate}
              onChange={(e) => handleInputChange('startDate', e.target.value)}
              className="bg-quiz-card border-quiz-border text-quiz-text font-roboto-mono"
            />
            {showMessage && (
              <div className="text-center space-y-4 animate-fade-in">
                <p className="text-red-400 font-roboto-mono text-lg animate-shake">
                  Você é mentirosa! 😂
                </p>
                <p className="text-quiz-text font-poppins">
                  O Matheus terminou com a última no ano passado...
                </p>
                <p className="text-indigo-400 font-poppins text-sm">
                  Aguarde, preparando uma surpresa... ❤️
                </p>
              </div>
            )}
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-quiz-bg flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Card className="bg-quiz-card border-quiz-border p-8 shadow-2xl">
          <div className="space-y-8">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-quiz-text font-poppins mb-2">
                Verificação 🔍
              </h1>
              <p className="text-gray-400 font-roboto-mono text-sm">
                Preciso confirmar algumas informações...
              </p>
            </div>
            
            {renderStep()}
            
            {!showMessage && (
              <Button
                onClick={handleNext}
                disabled={!answers[step === 1 ? 'isGirlfriend' : step === 2 ? 'name' : 'startDate']}
                className="w-full bg-quiz-accent hover:bg-indigo-600 text-white font-poppins"
              >
                Continuar
              </Button>
            )}
          </div>
        </Card>
      </div>
      
      {/* Efeito de partículas sutis */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-indigo-500 rounded-full opacity-30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Quiz;
