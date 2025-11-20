import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Lesita-Phiri Logo" className="w-10 h-10" />
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
