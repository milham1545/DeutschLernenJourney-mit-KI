import { useState } from "react";
import { RotateCw } from "lucide-react";
import { cn } from "@/lib/utils";
import { Vocabulary } from "@/data/lessons";

interface FlashCardProps {
  vocabulary: Vocabulary;
  index: number;
  total: number;
}

const FlashCard = ({ vocabulary, index, total }: FlashCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="w-full max-w-lg mx-auto">
      {/* Card Counter */}
      <div className="text-center mb-4">
        <span className="font-mono text-lg bg-foreground text-background px-4 py-2">
          {index + 1} / {total}
        </span>
      </div>

      {/* Flashcard */}
      <div
        onClick={() => setIsFlipped(!isFlipped)}
        className="relative cursor-pointer perspective-1000"
        style={{ perspective: "1000px" }}
      >
        <div
          className={cn(
            "relative w-full min-h-[300px] transition-all duration-500 preserve-3d",
            isFlipped && "rotate-y-180"
          )}
          style={{
            transformStyle: "preserve-3d",
            transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          {/* Front */}
          <div
            className="absolute inset-0 w-full h-full backface-hidden border-4 border-foreground bg-card p-8 flex flex-col items-center justify-center"
            style={{ backfaceVisibility: "hidden" }}
          >
            <div className="absolute top-4 right-4">
              <span className="text-xs font-mono bg-accent px-2 py-1 border border-foreground">
                DEUTSCH
              </span>
            </div>
            <p className="text-4xl font-bold text-center">{vocabulary.german}</p>
            <div className="mt-8 flex items-center gap-2 text-muted-foreground">
              <RotateCw size={16} />
              <span className="text-sm">Klik untuk membalik</span>
            </div>
          </div>

          {/* Back */}
          <div
            className="absolute inset-0 w-full h-full backface-hidden border-4 border-foreground bg-foreground text-background p-8 flex flex-col items-center justify-center"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <div className="absolute top-4 right-4">
              <span className="text-xs font-mono bg-background text-foreground px-2 py-1 border border-background">
                INDONESIA
              </span>
            </div>
            <p className="text-3xl font-bold text-center mb-6">{vocabulary.indonesian}</p>
            <div className="w-full border-t border-background/30 pt-6">
              <p className="text-sm opacity-80 mb-2">Contoh kalimat:</p>
              <p className="text-lg italic text-center">"{vocabulary.example}"</p>
            </div>
            <div className="mt-8 flex items-center gap-2 opacity-70">
              <RotateCw size={16} />
              <span className="text-sm">Klik untuk membalik</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashCard;
