import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Loader2, Mail, ArrowLeft } from "lucide-react";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  
  const { resetPassword } = useAuth();

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await resetPassword(email);
    if (!error) setSent(true);
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <Card className="w-full max-w-md border-4 border-foreground shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <CardHeader className="text-center pb-2">
          <CardTitle className="text-2xl font-black uppercase">Reset Password</CardTitle>
          <p className="text-slate-500 text-sm">Masukkan emailmu untuk mendapatkan link reset.</p>
        </CardHeader>
        <CardContent>
          {!sent ? (
            <form onSubmit={handleReset} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="font-bold">Email Terdaftar</Label>
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
              <Button type="submit" className="w-full font-bold h-12 bg-blue-600 hover:bg-blue-700 text-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-y-[4px] transition-all" disabled={loading}>
                {loading ? <Loader2 className="animate-spin mr-2"/> : <Mail className="mr-2 h-5 w-5"/>}
                Kirim Link Reset
              </Button>
            </form>
          ) : (
            <div className="text-center space-y-4 py-4 animate-in fade-in zoom-in">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto border-2 border-green-200">
                    <Mail className="w-8 h-8" />
                </div>
                <div>
                    <h3 className="font-black text-lg text-slate-800">Email Terkirim!</h3>
                    <p className="text-sm text-slate-500 font-medium">Cek inbox (atau spam) emailmu dan klik link untuk membuat password baru.</p>
                </div>
                <Button asChild variant="outline" className="w-full font-bold border-2">
                    <Link to="/login">Kembali ke Login</Link>
                </Button>
            </div>
          )}
        </CardContent>
        {!sent && (
            <CardFooter className="justify-center border-t pt-4">
            <Link to="/login" className="text-sm font-bold text-slate-500 hover:text-black flex items-center gap-1">
                <ArrowLeft className="w-4 h-4"/> Kembali ke Login
            </Link>
            </CardFooter>
        )}
      </Card>
    </div>
  );
};

export default ForgotPasswordPage;