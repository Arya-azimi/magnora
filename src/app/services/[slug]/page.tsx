import { executeQuery } from '@/lib/db';
import { notFound } from 'next/navigation';
import { Metadata } from 'next'; 
import TeamHero from '@/components/team/hero';
import { delays, gridClasses } from '@/lib/constants/services-Card';
import Link from 'next/link';
import ServicesCard from '@/components/shared/card/services-card';

interface ServiceDetail {
  id: number;
  slug: string;
  title: string;
  description: string;
  content: string;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;

  const services = await executeQuery<Pick<ServiceDetail, 'title' | 'description'>[]>({
    query: 'SELECT title, description FROM services WHERE slug = ? LIMIT 1',
    values: [slug],
  });

  const service = services[0];

  if (!service) {
    return {
      title: 'Service Not Found | Magnora',
    };
  }

  return {
    title: `${service.title} | Magnora`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const services = await executeQuery<ServiceDetail[]>({
    query: 'SELECT * FROM services WHERE slug = ? LIMIT 1',
    values: [slug],
  });

  const service = services[0];

  if (!service) {
    notFound();
  }

  return (
    <>
      <section className="lp:pb-39! pt-28 pb-20 md:pt-39 md:pb-28">
      <div className="main-container">
        <div 
          data-opai-animate 
          data-delay="0.1" 
          className="service-details-markdown"
          dangerouslySetInnerHTML={{ __html: service.content }} 
        />
      </div>
    </section>
    <TeamHero/>
    </>
  );
}