import ContactForm from "@/components/contact/contact-form";
import CTA from "@/components/shared/cta";
import { getPageMetadata } from "@/lib/metadata";

export async function generateMetadata() {
  return await getPageMetadata("contact");
}

export default function ContactUs() {
  return (
    <>
      <ContactForm />
      <CTA />
    </>
  );
}
