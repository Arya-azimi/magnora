import Image from "next/image";
import Link from "next/link";

export default function ConnectPage() {
  return (
    <main className="relative flex h-[100dvh] w-full flex-col items-center justify-center overflow-hidden bg-[#f1f4f6] px-4">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="absolute top-[20%] left-[10%] -z-10 h-[250px] w-[250px] rounded-full bg-blue-400/20 blur-[80px]"></div>
      <div className="absolute bottom-[20%] right-[10%] -z-10 h-[250px] w-[250px] rounded-full bg-cyan-400/20 blur-[80px]"></div>

      <div className="z-10 flex w-full max-w-[400px] flex-col gap-6">
        <div className="text-center">
          <h1 className="font-sora text-3xl font-bold tracking-tight text-slate-800">
            Magnora <span className="text-blue-600">.</span>
          </h1>
          <p className="font-inter-tight text-sm text-slate-500 mt-1">
            AI & Data Driven Solutions
          </p>
        </div>

        <div className="flex w-full gap-3">
          <div className="group relative flex flex-1 flex-col items-center rounded-3xl border border-white/60 bg-white/40 p-4 shadow-xl shadow-blue-900/5 backdrop-blur-md transition-all">
            <div className="relative mb-3 h-20 w-20 overflow-hidden rounded-full border-2 border-white shadow-md shadow-blue-500/20">
              <Image
                src="/images/members/arya1.webp"
                alt="Arya Azimi"
                fill
                className="object-cover"
              />
            </div>
            <h2 className="font-sora text-sm font-semibold text-slate-800">
              Arya Azimi
            </h2>
            <p className="mb-4 text-[10px] font-medium text-blue-600/80">
              Co-Founder | AI Eng
            </p>
            <div className="flex gap-3">
              <Link
                href="https://github.com/Arya-azimi"
                target="_blank"
                className="text-slate-400 transition-colors hover:text-slate-800"
              >
                <GithubIcon />
              </Link>
              <Link
                href="https://www.linkedin.com/in/arya-azimi-862693416/"
                target="_blank"
                className="text-slate-400 transition-colors hover:text-blue-600"
              >
                <LinkedinIcon />
              </Link>
            </div>
          </div>

          <div className="group relative flex flex-1 flex-col items-center rounded-3xl border border-white/60 bg-white/40 p-4 shadow-xl shadow-blue-900/5 backdrop-blur-md transition-all">
            <div className="relative mb-3 h-20 w-20 overflow-hidden rounded-full border-2 border-white shadow-md shadow-blue-500/20">
              <Image
                src="/images/members/ehsan1.webp"
                alt="Ehsan Firouzbakht"
                fill
                className="object-cover"
              />
            </div>
            <h2 className="font-sora text-sm font-semibold text-slate-800">
              Ehsan Firouzbakht
            </h2>
            <p className="mb-4 text-[10px] font-medium text-blue-600/80">
              Co-Founder | Data Sci
            </p>
            <div className="flex gap-3">
              <Link
                href="https://github.com/EhsanFiroozbakht"
                target="_blank"
                className="text-slate-400 transition-colors hover:text-slate-800"
              >
                <GithubIcon />
              </Link>
              <Link
                href="https://www.linkedin.com/in/ehsan-firoozbakht-5456972a9"
                target="_blank"
                className="text-slate-400 transition-colors hover:text-blue-600"
              >
                <LinkedinIcon />
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 mt-2">
          <Link
            href="tel:09104082056"
            className="flex items-center justify-center gap-2 rounded-2xl bg-white/60 py-3 text-xs font-medium text-slate-700 shadow-sm backdrop-blur-sm transition-all hover:bg-white"
          >
            <PhoneIcon /> Call Us
          </Link>
          <Link
            href="mailto:ai@magnora.tech"
            className="flex items-center justify-center gap-2 rounded-2xl bg-white/60 py-3 text-xs font-medium text-slate-700 shadow-sm backdrop-blur-sm transition-all hover:bg-white"
          >
            <MailIcon /> Email
          </Link>
          <Link
            href="https://t.me/magnoratech"
            target="_blank"
            className="flex items-center justify-center gap-2 rounded-2xl bg-blue-500 py-3 text-xs font-medium text-white shadow-lg shadow-blue-500/30 transition-all hover:bg-blue-600"
          >
            <TelegramIcon /> Telegram
          </Link>

          <Link
            href="https://wa.me/989104082056"
            target="_blank"
            className="flex items-center justify-center gap-2 rounded-2xl bg-green-500 py-3 text-xs font-medium text-white shadow-lg shadow-green-500/30 transition-all hover:bg-green-600"
          >
            <WhatsappIcon /> WhatsApp
          </Link>
        </div>
      </div>
    </main>
  );
}

// --- Icons (SVG Components) ---
function GithubIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}
function LinkedinIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}
function TelegramIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  );
}
function WhatsappIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
