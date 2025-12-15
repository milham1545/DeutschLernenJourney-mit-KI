import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/lib/supabase"; // Import Supabase buat cek database langsung
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { 
  Loader2, UserPlus, Eye, EyeOff, 
  Check, X as XIcon, CheckCircle2, AlertCircle // Icon Indikator
} from "lucide-react";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState(""); 
  
  // STATE VALIDASI USERNAME
  const [usernameStatus, setUsernameStatus] = useState<"idle" | "checking" | "available" | "taken">("idle");
  
  const [loading, setLoading] = useState(false);
  
  const { signUp } = useAuth();
  const navigate = useNavigate();

  // --- EFEK CEK USERNAME (DEBOUNCE) ---
  useEffect(() => {
    // 1. Reset kalau kosong
    if (!username) {
        setUsernameStatus("idle");
        return;
    }

    // 2. Set status checking
    setUsernameStatus("checking");

    // 3. Tunggu 500ms (biar gak spam database pas ngetik cepet)
    const timeoutId = setTimeout(async () => {
        const { data } = await supabase
            .from("profiles")
            .select("username")
            .eq("username", username)
            .single();

        if (data) {
            setUsernameStatus("taken"); // Sudah ada yang punya
        } else {
            setUsernameStatus("available"); // Aman
        }
    }, 500);

    // Cleanup timer kalau user ngetik lagi sebelum 500ms
    return () => clearTimeout(timeoutId);
  }, [username]);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Cegah submit kalau username masih checking atau taken
    if (usernameStatus === "taken" || usernameStatus === "checking") return;

    setLoading(true);
    
    const { error } = await signUp(email, password, username, fullName);
    
    if (!error) {
      navigate("/login"); 
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <Card className="w-full max-w-md border-4 border-foreground shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-black uppercase">Buat Akun Baru</CardTitle>
          <p className="text-slate-500">Mulai perjalanan ke Jerman hari ini.</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleRegister} className="space-y-4">
            
            {/* Input Nama Lengkap */}
            <div className="space-y-2">
              <Label htmlFor="fullname" className="font-bold">Nama Lengkap</Label>
              <Input 
                id="fullname" 
                type="text" 
                placeholder="Masukkan nama lengkap Anda" 
                required 
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="font-bold border-2 border-slate-300"
              />
            </div>

            {/* Input Username (DENGAN LIVE CHECK) */}
            <div className="space-y-2">
              <Label htmlFor="username" className="font-bold">Username</Label>
              <div className="relative">
                <Input 
                  id="username" 
                  type="text" 
                  placeholder="Masukkan username Anda" 
                  required 
                  value={username}
                  onChange={(e) => setUsername(e.target.value.toLowerCase().replace(/\s/g, ''))} // Force lowercase & no space
                  className={`font-bold border-2 pr-10 transition-colors ${
                      usernameStatus === "available" ? "border-green-500 focus-visible:ring-green-500" :
                      usernameStatus === "taken" ? "border-red-500 focus-visible:ring-red-500" :
                      "border-slate-300"
                  }`}
                />
                
                {/* Indikator Icon di dalam Input */}
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                    {usernameStatus === "checking" && <Loader2 className="w-4 h-4 animate-spin text-slate-400"/>}
                    {usernameStatus === "available" && <Check className="w-4 h-4 text-green-600"/>}
                    {usernameStatus === "taken" && <XIcon className="w-4 h-4 text-red-600"/>}
                </div>
              </div>

              {/* Teks Validasi di Bawah Input */}
              {usernameStatus === "available" && (
                 <p className="text-xs font-bold text-green-600 flex items-center gap-1 animate-in slide-in-from-top-1">
                    <CheckCircle2 className="w-3 h-3"/> Username tersedia!
                 </p>
              )}
              {usernameStatus === "taken" && (
                 <p className="text-xs font-bold text-red-600 flex items-center gap-1 animate-in slide-in-from-top-1">
                    <AlertCircle className="w-3 h-3"/> Username sudah dipakai orang lain.
                 </p>
              )}
            </div>

            {/* Input Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="font-bold">Email</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="nama@email.com" 
                required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="font-bold border-2 border-slate-300"
              />
            </div>
            
            {/* Input Password */}
            <div className="space-y-2">
              <Label htmlFor="password" className="font-bold">Password</Label>
              <div className="relative">
                <Input 
                  id="password" 
                  type={showPassword ? "text" : "password"} 
                  placeholder="Minimal 6 karakter"
                  required 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="font-bold border-2 border-slate-300 pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-black transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <Button 
                type="submit" 
                className="w-full font-bold text-lg h-12 bg-green-600 hover:bg-green-700 text-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-y-[4px] transition-all disabled:opacity-50 disabled:cursor-not-allowed" 
                disabled={loading || usernameStatus === "taken" || usernameStatus === "checking"} // Tombol mati kalau username gak valid
            >
              {loading ? <Loader2 className="animate-spin mr-2" /> : <UserPlus className="mr-2 h-5 w-5" />}
              Daftar Sekarang
            </Button>
          </form>
        </CardContent>
        <CardFooter className="justify-center border-t pt-4">
          <p className="text-sm text-slate-600 font-medium">
            Sudah punya akun? <Link to="/login" className="text-blue-600 font-black hover:underline">Login disini</Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default RegisterPage;