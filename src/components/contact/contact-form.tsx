"use client"; // این خط برای استفاده از جاوااسکریپت در نکست‌جی‌اس ضروریه

import { useState } from "react";
import Image from "next/image";
import PrimarySubmitButton from "../shared/button/primary-submit-button";
import TextReveal from "../animation/TextReveal";

export default function ContactForm() {
  // برای مدیریت وضعیت ارسال (خالی، در حال ارسال، موفق، خطا)
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // جلوی رفرش شدن و رفتن به صفحه جدید رو می‌گیره
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      // توجه: کلمه ajax به آدرس اضافه شده است
      const response = await fetch(
        "https://formsubmit.co/ajax/ai@magnora.tech",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        },
      );

      if (response.ok) {
        setStatus("success");
        form.reset(); // فرم رو بعد از ارسال موفق خالی می‌کنه

        // پیام موفقیت بعد از 5 ثانیه غیب میشه
        setTimeout(() => setStatus(""), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section className="pt-28 pb-20 md:pt-39 md:pb-28 lg:pb-39">
      <div className="main-container">
        <div className="space-y-10 lg:space-y-14">
          <div className="space-y-3 text-center">
            <h2 className="font-sora text-sora-heading-4 md:text-sora-heading-3 lg:text-sora-heading-2 text-background-13/90 mx-auto max-w-[600px] font-normal">
              Reach out — We’ll get back within 24 hours
            </h2>
            <p
              data-text-reveal
              data-delay="0.2"
              className="font-inter-tight text-tagline-2 text-background-13/60 mx-auto max-w-[300px] font-normal"
            >
              Fill out the form below, and a member of our team will be in touch
              shortly.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-y-10 rounded-xl bg-white p-4 md:rounded-3xl md:p-8 lg:flex-row lg:gap-x-14 lg:gap-y-0">
            {/* اضافه شدن هندلر onSubmit به فرم و حذف action */}
            <form
              action="https://formsubmit.co/ai@magnora.tech"
              method="POST"
              className="w-full space-y-6"
            >
              {" "}
              <input type="hidden" name="_captcha" value="false" />
              <div>
                <fieldset className="mb-6 space-y-2">
                  <label
                    htmlFor="name"
                    className="text-inter-tight text-tagline-23font-normal text-background-13/90 inline-block"
                  >
                    Your name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    className="border-stroke-3/18 bg-background-7 focus-within:border-stroke-1/70 text-background-13/90 placeholder:text-background-13/60 w-full rounded-lg border px-4.5 py-3 focus-within:outline-none"
                    required
                    aria-label="Your name"
                  />
                </fieldset>

                <fieldset className="mb-6 space-y-2">
                  <label
                    htmlFor="email"
                    className="text-inter-tight text-tagline-23font-normal text-background-13/90 inline-block"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    className="border-stroke-3/18 bg-background-7 focus-within:border-stroke-1/70 text-background-13/90 placeholder:text-background-13/60 w-full rounded-lg border px-4.5 py-3 focus-within:outline-none"
                    required
                    aria-label="Your email"
                  />
                </fieldset>

                <fieldset className="mb-4 space-y-2">
                  <label
                    htmlFor="message"
                    className="text-inter-tight text-tagline-23font-normal text-background-13/90 inline-block"
                  >
                    Your message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Enter your message"
                    className="border-stroke-3/18 bg-background-7 focus-within:border-stroke-1/70 text-background-13/90 placeholder:text-background-13/60 h-45.5 w-full rounded-lg border px-4.5 py-3 focus-within:outline-none"
                    required
                  ></textarea>
                </fieldset>

                <fieldset className="mb-14 flex items-center justify-between gap-x-5">
                  <label className="flex cursor-pointer items-center gap-x-3 sm:gap-1.5">
                    <input
                      type="checkbox"
                      name="terms"
                      className="peer sr-only"
                      required
                      aria-label="I accept with the Terms of uses and privacy policy"
                    />
                    <span className="border-stroke-3/18 peer-checked:border-background-13/60 after:bg-background-13/50 relative size-5 cursor-pointer rounded-[2px] border after:absolute after:top-1/2 after:left-1/2 after:size-3 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-[2px] after:opacity-0 peer-checked:after:opacity-100"></span>
                    <span className="text-tagline-3 text-background-13/60 peer-checked:text-background-13/90 font-medium select-none">
                      I accept with the Terms of uses and privacy policy
                    </span>
                  </label>
                </fieldset>

                <div className="inline-block flex-col space-y-3">
                  {/* تغییر متن دکمه در زمان ارسال */}
                  <PrimarySubmitButton
                    buttonText={
                      status === "sending" ? "Sending..." : "Submit request"
                    }
                  />

                  {/* پیام‌های وضعیت */}
                  {status === "success" && (
                    <p className="text-sm font-medium text-green-600">
                      Message sent successfully! We'll be in touch.
                    </p>
                  )}
                  {status === "error" && (
                    <p className="text-sm font-medium text-red-600">
                      Oops! Something went wrong. Please try again.
                    </p>
                  )}
                </div>
              </div>
            </form>

            <div className="h-[330px] w-full rounded-2xl md:h-[563px]">
              <figure className="relative size-full overflow-hidden rounded-2xl">
                <Image
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  src="/images/opai-img-27 (1).webp"
                  alt="contact-form-img"
                  className="size-full object-cover"
                  loading="eager"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
