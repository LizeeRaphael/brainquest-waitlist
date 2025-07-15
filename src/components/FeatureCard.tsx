import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient?: string;
}

export const FeatureCard = ({ icon: Icon, title, description, gradient = "bg-gradient-card" }: FeatureCardProps) => {
  return (
    <div className={`${gradient} p-6 rounded-xl border border-muted/50 hover:border-muted transition-all duration-300 group animate-slide-up`}>
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
};