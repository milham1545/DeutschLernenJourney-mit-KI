import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Loader2, UploadCloud, Database, ShieldAlert, CheckCircle, FileJson } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AdminPage = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  
  const [stats, setStats] = useState({ levels: 0, lessons: 0, vocabs: 0 });
  const [loadingStats, setLoadingStats] = useState(false);
  
  // State untuk Import
  const [jsonInput, setJsonInput] = useState("");
  const [isUploading, setIsUploading] = useState(false);

  // 1. Fetch Statistik Database
  const fetchStats = async () => {
    setLoadingStats(true);
    const { count: levels } = await supabase.from("levels").select("*", { count: "exact", head: true });
    const { count: lessons } = await supabase.from("lessons").select("*", { count: "exact", head: true });
    const { count: vocabs } = await supabase.from("vocabularies").select("*", { count: "exact", head: true });
    
    setStats({ levels: levels || 0, lessons: lessons || 0, vocabs: vocabs || 0 });
    setLoadingStats(false);
  };

  useEffect(() => {
    fetchStats();
  }, []);

  // 2. Fungsi IMPORT JSON (The Magic Button)
  const handleImport = async () => {
    if (!jsonInput) return;
    
    try {
      setIsUploading(true);
      const data = JSON.parse(jsonInput); // Validasi JSON

      // Validasi Struktur Dasar
      if (!data.level_id || !data.title || !data.slug) {
        throw new Error("JSON harus punya 'level_id', 'title', dan 'slug'.");
      }

      // A. Insert Lesson (Bab)
      const { data: lessonData, error: lsnErr } = await supabase
        .from("lessons")
        .insert({
          level_id: data.level_id,
          slug: data.slug,
          title: data.title,
          order_index: data.order_index || 99
        })
        .select()
        .single();

      if (lsnErr) throw lsnErr;
      const lessonId = lessonData.id;

      // B. Insert Komponen (Parallel biar cepat)
      const promises = [];

      // 1. Vocab
      if (data.vocabulary?.length) {
        const payload = data.vocabulary.map((v: any) => ({
          lesson_id: lessonId, german: v.german, indonesian: v.indonesian, example: v.example
        }));
        promises.push(supabase.from("vocabularies").insert(payload));
      }

      // 2. Grammar
      if (data.grammar?.length) {
        const payload = data.grammar.map((g: any) => ({
          lesson_id: lessonId, title: g.title, explanation: g.explanation, examples: g.examples
        }));
        promises.push(supabase.from("grammars").insert(payload));
      }

      // 3. Dialog
      if (data.dialogs?.length) {
        const payload = data.dialogs.map((d: any) => ({
          lesson_id: lessonId, title: d.title, lines: d.lines
        }));
        promises.push(supabase.from("dialogs").insert(payload));
      }

      // 4. Exercises
      if (data.exercises?.length) {
        const payload = data.exercises.map((e: any) => ({
          lesson_id: lessonId, question: e.question, options: e.options, correct_answer: e.correctAnswer
        }));
        promises.push(supabase.from("exercises").insert(payload));
      }

      await Promise.all(promises);

      // Sukses!
      toast({ title: "Berhasil!", description: `Materi "${data.title}" berhasil ditambahkan.` });
      setJsonInput(""); // Clear form
      fetchStats(); // Refresh angka

    } catch (error: any) {
      console.error(error);
      toast({ 
        variant: "destructive", 
        title: "Gagal Import", 
        description: error.message || "Format JSON salah." 
      });
    } finally {
      setIsUploading(false);
    }
  };

  // Proteksi Halaman (Simple Check)
  if (!user) {
    return (
      <div className="flex h-screen items-center justify-center p-4">
        <div className="text-center">
          <ShieldAlert className="mx-auto h-12 w-12 text-red-500 mb-4" />
          <h1 className="text-2xl font-bold">Akses Ditolak</h1>
          <p>Halaman ini khusus Admin.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Header Admin */}
      <div className="bg-slate-900 text-white py-8 border-b-4 border-slate-700">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-black flex items-center gap-3">
            <ShieldAlert className="text-red-500" /> 
            Admin Dashboard
          </h1>
          <p className="text-slate-400">Halo, {user.email}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* STATISTIK DATABASE */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card className="border-l-4 border-l-blue-500">
            <CardHeader className="pb-2"><CardTitle className="text-sm text-slate-500 uppercase">Total Level</CardTitle></CardHeader>
            <CardContent><div className="text-4xl font-bold">{loadingStats ? "..." : stats.levels}</div></CardContent>
          </Card>
          <Card className="border-l-4 border-l-green-500">
            <CardHeader className="pb-2"><CardTitle className="text-sm text-slate-500 uppercase">Total Materi (Bab)</CardTitle></CardHeader>
            <CardContent><div className="text-4xl font-bold">{loadingStats ? "..." : stats.lessons}</div></CardContent>
          </Card>
          <Card className="border-l-4 border-l-purple-500">
            <CardHeader className="pb-2"><CardTitle className="text-sm text-slate-500 uppercase">Total Kosakata</CardTitle></CardHeader>
            <CardContent><div className="text-4xl font-bold">{loadingStats ? "..." : stats.vocabs}</div></CardContent>
          </Card>
        </div>

        {/* AREA KERJA UTAMA */}
        <Tabs defaultValue="import" className="space-y-6">
          <TabsList className="bg-white border-2 border-slate-200 p-1">
            <TabsTrigger value="import" className="data-[state=active]:bg-slate-900 data-[state=active]:text-white font-bold">
              <UploadCloud className="w-4 h-4 mr-2" /> Import JSON
            </TabsTrigger>
            <TabsTrigger value="database" className="data-[state=active]:bg-slate-900 data-[state=active]:text-white font-bold">
              <Database className="w-4 h-4 mr-2" /> Database Preview
            </TabsTrigger>
          </TabsList>

          {/* TAB 1: IMPORT JSON */}
          <TabsContent value="import">
            <Card className="border-2 border-slate-300 shadow-md">
              <CardHeader className="bg-slate-100 border-b-2 border-slate-200">
                <CardTitle className="flex items-center gap-2">
                  <FileJson className="text-blue-600" /> 
                  Tambah Materi via JSON
                </CardTitle>
                <p className="text-sm text-slate-500">
                  Paste kode JSON dari Gemini di sini untuk membuat Bab baru secara instan.
                </p>
              </CardHeader>
              <CardContent className="p-6">
                <Textarea 
                  placeholder='{ "title": "...", "vocabulary": [...] }' 
                  className="font-mono text-xs min-h-[300px] mb-4 bg-slate-50 border-2 border-slate-200 focus-visible:ring-0 focus-visible:border-blue-500"
                  value={jsonInput}
                  onChange={(e) => setJsonInput(e.target.value)}
                />
                <Button 
                  onClick={handleImport} 
                  disabled={isUploading || !jsonInput}
                  className="w-full h-12 text-lg font-bold bg-green-600 hover:bg-green-700"
                >
                  {isUploading ? <Loader2 className="animate-spin mr-2" /> : <CheckCircle className="mr-2" />}
                  {isUploading ? "Sedang Mengupload..." : "Upload Materi Sekarang"}
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* TAB 2: COMING SOON */}
          <TabsContent value="database">
            <div className="text-center py-20 bg-white border-2 border-dashed border-slate-300 rounded-xl">
              <Database className="w-12 h-12 mx-auto text-slate-300 mb-4" />
              <h3 className="text-xl font-bold text-slate-500">Manajemen Manual</h3>
              <p className="text-slate-400">Gunakan Supabase Dashboard untuk edit manual sementara waktu.</p>
              <Button variant="link" className="mt-2" onClick={() => window.open("https://supabase.com/dashboard", "_blank")}>
                Buka Supabase ↗
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminPage;