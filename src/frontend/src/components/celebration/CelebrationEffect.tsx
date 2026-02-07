import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

interface Particle {
  id: number;
  x: number;
  y: number;
  rotation: number;
  delay: number;
  duration: number;
  size: number;
}

interface ConfettiParticle {
  id: number;
  x: number;
  y: number;
  rotation: number;
  delay: number;
  duration: number;
  size: number;
  color: string;
  shape: 'square' | 'circle' | 'triangle';
}

function CelebrationEffect() {
  const [hearts, setHearts] = useState<Particle[]>([]);
  const [confetti, setConfetti] = useState<ConfettiParticle[]>([]);

  useEffect(() => {
    // Generate heart particles
    const newHearts: Particle[] = [];
    for (let i = 0; i < 25; i++) {
      newHearts.push({
        id: i,
        x: Math.random() * 100,
        y: -10,
        rotation: Math.random() * 360,
        delay: Math.random() * 0.5,
        duration: 2 + Math.random() * 2,
        size: 20 + Math.random() * 20,
      });
    }
    setHearts(newHearts);

    // Generate confetti particles with warm romantic colors (no blue/purple)
    const newConfetti: ConfettiParticle[] = [];
    const colors = ['#ff6b6b', '#ff8787', '#ffa94d', '#ffd43b', '#ff922b', '#fa5252'];
    const shapes: Array<'square' | 'circle' | 'triangle'> = ['square', 'circle', 'triangle'];

    for (let i = 0; i < 40; i++) {
      newConfetti.push({
        id: i,
        x: Math.random() * 100,
        y: -10,
        rotation: Math.random() * 360,
        delay: Math.random() * 0.3,
        duration: 2.5 + Math.random() * 2,
        size: 8 + Math.random() * 12,
        color: colors[Math.floor(Math.random() * colors.length)],
        shape: shapes[Math.floor(Math.random() * shapes.length)],
      });
    }
    setConfetti(newConfetti);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {/* Hearts */}
      {hearts.map((particle) => (
        <div
          key={`heart-${particle.id}`}
          className="absolute animate-fall"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
          }}
        >
          <Heart
            className="text-primary fill-primary animate-spin-slow"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              transform: `rotate(${particle.rotation}deg)`,
            }}
          />
        </div>
      ))}

      {/* Confetti */}
      {confetti.map((particle) => (
        <div
          key={`confetti-${particle.id}`}
          className="absolute animate-confetti-fall"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
          }}
        >
          {particle.shape === 'square' && (
            <div
              className="animate-confetti-spin"
              style={{
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                backgroundColor: particle.color,
                transform: `rotate(${particle.rotation}deg)`,
              }}
            />
          )}
          {particle.shape === 'circle' && (
            <div
              className="rounded-full animate-confetti-spin"
              style={{
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                backgroundColor: particle.color,
              }}
            />
          )}
          {particle.shape === 'triangle' && (
            <div
              className="animate-confetti-spin"
              style={{
                width: 0,
                height: 0,
                borderLeft: `${particle.size / 2}px solid transparent`,
                borderRight: `${particle.size / 2}px solid transparent`,
                borderBottom: `${particle.size}px solid ${particle.color}`,
                transform: `rotate(${particle.rotation}deg)`,
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default CelebrationEffect;
