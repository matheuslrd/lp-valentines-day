
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { HelpCircle } from 'lucide-react';

const Quiz = () => {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    isGirlfriend: '',
    age: '',
    dogName: '',
    favoriteGame: '',
    startDate: ''
  });
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [feedbackType, setFeedbackType] = useState<'correct' | 'incorrect'>('correct');
  const [shakeInput, setShakeInput] = useState(false);
  const [showInterrogation, setShowInterrogation] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const navigate = useNavigate();

  const totalSteps = 5;
  const progress = (step / totalSteps) * 100;

  const handleInputChange = (field: string, value: string) => {
    setAnswers(prev => ({ ...prev, [field]: value }));
    setShowFeedback(false);
    setShakeInput(false);
    setShowInterrogation(false);
  };

  const validateAnswer = (step: number, answer: string) => {
    switch(step) {
      case 1:
        return answer === 'option1'; // "Claro que sou a namorada número 1!"
      case 2:
        return answer === '24';
      case 3:
        return answer.toLowerCase() === 'maya';
      case 4:
        return answer.toLowerCase().includes('witcher') || answer.toLowerCase().includes('the witcher 3');
      case 5:
        return true; // Sempre prossegue na pergunta da data
      default:
        return false;
    }
  };

  const getFeedbackMessage = (step: number, isCorrect: boolean) => {
    switch(step) {
      case 1:
        return isCorrect 
          ? "Ótimo... mas ainda não confio totalmente em você!"
          : "É mesmo? Estou com sérias desconfianças...";
      case 2:
        return isCorrect
          ? "Uau, você realmente presta atenção no Matheus!"
          : "Ops... acho que você não anda prestando atenção, hein?";
      case 3:
        return isCorrect
          ? "Isso mesmo, a Maya fica feliz em te ver quando chega!"
          : "Hmm... será que você confundiu com outro cachorro?";
      case 4:
        return isCorrect
          ? "Perfeito! Geralt agradece pela menção."
          : "Esse não... achei que você fosse fã de verdade!";
      case 5:
        return "Mentirosa! Você sabe muito bem que isso não é verdade.";
      default:
        return "";
    }
  };

  const handleNext = () => {
    const currentAnswer = getCurrentAnswer();
    const isCorrect = validateAnswer(step, currentAnswer);
    
    setFeedbackType(isCorrect ? 'correct' : 'incorrect');
    setFeedbackMessage(getFeedbackMessage(step, isCorrect));
    setShowFeedback(true);

    if (!isCorrect && step !== 5) {
      setShakeInput(true);
      if (step === 3) {
        setShowInterrogation(true);
      }
      return;
    }

    // Se chegou na última pergunta
    if (step === 5) {
      // Mostrar feedback imediatamente sem countdown
      setTimeout(() => {
        setShowFeedback(false);
        setStep(step + 1); // Vai para step 6 que mostra o botão continuar
      }, 2500);
      return;
    }

    // Avançar para próxima pergunta após delay
    setTimeout(() => {
      setShowFeedback(false);
      setStep(step + 1);
    }, 2000);
  };

  const handleContinueToRomantic = () => {
    navigate('/romantic');
  };

  const getCurrentAnswer = () => {
    switch(step) {
      case 1: return answers.isGirlfriend;
      case 2: return answers.age;
      case 3: return answers.dogName;
      case 4: return answers.favoriteGame;
      case 5: return answers.startDate;
      default: return '';
    }
  };

  const renderStep = () => {
    switch(step) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-lg md:text-2xl font-poppins font-medium text-quiz-text text-center animate-fade-in">
              Oi, olá… Antes de mais nada: você é mesmo a namorada oficial do Matheus ou caiu aqui por acaso tentando hackear o site?
            </h2>
            <div className="space-y-3">
              {[
                { value: 'option1', text: 'Claro que sou a namorada número 1!' },
                { value: 'option2', text: 'Só vim ver qual é a graça.' },
                { value: 'option3', text: 'Namorada? Eu? Socorro…' }
              ].map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleInputChange('isGirlfriend', option.value)}
                  className={`w-full p-3 md:p-4 text-left rounded-lg border transition-all duration-200 font-roboto-mono text-sm md:text-base ${
                    answers.isGirlfriend === option.value
                      ? 'bg-quiz-accent border-quiz-accent text-white'
                      : 'bg-quiz-card border-quiz-border text-quiz-text hover:border-quiz-accent'
                  } ${shakeInput && answers.isGirlfriend === option.value ? 'animate-shake' : ''}`}
                >
                  {option.text}
                </button>
              ))}
            </div>
          </div>
        );
      
      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-lg md:text-2xl font-poppins font-medium text-quiz-text text-center animate-fade-in">
              Quantos anos o Matheus tem?
            </h2>
            <div className="relative">
              <Input
                type="number"
                value={answers.age}
                onChange={(e) => handleInputChange('age', e.target.value)}
                placeholder="Digite a idade..."
                className={`bg-quiz-card border-quiz-border text-quiz-text placeholder:text-gray-500 font-roboto-mono text-sm md:text-base ${
                  shakeInput ? 'animate-shake' : ''
                }`}
              />
            </div>
          </div>
        );
      
      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-lg md:text-2xl font-poppins font-medium text-quiz-text text-center animate-fade-in">
              Como se chama o cachorro do Matheus?
            </h2>
            <div className="relative">
              <Input
                value={answers.dogName}
                onChange={(e) => handleInputChange('dogName', e.target.value)}
                placeholder="Digite o nome do cachorro..."
                className={`bg-quiz-card border-quiz-border text-quiz-text placeholder:text-gray-500 font-roboto-mono text-sm md:text-base ${
                  shakeInput ? 'animate-shake' : ''
                }`}
              />
              {showInterrogation && (
                <HelpCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 text-yellow-400 animate-pulse" size={20} />
              )}
            </div>
          </div>
        );
      
      case 4:
        return (
          <div className="space-y-6">
            <h2 className="text-lg md:text-2xl font-poppins font-medium text-quiz-text text-center animate-fade-in">
              Qual é o jogo de videogame favorito do Matheus?
            </h2>
            <Input
              value={answers.favoriteGame}
              onChange={(e) => handleInputChange('favoriteGame', e.target.value)}
              placeholder="Digite o nome do jogo..."
              className={`bg-quiz-card border-quiz-border text-quiz-text placeholder:text-gray-500 font-roboto-mono text-sm md:text-base ${
                shakeInput ? 'animate-shake' : ''
              }`}
            />
          </div>
        );
      
      case 5:
        return (
          <div className="space-y-6">
            <h2 className="text-lg md:text-2xl font-poppins font-medium text-quiz-text text-center animate-fade-in">
              Quando vocês começaram a namorar?
            </h2>
            <Input
              type="date"
              value={answers.startDate}
              onChange={(e) => handleInputChange('startDate', e.target.value)}
              className="bg-quiz-card border-quiz-border text-quiz-text font-roboto-mono text-sm md:text-base"
            />
          </div>
        );

      case 6:
        return (
          <div className="text-center space-y-6">
            <h2 className="text-lg md:text-2xl font-poppins font-medium text-quiz-text animate-fade-in">
              Agora que terminamos essa pequena investigação...
            </h2>
            <p className="text-gray-400 font-roboto-mono text-sm md:text-base">
              Está na hora de revelar a verdadeira surpresa!
            </p>
            <Button
              onClick={handleContinueToRomantic}
              className="w-full bg-quiz-accent hover:bg-indigo-600 text-white font-poppins"
            >
              Continuar para a surpresa
            </Button>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-quiz-bg flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Card className="bg-quiz-card border-quiz-border p-6 md:p-8 shadow-2xl">
          <div className="space-y-6 md:space-y-8">
            {/* Header com progresso */}
            <div className="text-center space-y-4">
              <h1 className="text-2xl md:text-3xl font-bold text-quiz-text font-poppins mb-2">
                Verificação 🔍
              </h1>
              {step <= 5 && (
                <div className="space-y-2">
                  <p className="text-gray-400 font-roboto-mono text-sm">
                    Etapa {step} de {totalSteps}
                  </p>
                  <Progress 
                    value={progress} 
                    className="w-full h-2 bg-gray-700"
                  />
                </div>
              )}
            </div>
            
            {renderStep()}
            
            {showFeedback && (
              <div className={`text-center animate-fade-in font-roboto-mono text-sm md:text-base ${
                feedbackType === 'correct' ? 'text-green-400' : 'text-red-400'
              }`}>
                {feedbackMessage}
              </div>
            )}
            
            {!showFeedback && step <= 5 && (
              <Button
                onClick={handleNext}
                disabled={!getCurrentAnswer()}
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
