import BgQuote from "../../assets/images/bg-quotes.png";

type TestimonialCardProps = {
  testimonial: {
    review: string;
    user: {
      name: string;
      avatar: string;
      workLocation: string;
    };
  };
};

export const TestimonialCard = ({
  testimonial: { review, user },
}: TestimonialCardProps) => {
  return (
    <div className="relative mx-auto max-w-md rounded-md bg-testimonialsBg p-8 shadow-md shadow-gray-600/20">
      {user.name.includes("Satish") && (
        <img
          src={BgQuote}
          alt="bg quote"
          className="absolute top-0 -left-2 -z-[1] -translate-y-9"
        />
      )}
      <article className="space-y-4">
        <p className="text-white">{review}</p>
        <div className="flex items-center gap-2">
          <img
            src={user.avatar}
            alt={user.name}
            className="h-10 w-10 rounded-full"
          />
          <div className="flex flex-col">
            <span className="font-bold text-white">{user.name}</span>
            <span className="text-sm text-gray-300">{user.workLocation}</span>
          </div>
        </div>
      </article>
    </div>
  );
};
