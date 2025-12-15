import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/contexts/AuthContext";

export const useProgramProgress = () => {
  const [checkedIds, setCheckedIds] = useState<string[]>([]);
  const { user } = useAuth();

  // 1. Fetch Checklist dari Supabase
  useEffect(() => {
    if (!user) {
        setCheckedIds([]);
        return;
    }

    const fetchProgress = async () => {
      const { data, error } = await supabase
        .from("user_progress")
        .select("requirement_id")
        .eq("user_id", user.id);

      if (!error && data) {
        // Map data dari object {requirement_id: 'xyz'} jadi array ['xyz']
        setCheckedIds(data.map((item) => item.requirement_id));
      }
    };

    fetchProgress();
  }, [user]);

  // 2. Toggle Checklist (Insert/Delete)
  const toggleItem = async (reqId: string) => {
    if (!user) return;

    const exists = checkedIds.includes(reqId);

    // Update UI Optimistic (Langsung ubah biar gak nunggu loading)
    setCheckedIds((prev) => 
      exists ? prev.filter((id) => id !== reqId) : [...prev, reqId]
    );

    if (exists) {
      // Kalau sudah ada -> Hapus (Uncheck)
      await supabase
        .from("user_progress")
        .delete()
        .eq("user_id", user.id)
        .eq("requirement_id", reqId);
    } else {
      // Kalau belum ada -> Simpan (Check)
      await supabase
        .from("user_progress")
        .insert([{ user_id: user.id, requirement_id: reqId }]);
    }
  };

  const isChecked = (reqId: string) => checkedIds.includes(reqId);

  const getProgress = (reqIds: string[]) => {
    if (reqIds.length === 0) return 0;
    const completed = reqIds.filter((id) => checkedIds.includes(id)).length;
    return Math.round((completed / reqIds.length) * 100);
  };

  return { toggleItem, isChecked, getProgress };
};