import { ReactComponent as IconArrow } from "../assets/images/icon-arrow.svg";
import IllustrationStayProductive from "../assets/images/illustration-stay-productive.png";
export const DescriptionSection = () => {
  return (
    <section className="bg-mainBg py-16">
      <div className="container mx-auto grid items-center gap-4 px-6 font-openSans  lg:grid-cols-2 lg:px-0">
        <img
          src={IllustrationStayProductive}
          alt="Stay productive illustration"
          className="mx-auto"
        />
        <div className="mt-12 space-y-4 lg:mt-0">
          <h2 className="text-2xl font-bold text-white md:text-3xl lg:max-w-xs lg:text-4xl">
            Stay productive, wherever you are
          </h2>
          <p className="text-lg text-white">
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </p>
          <p className="text-lg text-white">
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
          <a
            href="#"
            className="flex w-fit items-center gap-x-2 border-b-2 border-ctaGradientFrom pb-2 text-lg text-ctaGradientFrom transition hover:opacity-75"
          >
            See how Fylo works
            <IconArrow className="scale-150" fill="current" />
          </a>
        </div>
      </div>
    </section>
  );
};
