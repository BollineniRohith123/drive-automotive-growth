import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight, Phone } from "lucide-react";
import { openWhatsAppConsultation, WhatsAppMessageOptions } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

interface WhatsAppButtonProps {
  variant?: "default" | "cta" | "accent" | "hero" | "outline";
  size?: "sm" | "default" | "lg";
  className?: string;
  children?: React.ReactNode;
  options?: WhatsAppMessageOptions;
  showIcon?: boolean;
  urgent?: boolean;
}

const WhatsAppButton = ({
  variant = "cta",
  size = "default",
  className,
  children = "Book Free Consultation",
  options = {},
  showIcon = true,
  urgent = false
}: WhatsAppButtonProps) => {
  const handleClick = () => {
    openWhatsAppConsultation({
      ...options,
      source: options.source || "website_button"
    });
  };

  const icon = urgent ? <Phone className="mr-2 h-4 w-4" /> : 
               showIcon ? <MessageCircle className="mr-2 h-4 w-4" /> : 
               <ArrowRight className="ml-2 h-4 w-4" />;

  return (
    <Button
      variant={variant}
      size={size}
      onClick={handleClick}
      className={cn(
        "transition-all duration-300 hover:scale-105",
        urgent && "animate-pulse",
        className
      )}
    >
      {showIcon && !children?.toString().includes("→") && icon}
      {children}
      {!showIcon && <ArrowRight className="ml-2 h-4 w-4" />}
    </Button>
  );
};

export default WhatsAppButton;