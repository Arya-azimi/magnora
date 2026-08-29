"use client";

import Image from "next/image";
import Link from "next/link";

export default function ConnectPage() {
  return (
    <main className="relative flex h-[100dvh] w-full flex-col justify-between overflow-hidden bg-[#04070c]">
      <style>{`
        /* High-Contrast Grid */
        .dark-grid-bg {
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.12) 1px, transparent 1px);
          background-size: 45px 45px;
          background-position: center center;
        }

        /* Ambient Light Waves */
        @keyframes waveAnimation {
          0% { transform: translate(-50%, -50%) rotate(0deg) scale(1); opacity: 0.3; }
          50% { transform: translate(10% , 20%) rotate(180deg) scale(1.5); opacity: 0.8; }
          100% { transform: translate(-50%, -50%) rotate(360deg) scale(1); opacity: 0.3; }
        }
        .wave-light-1 {
          background: radial-gradient(circle, rgba(37,99,235,0.45) 0%, transparent 60%);
          animation: waveAnimation 12s infinite ease-in-out;
        }
        .wave-light-2 {
          background: radial-gradient(circle, rgba(14,165,233,0.35) 0%, transparent 60%);
          animation: waveAnimation 15s infinite ease-in-out reverse;
        }

        /* Custom Gmail Button (Google Colors) */
        .gmail-btn {
          position: relative;
          border: 1px solid transparent;
          background: linear-gradient(#0a0f1c, #0a0f1c) padding-box,
                      linear-gradient(45deg, #4285F4, #EA4335, #FBBC05, #34A853) border-box;
          box-shadow: 0 0 15px rgba(234, 67, 53, 0.15), 0 0 15px rgba(66, 133, 244, 0.15);
        }
        .gmail-btn:hover {
          box-shadow: 0 0 25px rgba(234, 67, 53, 0.3), 0 0 25px rgba(66, 133, 244, 0.3);
          background: linear-gradient(#0d1424, #0d1424) padding-box,
                      linear-gradient(45deg, #4285F4, #EA4335, #FBBC05, #34A853) border-box;
        }
        .gmail-text {
          background: linear-gradient(90deg, #4285F4, #EA4335, #FBBC05, #34A853);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>

      <div className="absolute inset-0 z-0 bg-[#04070c]"></div>
      <div className="wave-light-1 absolute left-0 top-0 z-0 h-[150%] w-[150%] origin-center mix-blend-screen"></div>
      <div className="wave-light-2 absolute bottom-0 right-0 z-0 h-[120%] w-[120%] origin-center mix-blend-screen"></div>
      <div className="dark-grid-bg absolute inset-0 z-0"></div>
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,transparent_0%,#04070c_100%)]"></div>

      <div className="relative z-10 mt-10 px-6 text-center shrink-0">
        <h1 className="font-sora text-5xl font-black tracking-tighter text-white drop-shadow-[0_0_15px_rgba(37,99,235,0.6)]">
          Magnora<span className="text-blue-500">.</span>
        </h1>
        <p className="font-inter-tight mt-2 text-sm font-medium tracking-wide text-slate-400">
          Intelligent AI Solutions.
        </p>
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-1 flex-col gap-6 px-6 py-6 md:flex-row">
        <div className="group flex flex-1 flex-col items-center justify-center gap-4 rounded-[2rem] border border-white/20 bg-[#0a0f1c]/70 p-6 text-center shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] backdrop-blur-xl transition-all hover:border-blue-500/40 hover:bg-[#0a0f1c]/90 hover:shadow-[0_0_30px_rgba(37,99,235,0.2)]">
          <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full border-2 border-slate-600 shadow-inner transition-colors group-hover:border-blue-500 lg:h-28 lg:w-28">
            <Image
              src="/images/members/arya1.webp"
              alt="Arya Azimi"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col items-center">
            <h2 className="font-sora text-xl font-bold tracking-wide text-white">
              Arya Azimi
            </h2>
            <p className="font-inter-tight mb-4 mt-1 text-[10px] font-bold uppercase tracking-widest text-blue-400 opacity-90">
              Co-Founder | AI Eng
            </p>
            <div className="flex gap-4">
              <Link
                href="https://github.com/Arya-azimi"
                target="_blank"
                className="flex size-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-slate-300 transition-all hover:border-white hover:bg-white hover:text-black"
              >
                <GithubIcon />
              </Link>
              <Link
                href="https://www.linkedin.com/in/arya-azimi-862693416/"
                target="_blank"
                className="flex size-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-slate-300 transition-all hover:border-[#0A66C2] hover:bg-[#0A66C2] hover:text-white"
              >
                <LinkedinIcon />
              </Link>
            </div>
          </div>
        </div>

        <div className="group flex flex-1 flex-col items-center justify-center gap-4 rounded-[2rem] border border-white/20 bg-[#0a0f1c]/70 p-6 text-center shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] backdrop-blur-xl transition-all hover:border-cyan-500/40 hover:bg-[#0a0f1c]/90 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]">
          <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full border-2 border-slate-600 shadow-inner transition-colors group-hover:border-cyan-500 lg:h-28 lg:w-28">
            <Image
              src="/images/members/ehsan1.webp"
              alt="Ehsan Firouzbakht"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col items-center">
            <h2 className="font-sora text-xl font-bold tracking-wide text-white">
              Ehsan Firouzbakht
            </h2>
            <p className="font-inter-tight mb-4 mt-1 text-[10px] font-bold uppercase tracking-widest text-cyan-400 opacity-90">
              Co-Founder | Data Sci
            </p>
            <div className="flex gap-4">
              <Link
                href="https://github.com/EhsanFiroozbakht"
                target="_blank"
                className="flex size-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-slate-300 transition-all hover:border-white hover:bg-white hover:text-black"
              >
                <GithubIcon />
              </Link>
              <Link
                href="https://www.linkedin.com/in/ehsan-firoozbakht-5456972a9"
                target="_blank"
                className="flex size-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-slate-300 transition-all hover:border-[#0A66C2] hover:bg-[#0A66C2] hover:text-white"
              >
                <LinkedinIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-20 mt-auto shrink-0 w-full rounded-t-[2.5rem] border-t border-white/10 bg-[#0a0f1c]/90 p-6 pb-8 shadow-[0_-20px_50px_rgba(0,0,0,0.8)] backdrop-blur-3xl">
        <div className="mx-auto grid w-full max-w-4xl grid-cols-2 gap-4 md:grid-cols-4">
          <Link
            href="tel:09104082056"
            className="group flex items-center justify-center gap-2 rounded-2xl border border-orange-500/50 bg-orange-900/20 py-4 shadow-[0_0_15px_rgba(249,115,22,0.15)] transition-all hover:border-orange-400 hover:bg-orange-800/30 hover:shadow-[0_0_25px_rgba(249,115,22,0.4)] active:scale-95 md:flex-col md:gap-2"
          >
            <PhoneIcon className="text-orange-400 transition-colors group-hover:text-orange-300" />
            <span className="text-xs font-bold text-orange-400 transition-colors group-hover:text-orange-300 md:text-xs">
              Call Us
            </span>
          </Link>

          <Link
            href="mailto:ai@magnora.tech"
            className="gmail-btn group flex items-center justify-center gap-2 rounded-2xl py-4 transition-all active:scale-95 md:flex-col md:gap-2"
          >
            <MailIcon className="text-white group-hover:scale-110 transition-transform" />
            <span className="gmail-text text-xs font-bold md:text-xs">
              Email Us
            </span>
          </Link>

          <Link
            href="https://t.me/magnoratech"
            target="_blank"
            className="group flex items-center justify-center gap-2 rounded-2xl border border-blue-500/50 bg-blue-900/20 py-4 shadow-[0_0_15px_rgba(59,130,246,0.15)] transition-all hover:border-blue-400 hover:bg-blue-800/30 hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] active:scale-95 md:flex-col md:gap-2"
          >
            <TelegramIcon className="text-blue-400 group-hover:text-blue-300 transition-colors" />
            <span className="text-xs font-bold text-blue-400 group-hover:text-blue-300 transition-colors md:text-xs">
              Telegram
            </span>
          </Link>

          <Link
            href="https://wa.me/989104082056"
            target="_blank"
            className="group flex items-center justify-center gap-2 rounded-2xl border border-emerald-500/50 bg-emerald-900/20 py-4 shadow-[0_0_15px_rgba(16,185,129,0.15)] transition-all hover:border-emerald-400 hover:bg-emerald-800/30 hover:shadow-[0_0_25px_rgba(16,185,129,0.4)] active:scale-95 md:flex-col md:gap-2"
          >
            <WhatsappIcon className="text-emerald-400 group-hover:text-emerald-300 transition-colors" />
            <span className="text-xs font-bold text-emerald-400 group-hover:text-emerald-300 transition-colors md:text-xs">
              WhatsApp
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
}

// --- Icons (SVG Components - Adjusted for Styling) ---
function GithubIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
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
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
function PhoneIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
function MailIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <rect
        width="20"
        height="16"
        x="2"
        y="4"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M2 7l4.5 2.85"
        stroke="#EA4335"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 7l-4.5 2.85"
        stroke="#FBBC05"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function TelegramIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  );
}
function WhatsappIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
