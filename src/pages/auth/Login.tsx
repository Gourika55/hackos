import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, db, googleProvider } from "@/lib/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "sonner";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function handleGoogleLogin() {
    setGoogleLoading(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      
      // Check if user exists in Firestore
      const userDoc = await getDoc(doc(db, "users", user.uid));
      
      if (!userDoc.exists()) {
        // Create new user profile if it doesn't exist
        await setDoc(doc(db, "users", user.uid), {
          uid: user.uid,
          name: user.displayName || "User",
          email: user.email,
          role: "student", // Default role
          department: null,
          createdAt: Date.now(),
        });
        toast.success("Account created successfully");
        navigate("/student"); // Default redirect for new users
      } else {
        const userData = userDoc.data();
        toast.success("Logged in successfully");
        // Redirect based on role
        switch (userData.role) {
          case "admin":
            navigate("/admin");
            break;
          case "organizer":
            navigate("/organizer");
            break;
          case "student":
            navigate("/student");
            break;
          default:
            navigate("/");
        }
      }
    } catch (error: any) {
      toast.error("Failed to login with Google: " + error.message);
    } finally {
      setGoogleLoading(false);
    }
  }

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, values.email, values.password);
      const userDoc = await getDoc(doc(db, "users", userCredential.user.uid));
      
      if (userDoc.exists()) {
        const userData = userDoc.data();
        toast.success("Logged in successfully");
        // Redirect based on role
        switch (userData.role) {
          case "admin":
            navigate("/admin");
            break;
          case "organizer":
            navigate("/organizer");
            break;
          case "student":
            navigate("/student");
            break;
          default:
            navigate("/");
        }
      } else {
        toast.error("User profile not found");
      }
    } catch (error: any) {
      toast.error("Failed to login: " + error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex items-center justify-center min-h-[80vh] w-full py-12">
      {/* Decorative Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full pointer-events-none z-0" />

      <Card className="w-full max-w-md bg-zinc-900/50 backdrop-blur-md border border-white/10 rounded-3xl shadow-2xl relative z-10 overflow-hidden">
        {/* Top Accent Line */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
        
        <CardHeader className="space-y-1 text-center pb-8 pt-10">
          <CardTitle className="text-3xl font-black uppercase tracking-tighter text-white">
            Welcome <span className="text-primary">Back</span>
          </CardTitle>
          <CardDescription className="text-gray-400 font-medium tracking-wide text-xs uppercase">
            Enter your credentials to access UniFlow
          </CardDescription>
        </CardHeader>
        <CardContent className="px-8 pb-8">
          <div className="space-y-4">
            <Button 
              type="button" 
              variant="outline" 
              className="w-full bg-white text-black hover:bg-gray-200 hover:scale-[1.02] transition-all duration-300 font-bold uppercase tracking-widest h-12 rounded-xl border-none"
              onClick={handleGoogleLogin}
              disabled={googleLoading || loading}
            >
              {googleLoading ? "Connecting..." : "Sign in with Google"}
            </Button>
            
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-white/10" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-zinc-900 px-2 text-gray-500 font-bold tracking-wider">Or continue with</span>
              </div>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs font-bold uppercase tracking-widest text-gray-500">Email Address</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="student@university.edu" 
                          {...field} 
                          className="bg-black/50 border-white/10 text-white placeholder:text-gray-600 focus:border-primary/50 focus:ring-primary/20 h-12 rounded-xl"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs font-bold uppercase tracking-widest text-gray-500">Password</FormLabel>
                      <FormControl>
                        <Input 
                          type="password" 
                          placeholder="••••••••"
                          {...field} 
                          className="bg-black/50 border-white/10 text-white placeholder:text-gray-600 focus:border-primary/50 focus:ring-primary/20 h-12 rounded-xl"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full bg-primary text-black hover:bg-white hover:scale-[1.02] transition-all duration-300 font-bold uppercase tracking-widest h-14 rounded-full mt-6" disabled={loading}>
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <span className="h-4 w-4 border-2 border-black/30 border-t-black rounded-full animate-spin"></span>
                      Processing...
                    </span>
                  ) : (
                    "Login"
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </CardContent>
        <CardFooter className="justify-center pb-8 border-t border-white/5 pt-6">
          <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
            Don't have an account? <Link to="/register" className="text-white hover:text-primary transition-colors ml-1 font-bold">Sign up</Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
