import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Shuffle, RotateCcw } from "lucide-react";
import { levels, getFlashcardsForLevel, Vocabulary } from "@/data/lessons";
import { saveLastCardPosition, loadLastCardPosition } from "@/utils/progress";
import FlashCard from "@/components/FlashCard";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const FlashcardPage = () => {
  const [selectedLevel, setSelectedLevel] = useState<string>("A1");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flashcards, setFlashcards] = useState<Vocabulary[]>([]);
  const [isShuffled, setIsShuffled] = useState(false);

  useEffect(() => {
    const cards = getFlashcardsForLevel(selectedLevel);
    setFlashcards(cards);
    const savedIndex = loadLastCardPosition(selectedLevel);
    setCurrentIndex(Math.min(savedIndex, cards.length - 1));
    setIsShuffled(false);
  }, [selectedLevel]);

  useEffect(() => {
    if (flashcards.length > 0) {
      saveLastCardPosition(selectedLevel, currentIndex);
    }
  }, [currentIndex, selectedLevel, flashcards.length]);

  const goToNext = useCallback(() => {
    if (currentIndex < flashcards.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  }, [currentIndex, flashcards.length]);

  const goToPrevious = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  }, [currentIndex]);

  const goToRandom = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * flashcards.length);
    setCurrentIndex(randomIndex);
  }, [flashcards.length]);

  const shuffleCards = () => {
    const shuffled = [...flashcards].sort(() => Math.random() - 0.5);
    setFlashcards(shuffled);
    setCurrentIndex(0);
    setIsShuffled(true);
  };

  const resetOrder = () => {
    const cards = getFlashcardsForLevel(selectedLevel);
    setFlashcards(cards);
    setCurrentIndex(0);
    setIsShuffled(false);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goToNext();
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "r" || e.key === "R") goToRandom();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNext, goToPrevious, goToRandom]);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="border-b-4 border-foreground bg-secondary">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-foreground text-background px-4 py-2">FLASHCARD</span>
          </h1>
          
          {/* Level Selector */}
          <div className="flex flex-wrap gap-2">
            {levels.map((level) => (
              <button
                key={level.id}
                onClick={() => setSelectedLevel(level.id)}
                className={cn(
                  "px-6 py-3 font-bold border-4 border-foreground transition-all",
                  selectedLevel === level.id
                    ? "bg-foreground text-background shadow-sm"
                    : "bg-card hover:bg-accent"
                )}
              >
                {level.id}
              </button>
            ))}
          </div>
          
          {isShuffled && (
            <div className="mt-4 inline-block px-3 py-1 bg-accent border-2 border-foreground text-sm">
              🔀 Mode acak aktif
            </div>
          )}
        </div>
      </section>

      {/* Flashcard Area */}
      <section className="container mx-auto px-4 py-12">
        {flashcards.length > 0 ? (
          <>
            <FlashCard
              key={`${selectedLevel}-${currentIndex}-${flashcards[currentIndex]?.german}`}
              vocabulary={flashcards[currentIndex]}
              index={currentIndex}
              total={flashcards.length}
            />

            {/* Controls */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="outline"
                size="lg"
                onClick={goToPrevious}
                disabled={currentIndex === 0}
                className="w-full sm:w-auto"
              >
                <ChevronLeft size={20} className="mr-2" />
                Sebelumnya
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                onClick={goToRandom}
                className="w-full sm:w-auto"
              >
                <Shuffle size={20} className="mr-2" />
                Acak
              </Button>
              
              <Button
                size="lg"
                onClick={goToNext}
                disabled={currentIndex === flashcards.length - 1}
                className="w-full sm:w-auto"
              >
                Selanjutnya
                <ChevronRight size={20} className="ml-2" />
              </Button>
            </div>

            {/* Additional Controls */}
            <div className="mt-6 flex justify-center gap-4">
              {!isShuffled ? (
                <Button variant="outline" onClick={shuffleCards}>
                  <Shuffle size={16} className="mr-2" />
                  Acak Semua Kartu
                </Button>
              ) : (
                <Button variant="outline" onClick={resetOrder}>
                  <RotateCcw size={16} className="mr-2" />
                  Reset Urutan
                </Button>
              )}
            </div>

            {/* Progress Bar */}
            <div className="mt-8 max-w-lg mx-auto">
              <div className="flex justify-between text-sm text-muted-foreground mb-2">
                <span>Kartu {currentIndex + 1}</span>
                <span>{flashcards.length} total</span>
              </div>
              <div className="h-3 bg-accent border-2 border-foreground">
                <div
                  className="h-full bg-foreground transition-all"
                  style={{
                    width: `${((currentIndex + 1) / flashcards.length) * 100}%`,
                  }}
                />
              </div>
            </div>

            {/* Keyboard Hints */}
            <div className="mt-8 text-center text-sm text-muted-foreground">
              <p className="font-mono">
                Gunakan tombol <kbd className="px-2 py-1 bg-accent border border-foreground">←</kbd>{" "}
                <kbd className="px-2 py-1 bg-accent border border-foreground">→</kbd> untuk navigasi,{" "}
                <kbd className="px-2 py-1 bg-accent border border-foreground">R</kbd> untuk acak
              </p>
            </div>
          </>
        ) : (
          <div className="text-center py-12 border-4 border-foreground">
            <p className="text-xl text-muted-foreground">Tidak ada flashcard untuk level ini.</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default FlashcardPage;
