import IconAccessAnywhere from "../assets/images/icon-access-anywhere.svg";
import IconAnyFile from "../assets/images/icon-any-file.svg";
import IconCollaboration from "../assets/images/icon-collaboration.svg";
import IconSecurity from "../assets/images/icon-security.svg";
import { FeatureCard } from "./common";

const features = [
  {
    icon: IconAccessAnywhere,
    title: "Access your files, anywhere",
    desc: "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
  },
  {
    icon: IconSecurity,
    title: "Security you can trust",
    desc: "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
  },
  {
    icon: IconCollaboration,
    title: "Real-time collaboration",
    desc: "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
  },
  {
    icon: IconAnyFile,
    title: "Store any type of file",
    desc: "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
  },
];

export const FeatureSection = () => {
  return (
    <section className="bg-mainBg">
      <div className="container mx-auto grid items-end gap-16 px-4 py-16 md:grid-cols-2">
        {features.map((feature) => (
          <FeatureCard key={feature.title} feature={feature} />
        ))}
      </div>
    </section>
  );
};
