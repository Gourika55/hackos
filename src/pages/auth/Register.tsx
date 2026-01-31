import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, db, googleProvider } from "@/lib/firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "sonner";
import { UserRole } from "@/types";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email(),
  password: z.string().min(6, "Password must be at least 6 characters"),
  role: z.enum(["student", "organizer", "admin"] as [string, ...string[]]),
  department: z.string().optional(),
});

export default function Register() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      role: "student",
      department: "",
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
      toast.error("Failed to sign up with Google: " + error.message);
    } finally {
      setGoogleLoading(false);
    }
  }

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, values.email, values.password);
      
      // Create user profile in Firestore
      await setDoc(doc(db, "users", userCredential.user.uid), {
        uid: userCredential.user.uid,
        name: values.name,
        email: values.email,
        role: values.role as UserRole,
        department: values.department || null,
        createdAt: Date.now(),
      });

      toast.success("Account created successfully");
      
      // Redirect based on role
      switch (values.role) {
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
    } catch (error: any) {
      toast.error("Failed to register: " + error.message);
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
            Join <span className="text-primary">UniFlow</span>
          </CardTitle>
          <CardDescription className="text-gray-400 font-medium tracking-wide text-xs uppercase">
            Create your unified campus identity
          </CardDescription>
        </CardHeader>
        <CardContent className="px-8 pb-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs font-bold uppercase tracking-widest text-gray-500">Full Name</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="JOHN DOE" 
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
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs font-bold uppercase tracking-widest text-gray-500">Email Address</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="STUDENT@UNIVERSITY.EDU" 
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
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="role"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs font-bold uppercase tracking-widest text-gray-500">Role</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-black/50 border-white/10 text-white h-12 rounded-xl focus:ring-primary/20">
                            <SelectValue placeholder="SELECT ROLE" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-zinc-900 border-white/10 text-white">
                          <SelectItem value="student">Student</SelectItem>
                          <SelectItem value="organizer">Organizer</SelectItem>
                          <SelectItem value="admin">Admin</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="department"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs font-bold uppercase tracking-widest text-gray-500">Dept</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="CS/IT" 
                          {...field} 
                          className="bg-black/50 border-white/10 text-white placeholder:text-gray-600 focus:border-primary/50 focus:ring-primary/20 h-12 rounded-xl"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <Button type="submit" className="w-full bg-primary text-black hover:bg-white hover:scale-[1.02] transition-all duration-300 font-bold uppercase tracking-widest h-14 rounded-full mt-6" disabled={loading}>
                {loading ? (
                  <span className="flex items-center gap-2">
                    <span className="h-4 w-4 border-2 border-black/30 border-t-black rounded-full animate-spin"></span>
                    Processing...
                  </span>
                ) : (
                  "Create Account"
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="justify-center pb-8 border-t border-white/5 pt-6">
          <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
            Already have an ID? <Link to="/login" className="text-white hover:text-primary transition-colors ml-1 font-bold">Login</Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
