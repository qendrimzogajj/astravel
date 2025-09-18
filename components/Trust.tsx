export default function Trust() {
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
    ];
  
    return (
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Why Choose Us
        </h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {f.title}
              </h3>
              <p className="text-gray-600 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  