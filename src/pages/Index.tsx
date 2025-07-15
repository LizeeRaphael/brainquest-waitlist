import { Brain, Zap, Target, Users, Star, Gift } from "lucide-react";
import { WaitlistForm } from "@/components/WaitlistForm";
import { FeatureCard } from "@/components/FeatureCard";
import { BenefitsBadge } from "@/components/BenefitsBadge";
import heroBrain from "@/assets/hero-brain.jpg";

const Index = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Learning",
      description: "Adaptive algorithms that understand your learning style and pace, creating personalized quest paths."
    },
    {
      icon: Zap,
      title: "Gamified Experience",
      description: "Level up your knowledge with achievements, streaks, and competitive leaderboards."
    },
    {
      icon: Target,
      title: "Skill Mastery",
      description: "Track your progress across multiple subjects with detailed analytics and insights."
    }
  ];

  const benefits = [
    "Free lifetime premium access",
    "Exclusive beta features",
    "Priority customer support",
    "Early learning content library",
    "Founder's community access"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
        <div className="absolute inset-0">
          <img 
            src={heroBrain} 
            alt="Neural network brain" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        
        <div className="relative container mx-auto px-4 py-20 sm:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-foreground mb-8 animate-slide-up">
              <Gift className="w-4 h-4 text-synapse-orange" />
              Early Access • Join 2,847 Brain Questers
            </div>
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-slide-up">
              Level Up Your
              <span className="bg-gradient-button bg-clip-text text-transparent"> Mind</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up">
              Transform learning into an epic adventure. Brainquest uses AI-powered gamification 
              to make mastering new skills addictive and fun.
            </p>
            
            <div className="flex flex-col items-center gap-6 animate-slide-up">
              <WaitlistForm />
              <p className="text-sm text-muted-foreground">
                🚀 Launching Q2 2024 • No spam, just brain gains
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Why Brain Questers Love Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience learning like never before with features designed to unlock your full potential
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </section>

      {/* Benefits & Social Proof Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Join the Early Access Revolution
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Be among the first to experience the future of learning. Early access members 
                get exclusive benefits and help shape the product.
              </p>
              
              <div className="flex items-center gap-4 mb-8">
                <div className="flex -space-x-2">
                  {[1,2,3,4,5].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gradient-button border-2 border-background"></div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-1">
                    {[1,2,3,4,5].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-synapse-orange text-synapse-orange" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Join 2,847 others waiting for launch
                  </p>
                </div>
              </div>
              
              <WaitlistForm />
            </div>
            
            <div className="lg:pl-8">
              <BenefitsBadge benefits={benefits} />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-muted/50">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Brain className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">Brainquest</span>
          </div>
          <p className="text-muted-foreground">
            Making learning addictive, one quest at a time.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
