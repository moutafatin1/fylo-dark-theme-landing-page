type FeatureCardProps = {
  feature: {
    icon: string;
    title: string;
    desc: string;
  };
};

export const FeatureCard = ({
  feature: { desc, icon, title },
}: FeatureCardProps) => {
  return (
    <article className="mx-auto max-w-md space-y-4 text-center">
      <img src={icon} alt="icon" className="mx-auto" />
      <h2 className="text-2xl font-bold text-white">{title}</h2>
      <p className="text-white">{desc}</p>
    </article>
  );
};
