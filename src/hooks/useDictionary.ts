import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "@/hooks/use-toast";

export interface SavedWord {
  id: number;
  german: string;
  indo: string;
  source?: string;
  created_at?: string;
}

export const useDictionary = () => {
  const [words, setWords] = useState<SavedWord[]>([]);
  const { user } = useAuth();

  // 1. Fetch data dari Supabase saat User Login
  useEffect(() => {
    if (!user) {
        setWords([]); // Reset kalau logout
        return;
    }

    const fetchWords = async () => {
      const { data, error } = await supabase
        .from("saved_words")
        .select("*")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false });

      if (error) console.error("Error fetching words:", error);
      else setWords(data || []);
    };

    fetchWords();
  }, [user]);

  // Fungsi Simpan Kata
  const saveWord = async (german: string, indo: string, source: string = "Manual") => {
    if (!user) return toast({ title: "Error", description: "Silakan login dulu.", variant: "destructive" });

    // Cek duplikat di state lokal dulu biar cepet
    const isExist = words.some((w) => w.german.toLowerCase() === german.toLowerCase());
    if (isExist) {
      return toast({ title: "Sudah tersimpan", description: `"${german}" sudah ada.` });
    }

    const newEntry = { user_id: user.id, german, indo, source };

    // Insert ke Supabase
    const { data, error } = await supabase.from("saved_words").insert([newEntry]).select();

    if (error) {
      toast({ title: "Gagal menyimpan", description: error.message, variant: "destructive" });
    } else if (data) {
      setWords((prev) => [data[0], ...prev]); // Update UI langsung
      toast({ title: "Tersimpan!", description: `"${german}" berhasil disimpan.` });
    }
  };

  // Fungsi Hapus Kata
  const removeWord = async (id: number) => {
    // Delete di Supabase
    const { error } = await supabase.from("saved_words").delete().eq("id", id);

    if (error) {
      toast({ title: "Gagal menghapus", description: error.message, variant: "destructive" });
    } else {
      setWords((prev) => prev.filter((w) => w.id !== id)); // Update UI
      toast({ title: "Dihapus", description: "Kata dihapus dari database." });
    }
  };

  const isSaved = (german: string) => {
    return words.some((w) => w.german.toLowerCase() === german.toLowerCase());
  };

  return { words, saveWord, removeWord, isSaved };
};