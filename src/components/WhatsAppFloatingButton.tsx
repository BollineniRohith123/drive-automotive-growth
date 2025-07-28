import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { openWhatsAppConsultation } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

const WhatsAppFloatingButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            // Show button after user scrolls down 100px
            if (window.scrollY > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        // Show button after 3 seconds on page load
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 3000);

        return () => {
            window.removeEventListener("scroll", toggleVisibility);
            clearTimeout(timer);
        };
    }, []);

    const handleWhatsAppClick = () => {
        openWhatsAppConsultation({
            source: "floating_button",
            service: "Quick Consultation"
        });
    };

    return (
        <>
            {/* WhatsApp Floating Button */}
            <div
                className={cn(
                    "fixed bottom-6 left-6 z-50 transition-all duration-500 ease-in-out",
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
                )}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="relative">
                    {/* Tooltip */}
                    <div
                        className={cn(
                            "absolute bottom-full left-0 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap transition-all duration-300",
                            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
                        )}
                    >
                        Chat with us on WhatsApp!
                        <div className="absolute top-full left-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                    </div>

                    {/* Main Button */}
                    <Button
                        onClick={handleWhatsAppClick}
                        className={cn(
                            "w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse hover:animate-none",
                            "hover:scale-110 active:scale-95"
                        )}
                        size="icon"
                    >
                        <MessageCircle className="h-6 w-6" />
                    </Button>
                </div>
            </div>

            {/* Pulsing Notification Dot */}
            <div
                className={cn(
                    "fixed bottom-[4.5rem] left-[4.5rem] z-50 w-3 h-3 bg-red-500 rounded-full animate-pulse transition-all duration-500",
                    isVisible ? "opacity-100" : "opacity-0"
                )}
            >
                <div className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-75"></div>
            </div>
        </>
    );
};

export default WhatsAppFloatingButton;