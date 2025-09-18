export default function Testimonials() {
    const reviews = [
      {
        name: "Sarah & Tom",
        text: "AS Travel Club planned the perfect honeymoon for us in the Maldives. Everything was flawless and stress-free!",
      },
      {
        name: "Mark Johnson",
        text: "Thanks to AS Travel Club, our company’s corporate retreat in Dubai was organized to perfection.",
      },
      {
        name: "Elena Petrova",
        text: "I’ve traveled with AS Travel Club three times now — every trip exceeded expectations. Highly recommend!",
      },
    ];
  
    return (
      <section className="mt-20 max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="heading-2 text-center mb-12">What Our Travelers Say</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow p-6 text-center hover:shadow-lg transition"
            >
              <p className="text-foreground/80 italic mb-4">“{review.text}”</p>
              <h3 className="font-semibold text-primary">{review.name}</h3>
            </div>
          ))}
        </div>
      </section>
    );
  }
  