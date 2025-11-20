import { Card, CardContent } from "@/components/ui/card";
import { 
  Car, 
  Camera, 
  Zap, 
  Radio, 
  Bell, 
  GraduationCap 
} from "lucide-react";

const services = [
  {
    icon: Car,
    title: "Motor Patrols",
    description: "Round-the-clock mobile security patrols to ensure comprehensive protection of your premises.",
  },
  {
    icon: Camera,
    title: "CCTV Systems",
    description: "State-of-the-art surveillance systems with 24/7 monitoring and remote access capabilities.",
  },
  {
    icon: Zap,
    title: "Electric Fences",
    description: "Advanced perimeter security solutions with high-voltage deterrent systems and alarm integration.",
  },
  {
    icon: Radio,
    title: "Intercom Systems",
    description: "Professional communication systems for secure access control and visitor management.",
  },
  {
    icon: Bell,
    title: "Alarm Systems",
    description: "Sophisticated intrusion detection systems with instant alerts and rapid response protocols.",
  },
  {
    icon: GraduationCap,
    title: "Accredited Security Training",
    description: "Professional security training programs with industry-recognized certifications and qualifications.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive security solutions designed to protect your property, assets, and peace of mind.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border"
            >
              <CardContent className="p-8">
                <service.icon className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-2xl font-bold text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
