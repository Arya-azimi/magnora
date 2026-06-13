import ScaleIn from "@/components/animation/ScaleIn";

interface ServicesCardProps {
  title: string;
  description: string;
  icon: string;
  delay?: number; // اضافه شدن دیلی به صورت اختیاری
}

export default function ServicesCard({ title, description, icon, delay = 0.2 }: ServicesCardProps) {
  const titleId = `title-${title.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    // حالا دیلی انیمیشن کاملاً با ترتیبی که از دیتابیس می‌آید هماهنگ است
    <ScaleIn delay={delay}>
      <article
        className="group flex h-full min-h-[300px] flex-col items-start justify-between rounded-3xl bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] lg:min-h-[370px] xl:p-14"
        aria-labelledby={titleId}
      >
        <div
          className="bg-background-3 flex size-17 items-center justify-center rounded-3xl p-4 transition-transform duration-300 group-hover:scale-110"
          aria-hidden="true"
        >
          <i className={`${icon} text-4xl text-white`} />
        </div>

        <div className="space-y-2 mt-8 lg:mt-0">
          <h3
            id={titleId}
            className="font-sora text-sora-heading-5 xl:text-sora-heading-4 text-background-13/80 tracking-[-1.28px] transition-colors duration-300 group-hover:text-background-13"
            itemProp="name"
          >
            {title}
          </h3>
          <p
            className="font-inter-tight text-background-13/50 text-tagline-2 max-w-[250px] font-normal leading-relaxed transition-colors duration-300 group-hover:text-background-13/70"
            itemProp="description"
          >
            {description}
          </p>
        </div>
      </article>
    </ScaleIn>
  );
}