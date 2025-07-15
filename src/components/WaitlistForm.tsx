import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Mail, Sparkles } from "lucide-react";

export const WaitlistForm = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Welcome to Brainquest! 🧠",
      description: "You're now on the waitlist. Get ready to level up your learning!",
    });
    
    setEmail("");
    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
      <div className="relative flex-1">
        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="pl-10 bg-card border-muted"
          required
        />
      </div>
      <Button 
        type="submit" 
        variant="hero" 
        size="lg"
        disabled={isLoading}
        className="whitespace-nowrap"
      >
        {isLoading ? (
          <>
            <Sparkles className="w-4 h-4 animate-spin" />
            Joining...
          </>
        ) : (
          <>
            <Sparkles className="w-4 h-4" />
            Join Waitlist
          </>
        )}
      </Button>
    </form>
  );
};