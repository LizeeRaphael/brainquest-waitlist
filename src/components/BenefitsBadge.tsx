import { Check } from "lucide-react";

interface BenefitsBadgeProps {
  benefits: string[];
}

export const BenefitsBadge = ({ benefits }: BenefitsBadgeProps) => {
  return (
    <div className="bg-gradient-card p-6 rounded-xl border border-electric-blue/20 animate-float">
      <h4 className="text-lg font-semibold text-electric-blue mb-4">Early Access Benefits</h4>
      <ul className="space-y-3">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-center gap-3 text-foreground">
            <div className="w-5 h-5 rounded-full bg-electric-blue/20 flex items-center justify-center flex-shrink-0">
              <Check className="w-3 h-3 text-electric-blue" />
            </div>
            <span className="text-sm">{benefit}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};