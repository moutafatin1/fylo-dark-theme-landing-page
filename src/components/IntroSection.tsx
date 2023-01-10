import IllustrationIntro from "../assets/images/illustration-intro.png";
import { Button } from "./common";

export const IntroSection = () => {
  return (
    <section className="bg-curvyMobile  bg-[length:45rem_30rem] bg-bottom bg-no-repeat p-6  text-center font-openSans md:bg-[length:100%_30rem]">
      <img
        src={IllustrationIntro}
        alt="intro illustration"
        className="my-6 mx-auto"
      />
      <div className=" mx-auto max-w-2xl space-y-4 md:space-y-6">
        <h1 className="text-3xl font-bold text-white  md:text-4xl">
          All your files in one secure location, accessible anywhere.
        </h1>
        <p className="text-lg text-white">
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers.
        </p>
        <Button className="max-w-[15rem]">Get Started</Button>
      </div>
    </section>
  );
};
