



// Testimonials data with unique info and images
const testimonials = [
  {
    name: "Austin Fruits",
    role: "Graphic Designer",
    feedback:
      "The design tools provided are second to none! My workflow has greatly improved, and I can produce designs much faster.",
    image: "https://i.ibb.co.com/s6HMshF/Screenshot-2024-11-19-071742.png",
  },
  {
    name: "Adrianna Calvo",
    role: "Web Developer",
    feedback:
      "The platform is easy to navigate and really boosted my productivity. I’ve never been so efficient in my work.",
    image: "https://i.ibb.co.com/BKRJms2/Screenshot-2024-11-19-071713.png",
  },
  {
    name: "Neutralart",
    role: "3D Artist",
    feedback:
      "A game-changer! I can create high-quality 3D models much faster and with better precision thanks to the tools provided here.",
    image: "https://i.ibb.co.com/Qj8HF36/Screenshot-2024-11-19-071658.png",
  },
  {
    name: "Cinematic Stock",
    role: "Film Editor",
    feedback:
      "The resource library is vast, and the quality is unbeatable. It has significantly improved my editing workflow.",
    image: "https://i.ibb.co.com/jy7rS8q/Screenshot-2024-11-19-071629.png",
  },
  {
    name: "Sarah Johnson",
    role: "UX Designer",
    feedback:
      "This product exceeded all my expectations. It's intuitive, powerful, and has dramatically improved my workflow.",
    image: "https://i.ibb.co.com/Fm0T6wb/Screenshot-2024-11-19-071645.png",
  },
];

const Testimonials = () => {
  

  return (
    <section className="container mx-auto py-16 px-4" data-aos="fade-up">
      <div className="text-center mb-8">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100">
          What Our Users Say
        </h2>
      </div>

      {/* Testimonials Grid */}
      <div className="  justify-center gap-5 grid grid-cols-1 md:grid-cols-3 ">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className=""
            data-aos="zoom-in"
            data-aos-delay={`${index * 100}`} // Delay animation for each card
          >
            <div className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl shadow-2xl p-8 text-white">
              <div className="absolute top-0 left-0 w-full h-full bg-white opacity-10 transform -skew-x-12"></div>
              <div className="relative z-10">
                <svg
                  className="w-12 h-12 mb-4 text-purple-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="md:text-lg  font-medium mb-4">
                  {testimonial.feedback}
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 border-2 border-purple-300"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-purple-200">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
