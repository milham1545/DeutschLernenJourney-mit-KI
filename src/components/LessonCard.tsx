import { useState } from "react";
import { Check, ChevronDown, ChevronUp, BookOpen, MessageSquare, PenTool, Volume2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { SubSection } from "@/data/lessons";
import { saveProgress, isSubSectionComplete } from "@/utils/progress";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface LessonCardProps {
  levelId: string;
  subSection: SubSection;
  onProgressUpdate: () => void;
}

const LessonCard = ({ levelId, subSection, onProgressUpdate }: LessonCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState<"vocabulary" | "grammar" | "dialog" | "exercise">("vocabulary");
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);
  const isComplete = isSubSectionComplete(levelId, subSection.id);
  const { toast } = useToast();

  const handleMarkComplete = () => {
    saveProgress(levelId, subSection.id);
    onProgressUpdate();
    toast({
      title: "Selamat! 🎉",
      description: `Sub-bab "${subSection.title}" telah ditandai selesai.`,
    });
  };

  const handleAnswerSelect = (questionIndex: number, answerIndex: number) => {
    setSelectedAnswers((prev) => ({ ...prev, [questionIndex]: answerIndex }));
  };

  const checkAnswers = () => {
    setShowResults(true);
  };

  const getScore = () => {
    let correct = 0;
    subSection.exercises.forEach((exercise, index) => {
      if (selectedAnswers[index] === exercise.correctAnswer) {
        correct++;
      }
    });
    return correct;
  };

  const tabs = [
    { id: "vocabulary", label: "Kosakata", icon: BookOpen },
    { id: "grammar", label: "Grammar", icon: PenTool },
    { id: "dialog", label: "Dialog", icon: MessageSquare },
    { id: "exercise", label: "Latihan", icon: Volume2 },
  ] as const;

  return (
    <div className={cn(
      "border-4 border-foreground bg-card transition-all",
      isComplete ? "shadow-md" : "shadow-sm hover:shadow-md"
    )}>
      {/* Header */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-6 py-4 flex items-center justify-between text-left"
      >
        <div className="flex items-center gap-4">
          <div className={cn(
            "w-8 h-8 border-2 border-foreground flex items-center justify-center",
            isComplete ? "bg-foreground text-background" : "bg-background"
          )}>
            {isComplete && <Check size={18} />}
          </div>
          <div>
            <h3 className="font-bold text-lg">{subSection.title}</h3>
            <p className="text-sm text-muted-foreground">
              {subSection.vocabulary.length} kata • {subSection.exercises.length} latihan
            </p>
          </div>
        </div>
        {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
      </button>

      {/* Content */}
      {isExpanded && (
        <div className="border-t-4 border-foreground">
          {/* Tabs */}
          <div className="flex border-b-2 border-foreground overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "flex-1 min-w-[120px] px-4 py-3 font-medium flex items-center justify-center gap-2 transition-colors",
                    activeTab === tab.id
                      ? "bg-foreground text-background"
                      : "bg-background hover:bg-accent"
                  )}
                >
                  <Icon size={16} />
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === "vocabulary" && (
              <div className="grid gap-3">
                {subSection.vocabulary.map((vocab, index) => (
                  <div
                    key={index}
                    className="border-2 border-foreground p-4 bg-background hover:bg-accent transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                      <span className="font-bold text-lg">{vocab.german}</span>
                      <span className="text-muted-foreground">→</span>
                      <span className="font-medium">{vocab.indonesian}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2 italic">
                      "{vocab.example}"
                    </p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "grammar" && (
              <div className="space-y-6">
                {subSection.grammar.map((gram, index) => (
                  <div key={index} className="border-2 border-foreground p-4">
                    <h4 className="font-bold text-lg mb-2">{gram.title}</h4>
                    <p className="text-muted-foreground mb-4">{gram.explanation}</p>
                    <div className="bg-accent p-4 border-2 border-foreground">
                      <p className="font-medium mb-2">Contoh:</p>
                      <ul className="space-y-1">
                        {gram.examples.map((ex, i) => (
                          <li key={i} className="text-sm">• {ex}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "dialog" && (
              <div className="space-y-6">
                {subSection.dialogs.map((dialog, index) => (
                  <div key={index} className="border-2 border-foreground p-4">
                    <h4 className="font-bold text-lg mb-4 bg-foreground text-background px-3 py-1 inline-block">
                      {dialog.title}
                    </h4>
                    <div className="space-y-3">
                      {dialog.lines.map((line, i) => (
                        <div key={i} className="border-l-4 border-foreground pl-4">
                          <p className="font-bold text-sm">{line.speaker}:</p>
                          <p className="font-medium">{line.german}</p>
                          <p className="text-sm text-muted-foreground italic">{line.indonesian}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "exercise" && (
              <div className="space-y-6">
                {subSection.exercises.map((exercise, qIndex) => (
                  <div key={qIndex} className="border-2 border-foreground p-4">
                    <p className="font-bold mb-4">
                      {qIndex + 1}. {exercise.question}
                    </p>
                    <div className="grid gap-2">
                      {exercise.options.map((option, oIndex) => {
                        const isSelected = selectedAnswers[qIndex] === oIndex;
                        const isCorrect = exercise.correctAnswer === oIndex;
                        const showCorrectness = showResults && isSelected;
                        
                        return (
                          <button
                            key={oIndex}
                            onClick={() => !showResults && handleAnswerSelect(qIndex, oIndex)}
                            disabled={showResults}
                            className={cn(
                              "text-left px-4 py-3 border-2 border-foreground transition-all",
                              isSelected && !showResults && "bg-accent",
                              showCorrectness && isCorrect && "bg-foreground text-background",
                              showCorrectness && !isCorrect && "bg-destructive text-destructive-foreground",
                              showResults && isCorrect && !isSelected && "border-dashed"
                            )}
                          >
                            <span className="font-mono mr-2">{String.fromCharCode(65 + oIndex)}.</span>
                            {option}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}

                <div className="flex flex-col sm:flex-row gap-4 items-center justify-between pt-4 border-t-2 border-foreground">
                  {!showResults ? (
                    <Button
                      onClick={checkAnswers}
                      disabled={Object.keys(selectedAnswers).length !== subSection.exercises.length}
                      className="w-full sm:w-auto"
                    >
                      Periksa Jawaban
                    </Button>
                  ) : (
                    <div className="flex items-center gap-4">
                      <span className="font-bold text-lg">
                        Skor: {getScore()}/{subSection.exercises.length}
                      </span>
                      <Button
                        variant="outline"
                        onClick={() => {
                          setSelectedAnswers({});
                          setShowResults(false);
                        }}
                      >
                        Coba Lagi
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Mark Complete Button */}
          {!isComplete && (
            <div className="border-t-2 border-foreground p-4">
              <Button
                onClick={handleMarkComplete}
                className="w-full"
                size="lg"
              >
                <Check size={18} className="mr-2" />
                Tandai Selesai
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default LessonCard;
