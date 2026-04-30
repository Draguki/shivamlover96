import { useState } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "@/components/ThemeToggle";
import {
  Sparkles,
  Mail,
  Lock,
  User as UserIcon,
  Eye,
  EyeOff,
  ArrowRight,
  Github,
  Chrome,
  Apple,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import { cn } from "@/lib/utils";

type Mode = "signin" | "signup";

export default function Login() {
  const [, setLocation] = useLocation();
  const [mode, setMode] = useState<Mode>("signin");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    window.setTimeout(() => {
      setLoading(false);
      setLocation("/dashboard");
    }, 900);
  };

  const handleSocial = (_provider: string) => {
    setLoading(true);
    window.setTimeout(() => {
      setLoading(false);
      setLocation("/dashboard");
    }, 700);
  };

  const isSignup = mode === "signup";

  return (
    <div className="min-h-screen w-full bg-background text-foreground relative overflow-hidden">
      {/* Ambient background blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[480px] h-[480px] rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute top-1/2 -right-40 w-[520px] h-[520px] rounded-full bg-accent/20 blur-[140px]" />
        <div className="absolute bottom-0 left-1/3 w-[420px] h-[420px] rounded-full bg-chart-3/15 blur-[120px]" />
      </div>

      {/* Top utility bar */}
      <div className="relative z-20 flex items-center justify-between px-6 md:px-10 py-5">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-primary/10 p-2 rounded-xl group-hover:bg-primary/20 transition-colors">
            <Sparkles className="w-5 h-5 text-primary" />
          </div>
          <span className="font-bold text-xl tracking-tight">LearnSync</span>
        </Link>
        <div className="flex items-center gap-3">
          <span className="hidden sm:inline text-sm text-muted-foreground">
            {isSignup ? "Already have an account?" : "New to LearnSync?"}
          </span>
          <Button
            variant="outline"
            className="rounded-full"
            onClick={() => setMode(isSignup ? "signin" : "signup")}
          >
            {isSignup ? "Sign in" : "Create account"}
          </Button>
          <ThemeToggle />
        </div>
      </div>

      <div className="relative z-10 grid lg:grid-cols-2 gap-0 px-4 md:px-10 pb-10 lg:pb-0 lg:min-h-[calc(100vh-92px)]">
        {/* LEFT — form panel */}
        <div className="flex items-center justify-center py-8 lg:py-12">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full max-w-md"
          >
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium mb-5">
                <Sparkles className="w-3.5 h-3.5" />
                {isSignup ? "Start learning in 60 seconds" : "Welcome back to LearnSync"}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                {isSignup ? "Create your account" : "Sign in to your account"}
              </h1>
              <p className="text-muted-foreground mt-2">
                {isSignup
                  ? "Your AI mentor is ready to build a learning path tailored to you."
                  : "Pick up where you left off — your streak is waiting."}
              </p>
            </div>

            {/* Social */}
            <div className="grid grid-cols-3 gap-3 mb-5">
              <Button
                type="button"
                variant="outline"
                className="rounded-xl h-11"
                onClick={() => handleSocial("google")}
                disabled={loading}
              >
                <Chrome className="w-4 h-4" />
              </Button>
              <Button
                type="button"
                variant="outline"
                className="rounded-xl h-11"
                onClick={() => handleSocial("github")}
                disabled={loading}
              >
                <Github className="w-4 h-4" />
              </Button>
              <Button
                type="button"
                variant="outline"
                className="rounded-xl h-11"
                onClick={() => handleSocial("apple")}
                disabled={loading}
              >
                <Apple className="w-4 h-4" />
              </Button>
            </div>

            <div className="flex items-center gap-3 my-6">
              <Separator className="flex-1" />
              <span className="text-xs uppercase tracking-wider text-muted-foreground">
                or continue with email
              </span>
              <Separator className="flex-1" />
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <AnimatePresence initial={false} mode="popLayout">
                {isSignup && (
                  <motion.div
                    key="name"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <Label htmlFor="name" className="text-sm font-medium">
                      Full name
                    </Label>
                    <div className="relative mt-1.5">
                      <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="name"
                        type="text"
                        placeholder="Aarav Sharma"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required={isSignup}
                        className="pl-10 h-11 rounded-xl"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div>
                <Label htmlFor="email" className="text-sm font-medium">
                  Email
                </Label>
                <div className="relative mt-1.5">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="pl-10 h-11 rounded-xl"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="text-sm font-medium">
                    Password
                  </Label>
                  {!isSignup && (
                    <a
                      href="#"
                      className="text-xs font-medium text-primary hover:underline"
                    >
                      Forgot password?
                    </a>
                  )}
                </div>
                <div className="relative mt-1.5">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder={isSignup ? "Create a strong password" : "Enter your password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minLength={6}
                    className="pl-10 pr-10 h-11 rounded-xl"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((s) => !s)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
                {isSignup && (
                  <p className="text-xs text-muted-foreground mt-1.5">
                    Use at least 6 characters with a mix of letters and numbers.
                  </p>
                )}
              </div>

              {!isSignup && (
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="remember"
                    checked={remember}
                    onCheckedChange={(v) => setRemember(Boolean(v))}
                  />
                  <Label
                    htmlFor="remember"
                    className="text-sm text-muted-foreground cursor-pointer"
                  >
                    Keep me signed in for 30 days
                  </Label>
                </div>
              )}

              {isSignup && (
                <p className="text-xs text-muted-foreground leading-relaxed">
                  By creating an account, you agree to our{" "}
                  <a href="#" className="text-primary hover:underline">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-primary hover:underline">
                    Privacy Policy
                  </a>
                  .
                </p>
              )}

              <Button
                type="submit"
                disabled={loading}
                className="w-full h-11 rounded-xl text-base font-semibold group"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    {isSignup ? "Creating account..." : "Signing in..."}
                  </>
                ) : (
                  <>
                    {isSignup ? "Create account" : "Sign in"}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </>
                )}
              </Button>
            </form>

            <p className="text-center text-sm text-muted-foreground mt-6">
              {isSignup ? "Already have an account?" : "New to LearnSync?"}{" "}
              <button
                type="button"
                onClick={() => setMode(isSignup ? "signin" : "signup")}
                className="text-primary font-medium hover:underline"
              >
                {isSignup ? "Sign in" : "Create one for free"}
              </button>
            </p>

            <div className="mt-8 text-center text-xs text-muted-foreground">
              This is a demo login. No data is stored.
            </div>
          </motion.div>
        </div>

        {/* RIGHT — branded panel */}
        <div className="hidden lg:flex items-center justify-center p-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative w-full h-[640px] rounded-3xl overflow-hidden border border-border/60 shadow-2xl"
          >
            {/* Gradient layers */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/80 to-accent" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--chart-3)/0.5),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,hsl(var(--chart-2)/0.45),transparent_55%)]" />

            {/* Subtle grid */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />

            {/* Floating glow blobs */}
            <motion.div
              animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-16 right-12 w-40 h-40 rounded-full bg-white/15 blur-3xl"
            />
            <motion.div
              animate={{ y: [0, 15, 0], x: [0, -15, 0] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-20 left-10 w-52 h-52 rounded-full bg-accent/30 blur-3xl"
            />

            {/* Content */}
            <div className="relative h-full flex flex-col p-10 text-white">
              <div className="flex items-center gap-2">
                <div className="bg-white/15 backdrop-blur-md p-2 rounded-xl border border-white/20">
                  <Sparkles className="w-5 h-5" />
                </div>
                <span className="font-semibold tracking-tight">LearnSync 3.0</span>
              </div>

              {/* Floating dashboard preview card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="flex-1 flex items-center justify-center my-6"
              >
                <div className="w-full max-w-sm bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-5 shadow-2xl">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-white/30 to-white/10 flex items-center justify-center font-bold">
                      A
                    </div>
                    <div>
                      <div className="font-semibold text-sm">Welcome back, Aarav</div>
                      <div className="text-xs text-white/70">12-day learning streak</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {[
                      { label: "Mastering React 19", pct: 72 },
                      { label: "ML with PyTorch", pct: 38 },
                      { label: "Product Design Systems", pct: 91 },
                    ].map((c, i) => (
                      <motion.div
                        key={c.label}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        className="bg-white/10 rounded-xl p-3 border border-white/10"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-medium">{c.label}</span>
                          <span className="text-xs text-white/70">{c.pct}%</span>
                        </div>
                        <div className="h-1.5 rounded-full bg-white/20 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${c.pct}%` }}
                            transition={{ delay: 0.7 + i * 0.1, duration: 0.8 }}
                            className="h-full bg-gradient-to-r from-white to-white/70 rounded-full"
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-2 mt-4">
                    {[
                      { label: "XP", value: "2,840" },
                      { label: "Badges", value: "14" },
                      { label: "Hours", value: "128" },
                    ].map((s) => (
                      <div
                        key={s.label}
                        className="bg-white/10 rounded-lg p-2 text-center border border-white/10"
                      >
                        <div className="text-base font-bold">{s.value}</div>
                        <div className="text-[10px] uppercase tracking-wider text-white/70">
                          {s.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              <div className="space-y-4 max-w-md">
                <h2 className="text-2xl xl:text-3xl font-bold leading-tight tracking-tight">
                  Learn smarter. Grow faster.
                </h2>
                <p className="text-sm text-white/80 leading-relaxed">
                  Join 240,000+ learners using LearnSync to master tech, business,
                  and design with AI-personalized paths.
                </p>
                <div className="space-y-2">
                  {[
                    "AI-curated learning paths tailored to your goals",
                    "Netflix-style course library across 8 categories",
                    "Track streaks, XP, and skill milestones",
                  ].map((f) => (
                    <div key={f} className="flex items-start gap-2.5 text-sm text-white/90">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// keep cn helper referenced (avoids unused import warning if utility tree-shaken)
void cn;
