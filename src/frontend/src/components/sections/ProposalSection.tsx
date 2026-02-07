import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import CelebrationEffect from '@/components/celebration/CelebrationEffect';

const noMessages = [
  'Think again, sweetheart! 😄',
  'Are you sure about that? 🤔',
  'Come on, you know you want to! ❤️',
  'Pretty please? 😘',
  'Last chance to reconsider! 😜',
  'My heart is waiting... 💕',
];

function ProposalSection() {
  const [showCelebration, setShowCelebration] = useState(false);
  const [celebrationKey, setCelebrationKey] = useState(0);
  const [noClickCount, setNoClickCount] = useState(0);
  const [noMessage, setNoMessage] = useState('');
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [shouldMove, setShouldMove] = useState(false);
  const playAreaRef = useRef<HTMLDivElement>(null);
  const noButtonRef = useRef<HTMLButtonElement>(null);
  const yesButtonRef = useRef<HTMLButtonElement>(null);

  const handleYesClick = () => {
    setShowCelebration(true);
    setCelebrationKey((prev) => prev + 1);
  };

  const handleNoClick = () => {
    const newCount = noClickCount + 1;
    setNoClickCount(newCount);

    // Show message (cycle through messages, stay on last one)
    const messageIndex = Math.min(newCount - 1, noMessages.length - 1);
    setNoMessage(noMessages[messageIndex]);

    // Start moving button after 3rd click
    if (newCount >= 3) {
      setShouldMove(true);
      moveNoButton();
    }
  };

  const moveNoButton = () => {
    if (!playAreaRef.current || !noButtonRef.current || !yesButtonRef.current) return;

    const playArea = playAreaRef.current;
    const noButton = noButtonRef.current;
    const yesButton = yesButtonRef.current;

    const playAreaRect = playArea.getBoundingClientRect();
    const noButtonRect = noButton.getBoundingClientRect();
    const yesButtonRect = yesButton.getBoundingClientRect();

    // Calculate safe bounds (keep button fully visible within play area)
    const maxX = playAreaRect.width - noButtonRect.width - 20;
    const maxY = playAreaRect.height - noButtonRect.height - 20;

    let attempts = 0;
    let randomX, randomY;
    let isValidPosition = false;

    // Try to find a position that doesn't overlap with Yes button
    while (!isValidPosition && attempts < 20) {
      randomX = Math.random() * Math.max(0, maxX);
      randomY = Math.random() * Math.max(0, maxY);

      // Calculate absolute position of No button in new location
      const noLeft = playAreaRect.left + randomX;
      const noTop = playAreaRect.top + randomY;
      const noRight = noLeft + noButtonRect.width;
      const noBottom = noTop + noButtonRect.height;

      // Check if it overlaps with Yes button (with padding)
      const padding = 20;
      const overlaps = !(
        noRight + padding < yesButtonRect.left ||
        noLeft - padding > yesButtonRect.right ||
        noBottom + padding < yesButtonRect.top ||
        noTop - padding > yesButtonRect.bottom
      );

      if (!overlaps) {
        isValidPosition = true;
      }
      attempts++;
    }

    // If we found a valid position, use it; otherwise use a safe fallback
    if (isValidPosition && randomX !== undefined && randomY !== undefined) {
      setNoButtonPosition({ x: randomX, y: randomY });
    } else {
      // Fallback: place it far from Yes button
      setNoButtonPosition({ x: Math.max(0, maxX), y: Math.max(0, maxY) });
    }
  };

  useEffect(() => {
    // Reset button position when shouldMove changes
    if (!shouldMove) {
      setNoButtonPosition({ x: 0, y: 0 });
    }
  }, [shouldMove]);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-3xl mx-auto text-center space-y-12">
        <div className="space-y-6 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight font-display">
            After five years of love and memories,
            <br />
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              will you be mine forever?
            </span>
          </h2>
        </div>

        {!showCelebration && (
          <div className="space-y-8">
            {/* Reserved message area */}
            <div className="min-h-[60px] flex items-center justify-center">
              {noMessage && (
                <div className="animate-fade-in">
                  <p className="text-xl sm:text-2xl font-medium text-primary">
                    {noMessage}
                  </p>
                </div>
              )}
            </div>

            {/* Buttons area */}
            <div className="relative">
              {/* Static Yes button */}
              <div className="flex justify-center mb-4">
                <Button
                  ref={yesButtonRef}
                  size="lg"
                  onClick={handleYesClick}
                  className="text-xl px-12 py-8 h-auto rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-semibold z-20 relative"
                >
                  Yes! 💕
                </Button>
              </div>

              {/* Play area for moving No button */}
              <div
                ref={playAreaRef}
                className="relative min-h-[200px] w-full flex items-center justify-center"
              >
                <Button
                  ref={noButtonRef}
                  size="lg"
                  variant="outline"
                  onClick={handleNoClick}
                  className={`text-xl px-12 py-8 h-auto rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-primary/30 hover:border-primary/50 font-semibold z-10 ${
                    shouldMove ? 'absolute' : ''
                  }`}
                  style={
                    shouldMove
                      ? {
                          left: `${noButtonPosition.x}px`,
                          top: `${noButtonPosition.y}px`,
                          transition: 'all 0.3s ease-out',
                        }
                      : {}
                  }
                >
                  No
                </Button>
              </div>
            </div>
          </div>
        )}

        {showCelebration && (
          <div className="space-y-8 animate-fade-in">
            <p className="text-3xl sm:text-4xl font-bold text-primary">
              Yay! This is the beginning of our forever 💖
            </p>
            <CelebrationEffect key={celebrationKey} />
          </div>
        )}
      </div>
    </section>
  );
}

export default ProposalSection;
