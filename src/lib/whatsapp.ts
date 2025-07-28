// WhatsApp Business API Integration
export const WHATSAPP_CONFIG = {
  phoneNumber: "919491398821", // Uma Consultancy WhatsApp number
  businessName: "Uma Consultancy",
};

export interface WhatsAppMessageOptions {
  message?: string;
  source?: string;
  service?: string;
  name?: string;
  email?: string;
}

/**
 * Generate WhatsApp message URL for consultation booking
 */
export const generateWhatsAppURL = (options: WhatsAppMessageOptions = {}): string => {
  const {
    message,
    source = "website",
    service = "General Consultation",
    name,
    email
  } = options;

  let defaultMessage = `Hello ${WHATSAPP_CONFIG.businessName}! 👋

I'm interested in booking a *FREE consultation* for my business.

📋 *Service Interest:* ${service}
🌐 *Source:* ${source}`;

  if (name) {
    defaultMessage += `\n👤 *Name:* ${name}`;
  }

  if (email) {
    defaultMessage += `\n📧 *Email:* ${email}`;
  }

  defaultMessage += `\n\n💼 *About Uma Consultancy:*
With 27+ years of expertise in the automotive industry, I believe your team can help drive success for my business.

🎯 *I'm looking for help with:*
• Business Growth Strategy
• Operational Excellence
• Data Analytics & Management
• ERP Solutions
• Manpower Solutions

⏰ *Preferred Contact Time:* [Please specify your preferred time]

Looking forward to discussing how we can work together! 🚀`;

  const finalMessage = message || defaultMessage;
  const encodedMessage = encodeURIComponent(finalMessage);
  
  return `https://wa.me/${WHATSAPP_CONFIG.phoneNumber}?text=${encodedMessage}`;
};

/**
 * Open WhatsApp with consultation message
 */
export const openWhatsAppConsultation = (options: WhatsAppMessageOptions = {}): void => {
  const url = generateWhatsAppURL(options);
  
  // Track the consultation request (optional analytics)
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'consultation_request', {
      event_category: 'engagement',
      event_label: options.source || 'website',
      value: 1
    });
  }
  
  // Open WhatsApp
  window.open(url, '_blank', 'noopener,noreferrer');
};

/**
 * Generate service-specific WhatsApp messages
 */
export const getServiceSpecificMessage = (serviceName: string): string => {
  const serviceMessages: Record<string, string> = {
    "Manpower Solutions": `Hello ${WHATSAPP_CONFIG.businessName}! 👋

I'm interested in your *Manpower Solutions* services for my automotive business.

🎯 *Specific Requirements:*
• Skilled workforce recruitment
• Training and development programs
• Performance management systems
• HR consulting

I'd like to book a FREE consultation to discuss my manpower needs.

Looking forward to your expert guidance! 🚀`,

    "Data Management & Analytics": `Hello ${WHATSAPP_CONFIG.businessName}! 👋

I need help with *Data Management & Analytics* for my business.

📊 *Areas of Interest:*
• Business intelligence solutions
• Data visualization and reporting
• Performance analytics
• Decision-making insights

I'd like to schedule a FREE consultation to explore how data can drive my business growth.

Thank you! 📈`,

    "Business Strategy": `Hello ${WHATSAPP_CONFIG.businessName}! 👋

I'm looking for expert *Business Strategy* consultation.

🎯 *Strategic Areas:*
• Growth planning and execution
• Market analysis and positioning
• Competitive advantage development
• Strategic partnerships

I'd like to book a FREE consultation to discuss my business strategy needs.

Looking forward to your 27+ years of expertise! 💼`,

    "Operational Excellence": `Hello ${WHATSAPP_CONFIG.businessName}! 👋

I need assistance with *Operational Excellence* for my automotive business.

⚙️ *Focus Areas:*
• Process optimization
• Quality management systems
• Lean manufacturing principles
• Efficiency improvements

I'd like to schedule a FREE consultation to enhance my operations.

Thank you for your expertise! 🔧`,

    "ERP Solutions": `Hello ${WHATSAPP_CONFIG.businessName}! 👋

I'm interested in your *ERP Solutions* services.

💻 *ERP Requirements:*
• System selection and implementation
• Process integration
• Training and support
• Custom ERP development

I'd like to book a FREE consultation to discuss my ERP needs.

Looking forward to streamlining my business processes! 🚀`,

    "Supply Chain Optimization": `Hello ${WHATSAPP_CONFIG.businessName}! 👋

I need help with *Supply Chain Optimization* for my business.

🚚 *Supply Chain Areas:*
• Vendor management
• Inventory optimization
• Logistics efficiency
• Cost reduction strategies

I'd like to schedule a FREE consultation to optimize my supply chain.

Thank you! 📦`
  };

  return serviceMessages[serviceName] || generateWhatsAppURL({ service: serviceName });
};

/**
 * WhatsApp contact for urgent inquiries
 */
export const openWhatsAppUrgent = (): void => {
  const urgentMessage = `Hello ${WHATSAPP_CONFIG.businessName}! 🚨

This is an *URGENT INQUIRY* regarding my automotive business.

⚡ *Immediate Assistance Needed:*
[Please describe your urgent requirement]

📞 *Contact Details:*
• Name: [Your Name]
• Company: [Your Company]
• Phone: [Your Phone Number]

I need immediate consultation and support.

Thank you for your prompt response! 🙏`;

  const url = `https://wa.me/${WHATSAPP_CONFIG.phoneNumber}?text=${encodeURIComponent(urgentMessage)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
};

// Type declarations for global gtag (Google Analytics)
declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string,
      config?: Record<string, any>
    ) => void;
  }
}