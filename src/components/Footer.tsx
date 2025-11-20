import { Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Shield className="w-8 h-8 text-accent" />
            <span className="text-2xl font-bold">Lesita-Phiri</span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm opacity-90">
              © {new Date().getFullYear()} Lesita-Phiri Security Services. All rights reserved.
            </p>
            <p className="text-xs opacity-75 mt-1">
              Professional Security Solutions | South Africa
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
