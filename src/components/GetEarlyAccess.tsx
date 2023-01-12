import { Button } from "./common";

export const GetEarlyAccess = () => {
  return (
    <section className="absolute left-1/2 w-full max-w-2xl -translate-y-1/2 -translate-x-1/2 lg:max-w-5xl">
      <div className="mx-6 flex flex-col gap-6 rounded-2xl bg-testimonialsBg p-12 text-center font-openSans shadow-lg lg:mx-0">
        <h3 className="text-3xl font-bold text-white lg:text-4xl">
          Get early access today
        </h3>
        <p className="text-white">
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
        <form className="mt-4 flex flex-col gap-6 lg:flex-row lg:gap-10">
          <input
            type="email"
            placeholder="email@example.com"
            className="h-14 w-full rounded-full focus:border-ctaGradientTo focus:ring-ctaGradientTo lg:flex-[5]"
          />
          <Button className="h-14 lg:flex-[3] ">Get Started For Free</Button>
        </form>
      </div>
    </section>
  );
};
