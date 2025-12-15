import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/contexts/AuthContext";

export type ActivityType = "word" | "doc" | "quiz" | "system";

export interface Activity {
  id: number;
  type: ActivityType;
  description: string;
  created_at: string;
}

export const useActivityLog = () => {
  const [activities, setActivities] = useState<Activity[]>([]);
  const { user } = useAuth();

  // 1. Fetch Log dari Supabase (Limit 20 terakhir)
  useEffect(() => {
    if (!user) {
        setActivities([]);
        return;
    }

    const fetchLogs = async () => {
      const { data, error } = await supabase
        .from("activity_logs")
        .select("*")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false })
        .limit(20);

      if (!error && data) {
        setActivities(data as Activity[]);
      }
    };

    fetchLogs();
  }, [user]);

  // 2. Fungsi Tambah Log
  const logActivity = async (type: ActivityType, description: string) => {
    if (!user) return;

    const newLog = {
        user_id: user.id,
        type,
        description
    };

    // Simpan ke DB
    const { data } = await supabase.from("activity_logs").insert([newLog]).select();

    // Update UI
    if (data) {
        setActivities((prev) => [data[0] as Activity, ...prev].slice(0, 20));
    }
  };

  // Helper Waktu (Supabase pakai format ISO string)
  const formatTimeAgo = (isoString: string) => {
    const date = new Date(isoString);
    const now = new Date();
    const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    if (seconds < 60) return "Baru saja";
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes} menit lalu`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours} jam lalu`;
    const days = Math.floor(hours / 24);
    return `${days} hari lalu`;
  };

  return { activities, logActivity, formatTimeAgo };
};