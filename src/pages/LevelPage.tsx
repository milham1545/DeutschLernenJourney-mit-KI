import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { levels } from "@/data/lessons";
import { loadProgress } from "@/utils/progress";
import LessonCard from "@/components/LessonCard";
import { Button } from "@/components/ui/button";

const LevelPage = () => {
  const { levelId } = useParams<{ levelId: string }>();
  const [progressData, setProgressData] = useState<Record<string, string>>({});
  const [refreshKey, setRefreshKey] = useState(0);

  const level = levels.find((l) => l.id === levelId);
  const currentIndex = levels.findIndex((l) => l.id === levelId);
  const prevLevel = currentIndex > 0 ? levels[currentIndex - 1] : null;
  const nextLevel = currentIndex < levels.length - 1 ? levels[currentIndex + 1] : null;

  useEffect(() => {
    if (levelId) {
      setProgressData(loadProgress(levelId));
    }
  }, [levelId, refreshKey]);

  const handleProgressUpdate = () => {
    setRefreshKey((prev) => prev + 1);
  };

  if (!level) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center border-4 border-foreground p-8">
          <h1 className="text-4xl font-bold mb-4">Level tidak ditemukan</h1>
          <Link to="/">
            <Button>Kembali ke Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const completedCount = level.subSections.filter(
    (sub) => progressData[sub.id] === "done"
  ).length;

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="border-b-4 border-foreground bg-secondary">
        <div className="container mx-auto px-4 py-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6"
          >
            <ArrowLeft size={18} />
            Kembali ke Home
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-6xl font-bold bg-foreground text-background px-4 py-2">
                  {level.id}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{level.title}</h1>
              <p className="text-lg text-muted-foreground">{level.description}</p>
            </div>
            
            <div className="border-4 border-foreground bg-card p-6 text-center min-w-[200px]">
              <p className="text-sm text-muted-foreground mb-2">Progress</p>
              <p className="text-4xl font-bold">
                {completedCount}/{level.subSections.length}
              </p>
              <div className="mt-3 h-2 bg-accent border border-foreground">
                <div
                  className="h-full bg-foreground transition-all"
                  style={{
                    width: `${(completedCount / level.subSections.length) * 100}%`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-4 py-8">
        <div className="space-y-4">
          {level.subSections.map((subSection) => (
            <LessonCard
              key={subSection.id}
              levelId={level.id}
              subSection={subSection}
              onProgressUpdate={handleProgressUpdate}
            />
          ))}
        </div>
      </section>

      {/* Navigation */}
      <section className="border-t-4 border-foreground bg-secondary">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            {prevLevel ? (
              <Link to={`/level/${prevLevel.id}`}>
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  <ArrowLeft size={18} className="mr-2" />
                  {prevLevel.id} - {prevLevel.title}
                </Button>
              </Link>
            ) : (
              <div />
            )}
            {nextLevel && (
              <Link to={`/level/${nextLevel.id}`}>
                <Button size="lg" className="w-full sm:w-auto">
                  {nextLevel.id} - {nextLevel.title}
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LevelPage;