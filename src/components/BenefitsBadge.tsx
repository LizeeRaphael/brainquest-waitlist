import { Check } from "lucide-react";

interface BenefitsBadgeProps {
  benefits: string[];
}

export const BenefitsBadge = ({ benefits }: BenefitsBadgeProps) => {
  return (
    <div className="bg-gradient-card p-6 rounded-xl border border-electric-blue/20 animate-float hover:animate-glow-pulse transition-all duration-300 hover:scale-105">
      <h4 className="text-lg font-semibold text-electric-blue mb-4 animate-slide-up">Early Access Benefits</h4>
      <ul className="space-y-3">
        {benefits.map((benefit, index) => (
          <li 
            key={index} 
            className="flex items-center gap-3 text-foreground animate-slide-in-right hover:scale-105 transition-transform duration-300 group"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="w-5 h-5 rounded-full bg-electric-blue/20 flex items-center justify-center flex-shrink-0 group-hover:bg-electric-blue/40 transition-colors duration-300">
              <Check className="w-3 h-3 text-electric-blue group-hover:animate-bounce" />
            </div>
            <span className="text-sm group-hover:text-electric-blue transition-colors duration-300">{benefit}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};