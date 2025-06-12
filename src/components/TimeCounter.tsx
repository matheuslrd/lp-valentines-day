
import React, { useState, useEffect } from 'react';

interface TimeCounterProps {
  startDate: string;
}

interface TimeData {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const TimeCounter: React.FC<TimeCounterProps> = ({ startDate }) => {
  const [timeData, setTimeData] = useState<TimeData>({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTime = () => {
      const start = new Date(startDate);
      const now = new Date();
      
      // Calcular a diferença
      let years = now.getFullYear() - start.getFullYear();
      let months = now.getMonth() - start.getMonth();
      let days = now.getDate() - start.getDate();
      let hours = now.getHours() - start.getHours();
      let minutes = now.getMinutes() - start.getMinutes();
      let seconds = now.getSeconds() - start.getSeconds();

      // Ajustar valores negativos
      if (seconds < 0) {
        seconds += 60;
        minutes--;
      }
      if (minutes < 0) {
        minutes += 60;
        hours--;
      }
      if (hours < 0) {
        hours += 24;
        days--;
      }
      if (days < 0) {
        const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += lastMonth.getDate();
        months--;
      }
      if (months < 0) {
        months += 12;
        years--;
      }

      setTimeData({ years, months, days, hours, minutes, seconds });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);

    return () => clearInterval(interval);
  }, [startDate]);

  const timeUnits = [
    { value: timeData.years, label: timeData.years === 1 ? 'ano' : 'anos', color: 'text-pink-600' },
    { value: timeData.months, label: timeData.months === 1 ? 'mês' : 'meses', color: 'text-purple-600' },
    { value: timeData.days, label: timeData.days === 1 ? 'dia' : 'dias', color: 'text-orange-600' },
    { value: timeData.hours, label: timeData.hours === 1 ? 'hora' : 'horas', color: 'text-red-600' },
    { value: timeData.minutes, label: timeData.minutes === 1 ? 'minuto' : 'minutos', color: 'text-blue-600' },
    { value: timeData.seconds, label: timeData.seconds === 1 ? 'segundo' : 'segundos', color: 'text-green-600' }
  ];

  return (
    <div className="text-center space-y-6">
      <h3 className="text-3xl font-dancing text-romantic-accent mb-6">
        Estamos juntos há...
      </h3>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {timeUnits.map((unit, index) => (
          <div key={index} className="text-center">
            <div className={`text-4xl md:text-5xl font-bold ${unit.color} font-poppins animate-fade-in`}>
              {unit.value}
            </div>
            <div className="text-sm font-dancing text-romantic-text mt-1">
              {unit.label}
            </div>
          </div>
        ))}
      </div>
      
      <div className="pt-4">
        <p className="text-lg font-dancing text-romantic-text">
          E cada segundo fica ainda mais especial! ✨
        </p>
      </div>
    </div>
  );
};

export default TimeCounter;
