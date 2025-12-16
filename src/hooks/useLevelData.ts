import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Level, SubSection } from "@/data/lessons"; // Kita masih pakai Type dari sini

export const useLevelData = (levelId: string | undefined) => {
  const [level, setLevel] = useState<Level | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!levelId) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        // 1. Ambil Info Level (Judul & Deskripsi)
        const { data: levelData, error: levelError } = await supabase
          .from("levels")
          .select("*")
          .eq("id", levelId)
          .single();

        if (levelError) throw levelError;

        // 2. Ambil Lessons beserta semua anak-anaknya (Join Tables)
        const { data: lessonsData, error: lessonsError } = await supabase
          .from("lessons")
          .select(`
            *,
            vocabularies(*),
            grammars(*),
            dialogs(*),
            exercises(*)
          `)
          .eq("level_id", levelId)
          .order("order_index", { ascending: true });

        if (lessonsError) throw lessonsError;

        // 3. Format Data (Mapping dari DB snake_case ke TypeScript camelCase)
        // Kita susun agar mirip struktur 'SubSection' di kodingan lama
        const formattedSubSections: SubSection[] = lessonsData.map((lesson: any) => ({
          id: lesson.slug, // slug database jadi id di frontend
          title: lesson.title,
          vocabulary: lesson.vocabularies.map((v: any) => ({
            german: v.german,
            indonesian: v.indonesian,
            example: v.example,
          })),
          grammar: lesson.grammars.map((g: any) => ({
            title: g.title,
            explanation: g.explanation,
            examples: g.examples,
          })),
          dialogs: lesson.dialogs.map((d: any) => ({
            title: d.title,
            lines: d.lines, // Ini sudah JSON, jadi langsung masuk
          })),
          exercises: lesson.exercises.map((e: any) => ({
            question: e.question,
            options: e.options,
            correctAnswer: e.correct_answer, // Perhatikan perubahan nama field
          })),
        }));

        // 4. Set State Level Lengkap
        setLevel({
          id: levelData.id,
          title: levelData.title,
          description: levelData.description,
          subSections: formattedSubSections,
        });

      } catch (err: any) {
        console.error("Gagal mengambil data level:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [levelId]);

  return { level, loading, error };
};