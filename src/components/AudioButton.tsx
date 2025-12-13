import { Volume2 } from "lucide-react";
import { useState } from "react";

interface AudioButtonProps {
  text: string;
  className?: string;
}

const AudioButton = ({ text, className }: AudioButtonProps) => {
  const [isSpeaking, setIsSpeaking] = useState(false);

  const playAudio = (e: React.MouseEvent) => {
    e.stopPropagation(); 
    
    if (!window.speechSynthesis) {
      alert("Browser kamu tidak mendukung fitur suara :(");
      return;
    }

    window.speechSynthesis.cancel();

    // --- LOGIKA PEMBERSIH TEKS (DIPERBAIKI) ---
    let cleanText = text;

    // 1. Hapus Markdown (**bold**, *italic*)
    cleanText = cleanText.replace(/[*_#\[\]]/g, "");

    // 2. Hapus teks dalam kurung (...) beserta isinya
    // Contoh: "Schön (Syoen)" -> "Schön"
    // Contoh: "Ä (ä)" -> "Ä"
    cleanText = cleanText.replace(/\s*\(.*?\)\s*/g, "");

    // 3. Hapus tanda kutip atau simbol aneh lain yang tersisa
    cleanText = cleanText.replace(/['"]/g, "");

    // 4. Trim spasi berlebih
    cleanText = cleanText.trim();

    // PENTING: Jika setelah dibersihkan teksnya kosong (misal cuma simbol), jangan dibaca
    if (!cleanText) return;

    // --- KONFIGURASI SUARA ---
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = "de-DE"; // Paksa bahasa Jerman
    
    // Tweak kecepatan biar satu huruf gak kedengeran aneh
    // Kalau teks pendek (1-2 huruf), speed normal (1.0) biar gak 'ngeret'
    // Kalau teks panjang, agak lambat (0.8) biar jelas
    utterance.rate = cleanText.length <= 3 ? 1.0 : 0.8; 
    
    utterance.pitch = 1;

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
  };

  return (
    <button
      onClick={playAudio}
      className={`inline-flex items-center justify-center p-1.5 rounded-full transition-all hover:scale-110 active:scale-95 shrink-0 ${
        isSpeaking 
          ? "bg-green-100 text-green-600 animate-pulse" 
          : "bg-blue-50 text-blue-600 hover:bg-blue-100"
      } ${className}`}
      title="Dengar Pengucapan"
    >
      <Volume2 size={16} className={isSpeaking ? "fill-current" : ""} />
    </button>
  );
};

export default AudioButton;