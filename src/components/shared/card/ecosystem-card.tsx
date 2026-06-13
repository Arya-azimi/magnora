interface EcosystemCardProps {
  delay?: string;
  icon: string;
  alt: string;
  title: string;
  description: string;
  role?: string;
}

export default function EcosystemCard({ delay, icon, alt, title, description, role }: EcosystemCardProps) {
  return (
    <div
      data-opai-animate
      data-delay={delay}
      className="col-span-12 space-y-2 rounded-3xl bg-white p-5 md:col-span-6 lg:col-span-4 lg:p-6 xl:p-8"
      role={role}
    >
      <div className="flex flex-col items-center justify-center gap-x-3 gap-y-3 md:flex-row md:justify-start md:gap-y-0">
        <span className="bg-background-8 flex size-18 items-center justify-center rounded-3xl p-2">
          <figure className="flex size-14 items-center justify-center overflow-hidden rounded-[20px] bg-white">
            <img src={icon} alt={alt} className="size-8.5" />
          </figure>
        </span>
        <h3 className="font-inter-tight text-tagline-1 font-medium text-black">{title}</h3>
      </div>

      <p className="text-background-13/60 text-tagline-2 mx-auto max-w-50 text-center font-normal md:mx-0 md:text-left">
        {description}
      </p>
    </div>
  );
}