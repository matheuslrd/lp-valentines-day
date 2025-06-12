
import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';

const PhotoCarousel = () => {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  
  const photos = [
    {
      url: "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=600&h=400&fit=crop",
      caption: "Nosso primeiro encontro"
    },
    {
      url: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&h=400&fit=crop",
      caption: "Viagem inesquecível"
    },
    {
      url: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=600&h=400&fit=crop",
      caption: "Momentos especiais"
    },
    {
      url: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&h=400&fit=crop",
      caption: "Nosso amor"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhoto((prev) => (prev + 1) % photos.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [photos.length]);

  return (
    <div className="max-w-2xl mx-auto">
      <Card className="bg-romantic-card border-none shadow-2xl overflow-hidden">
        <div className="relative h-96 md:h-[500px]">
          <img
            src={photos[currentPhoto].url}
            alt={photos[currentPhoto].caption}
            className="w-full h-full object-cover transition-all duration-1000 ease-in-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <p className="text-white font-dancing text-2xl text-center drop-shadow-lg">
              {photos[currentPhoto].caption}
            </p>
          </div>
        </div>
        
        <div className="flex justify-center space-x-2 py-4 bg-romantic-card">
          {photos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPhoto(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentPhoto
                  ? 'bg-romantic-accent'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </Card>
    </div>
  );
};

export default PhotoCarousel;
