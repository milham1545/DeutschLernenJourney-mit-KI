import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext"; 

// Import Halaman
import Index from "./pages/Index";
import LevelPage from "./pages/LevelPage";
import FlashcardPage from "./pages/FlashcardPage";
import ProgressPage from "./pages/ProgressPage";
import MaterialPage from "./pages/MaterialPage";
import ExamPages from "@/pages/ExamPages"; 
import PlannerPage from "./pages/PlannerPage";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import QuizPage from "./pages/QuizPages";
import DictionaryPage from "./pages/DictPages"; 

// Import Halaman Baru
import MeinWegPage from "@/pages/MeinWegPage";

// Import Halaman Auth
import LoginPage from "@/pages/LoginPage";
import RegisterPage from "@/pages/RegisterPage";
import DashboardPage from "@/pages/DashboardPage";

import ScrollToTop from "@/components/ScrollToTop";
import AdminPage from "./pages/AdminPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        
        {/* ScrollToTop ditaruh paling atas */}
        <ScrollToTop />

        <AuthProvider>
            
            {/* --- PERBAIKAN DI SINI --- 
                1. Ubah 'relative' jadi 'sticky top-0'.
                   Ini wajib supaya wrapper-nya nempel di atas layar dan gak ikut kegulung scroll.
                2. 'z-[9999]' memastikan dia selalu di atas konten lain (Admin/Flashcard).
                3. 'w-full' memastikan lebarnya penuh.
            */}
            <div className="sticky top-0 z-[9999] w-full">
               <Header />
            </div>
            
            {/* Wrapper konten di bawahnya dikasih 'relative z-0' 
               untuk memastikan tumpukan layer dimulai dari 0 lagi.
            */}
            <div className="relative z-0">
              <Routes>
                <Route path="/" element={<Index />} />
                
                {/* Rute Belajar Kosakata */}
                <Route path="/level/:levelId" element={<LevelPage />} />
                
                {/* Rute Flashcard */}
                <Route path="/flashcard" element={<FlashcardPage />} />
                
                {/* Rute Progress/Statistik */}
                <Route path="/progress" element={<ProgressPage />} />
                
                {/* Rute Study Planner */}
                <Route path="/planner" element={<PlannerPage />} />

                {/* Rute Materi */}
                <Route path="/material/:levelId" element={<MaterialPage />} />

                {/* Rute Simulasi Ujian */}
                <Route path="/simulation/:examId" element={<ExamPages />} />

                <Route path="/quiz/:levelId" element={<QuizPage />} />
                <Route path="/dictionary" element={<DictionaryPage />} />
                
                {/* Rute Mein Weg */}
                <Route path="/mein-weg" element={<MeinWegPage />} />

                {/* Rute Auth */}
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />

                <Route path="/admin" element={<AdminPage />} />

                {/* Halaman 404 */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>

        </AuthProvider>

      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;