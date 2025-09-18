import { ShieldCheck, Headphones, Globe2, DollarSign } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function WhyChooseUs() {
  const features = [
    {
      icon: "🏆",
      title: "40+ Years Experience",
      desc: "Expert travel planners who know the ins and outs of long-haul travel.",
    },
    {
      icon: "🌍",
      title: "Global Destinations",
      desc: "Curated travel experiences across Europe, Asia, America, and beyond.",
    },
    {
      icon: "✈️",
      title: "Corporate & Luxury Travel",
      desc: "Tailored packages, business-class options, and white-glove service.",
    },
    {
      icon: "💬",
      title: "Customer Testimonials",
      desc: "Hear from our satisfied travelers and repeat clients.",
    },
    {
      icon: ShieldCheck,
      title: "Best Price Guarantee",
      desc: "We ensure the best rates for flights and packages with no hidden fees.",
    },
    {
      icon: Globe2,
      title: "Worldwide Destinations",
      desc: "Explore over 50 countries and curated tours designed for unforgettable journeys.",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      desc: "Our travel experts are here to assist you anytime, anywhere.",
    },
    {
      icon: DollarSign,
      title: "Secure Payments",
      desc: "Book with confidence using our fully encrypted and trusted payment system.",
    },
  ];

  return (
    <section className="mt-16">
      <h2 className="heading-2 text-center">Why Choose Us</h2>
      <p className="text-center text-base text-foreground/70 max-w-2xl mx-auto mt-2 mb-10">
        From personalized packages to secure bookings, here’s why travelers trust us with their adventures.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, i) => (
          <Card key={i} className="shadow-sm p-6 text-center">
            {/* Render emoji OR lucide icon */}
            {typeof feature.icon === "string" ? (
              <div className="text-4xl mb-4">{feature.icon}</div>
            ) : (
              <feature.icon className="w-10 h-10 mx-auto text-primary mb-4" />
            )}
            <CardHeader className="p-0">
              <CardTitle className="text-[#14183e]">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-foreground/70 mt-2">
              {feature.desc}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
