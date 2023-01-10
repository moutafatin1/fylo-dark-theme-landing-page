import Avatar1 from "../assets/images/profile-1.jpg";
import Avatar2 from "../assets/images/profile-2.jpg";
import Avatar3 from "../assets/images/profile-3.jpg";
import { TestimonialCard } from "./common";

const testimonials = [
  {
    review:
      "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    user: {
      name: "Satish Patel",
      workLocation: "Founder & CEO, Huddle",
      avatar: Avatar1,
    },
  },
  {
    review:
      "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    user: {
      name: "Bruce McKenzie",
      workLocation: "Founder & CEO, Huddle",
      avatar: Avatar2,
    },
  },
  {
    review:
      "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    user: {
      name: "Iva Boyd",
      workLocation: "Founder & CEO, Huddle",
      avatar: Avatar3,
    },
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="relative -z-10 bg-mainBg py-16">
      <div className="container mx-auto flex flex-col gap-8 px-6 lg:flex-row lg:px-0">
        {testimonials.map((t) => (
          <TestimonialCard key={t.user.name} testimonial={t} />
        ))}
      </div>
    </section>
  );
};
