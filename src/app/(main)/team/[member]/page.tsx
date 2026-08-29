import { executeQuery } from "@/lib/db";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

interface TeamMember {
  id: number;
  slug: string;
  name: string;
  role: string;
  email: string | null;
  phone: string | null;
  github_url: string | null;
  linkedin_url: string | null;
  image: string;
  content: string;
}

// 🛠️ اصلاح اصلی اینجا انجام شد: slug به member تغییر کرد
interface PageProps {
  params: Promise<{ member: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  // 🛠️ و اینجا
  const { member } = await params;

  const members = await executeQuery<TeamMember[]>({
    query: "SELECT name, role, image FROM team_members WHERE slug = ? LIMIT 1",
    values: [member], // 🛠️ پاس دادن متغیر صحیح به دیتابیس
  });

  const memberData = members[0];

  if (!memberData) {
    return {
      title: "Team Member Not Found | Magnora",
    };
  }

  return {
    title: `${memberData.name} - ${memberData.role} | Magnora`,
    description: `Learn more about ${memberData.name}, ${memberData.role} at Magnora.`,
    openGraph: {
      title: `${memberData.name} - ${memberData.role} | Magnora`,
      description: `Learn more about ${memberData.name}, ${memberData.role} at Magnora.`,
      type: "profile",
      images: [{ url: memberData.image, width: 800, height: 800 }],
    },
  };
}

export default async function TeamMemberDetailsPage({ params }: PageProps) {
  // 🛠️ متغیر صحیح از params استخراج شد
  const { member } = await params;

  const members = await executeQuery<TeamMember[]>({
    query: "SELECT * FROM team_members WHERE slug = ? LIMIT 1",
    values: [member], // 🛠️ پاس دادن متغیر به دیتابیس
  });

  const memberData = members[0];

  if (!memberData) {
    notFound();
  }

  return (
    <section className="lp:pb-39! pt-28 pb-20 md:pt-39 md:pb-28">
      <div className="main-container">
        <div className="flex flex-col items-start gap-x-8 gap-y-6 md:flex-row md:gap-y-0 lg:gap-x-18">
          <div
            data-opai-animate
            data-delay="0.1"
            data-direction="left"
            data-offset="100"
            data-instant
            className="w-full md:sticky md:top-28"
          >
            <figure className="h-[500px] overflow-hidden rounded-t-2xl lg:h-[743px]">
              <Image
                src={memberData.image}
                alt={memberData.name}
                width={800}
                height={1000}
                className="size-full object-cover"
                priority
              />
            </figure>
            <div className="rounded-b-2xl bg-white p-8">
              <div className="border-stroke-3/18 space-y-1 border-b pb-6">
                <h2 className="font-sora text-sora-heading-5 text-background-13 font-normal">
                  {memberData.name}
                </h2>
                <p className="font-inter-tight text-tagline-2 text-background-13/60 font-normal">
                  {memberData.role}
                </p>
              </div>

              <div className="space-y-5.5 pt-6">
                <div className="space-y-1">
                  <h3 className="font-sora text-sora-heading-5 text-background-13 font-normal">
                    Contact information
                  </h3>
                  <div className="space-y-1 mt-2">
                    {memberData.email && (
                      <p className="font-inter-tight text-background-13/60 text-tagline-3 font-normal">
                        <a
                          href={`mailto:${memberData.email}`}
                          className="hover:text-black transition-colors"
                        >
                          {memberData.email}
                        </a>
                      </p>
                    )}
                    {memberData.phone && (
                      <p className="font-inter-tight text-background-13/60 text-tagline-3 font-normal mt-1">
                        <a
                          href={`tel:${memberData.phone}`}
                          className="hover:text-black transition-colors"
                        >
                          {memberData.phone}
                        </a>
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex gap-4 pt-2">
                  {memberData.github_url && memberData.github_url !== "#" && (
                    <Link
                      href={memberData.github_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="opacity-60 hover:opacity-100 transition-opacity"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 2C6.477 2 2 6.477 2 12C2 16.418 4.865 20.166 8.839 21.49C9.339 21.582 9.52 21.272 9.52 21.006C9.52 20.766 9.511 19.982 9.506 19.117C6.723 19.721 6.136 17.962 6.136 17.962C5.682 16.809 5.027 16.502 5.027 16.502C4.12 15.882 5.095 15.894 5.095 15.894C6.098 15.965 6.626 16.924 6.626 16.924C7.518 18.454 8.966 18.012 9.54 17.755C9.631 17.102 9.893 16.661 10.183 16.41C7.964 16.158 5.632 15.3 5.632 11.474C5.632 10.384 6.022 9.493 6.657 8.791C6.554 8.539 6.216 7.525 6.755 6.148C6.755 6.148 7.589 5.88 9.5 7.172C10.293 6.951 11.146 6.841 11.996 6.837C12.846 6.841 13.699 6.951 14.493 7.172C16.403 5.88 17.236 6.148 17.236 6.148C17.776 7.525 17.438 8.539 17.336 8.791C17.972 9.493 18.359 10.384 18.359 11.474C18.359 15.311 16.023 16.154 13.795 16.401C14.158 16.715 14.484 17.335 14.484 18.286C14.484 19.65 14.472 20.748 14.472 21.006C14.472 21.276 14.651 21.59 15.163 21.488C19.133 20.162 22 16.416 22 12C22 6.477 17.523 2 12 2Z"
                          fill="#131313"
                        />
                      </svg>
                    </Link>
                  )}
                  {memberData.linkedin_url &&
                    memberData.linkedin_url !== "#" && (
                      <Link
                        href={memberData.linkedin_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="opacity-60 hover:opacity-100 transition-opacity"
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M19 0H5C2.239 0 0 2.239 0 5V19C0 21.761 2.239 24 5 24H19C21.761 24 24 21.761 24 19V5C24 2.239 21.761 0 19 0ZM7.12 20.452H3.558V9H7.12V20.452ZM5.34 7.434C4.195 7.434 3.266 6.505 3.266 5.36C3.266 4.215 4.195 3.286 5.34 3.286C6.485 3.286 7.414 4.215 7.414 5.36C7.413 6.505 6.484 7.434 5.34 7.434ZM20.452 20.452H16.89V14.881C16.89 13.553 16.865 11.848 15.044 11.848C13.197 11.848 12.913 13.289 12.913 14.786V20.452H9.351V9H12.771V10.564H12.82C13.296 9.662 14.458 8.711 16.191 8.711C19.797 8.711 20.452 11.082 20.452 14.168V20.452Z"
                            fill="#131313"
                          />
                        </svg>
                      </Link>
                    )}
                </div>
              </div>
            </div>
          </div>

          <div className="w-full overflow-hidden">
            <div
              data-opai-animate
              data-delay="0.2"
              data-direction="right"
              data-offset="100"
              data-instant
              className="team-details-markdown"
              dangerouslySetInnerHTML={{ __html: memberData.content }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
