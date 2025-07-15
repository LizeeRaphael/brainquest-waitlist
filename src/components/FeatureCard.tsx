import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient?: string;
}

export const FeatureCard = ({ icon: Icon, title, description, gradient = "bg-gradient-card" }: FeatureCardProps) => {
  return (
    <div className={`${gradient} p-6 rounded-xl border border-muted/50 hover:border-primary/50 transition-all duration-500 group hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2`}>
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-125 group-hover:bg-primary/20 transition-all duration-300 group-hover:animate-pulse-glow">
        <Icon className="w-6 h-6 text-primary group-hover:animate-wiggle" />
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{title}</h3>
      <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">{description}</p>
    </div>
  );
};