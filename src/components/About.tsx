import { Shield, Clock, Award, Users } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Trusted Protection",
    description: "Years of experience delivering reliable security solutions",
  },
  {
    icon: Clock,
    title: "24/7 Monitoring",
    description: "Round-the-clock surveillance and rapid response teams",
  },
  {
    icon: Award,
    title: "Certified Professionals",
    description: "Highly trained and accredited security personnel",
  },
  {
    icon: Users,
    title: "Personalized Service",
    description: "Tailored security solutions for your unique needs",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Why Choose Lesita-Phiri?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              At Lesita-Phiri, we understand that security is not just about protection—it's about peace of mind. With our comprehensive range of security services and commitment to excellence, we've become a trusted partner for businesses and residential clients alike.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our team of certified professionals uses cutting-edge technology and proven methodologies to deliver security solutions that exceed expectations. From initial consultation to ongoing support, we're with you every step of the way.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-secondary p-6 rounded-lg hover:shadow-lg transition-all duration-300"
              >
                <feature.icon className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-xl font-bold text-primary mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
