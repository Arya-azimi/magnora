interface SubmitButtonV3Props {
  buttonText: string;
}

export default function SubmitButtonV3({ buttonText }: SubmitButtonV3Props) {
  return (
    <button type="submit" className="w-full" aria-label={buttonText}>
      <div className="bg-background-13 font-ibm-plex-mono group text-tagline-2 text-background-7 flex h-[52px] w-full cursor-pointer flex-nowrap items-center justify-center gap-x-2.5 rounded-lg px-6 py-[13px] font-normal lowercase">
        <span className="shrink-0 first-letter:uppercase"> {buttonText} </span>
        {/* arrow icon */}
        <div className="relative top-[1.5px] flex size-6 items-center justify-center overflow-hidden">
          <span className="absolute flex translate-x-0 items-center justify-center opacity-100 transition-all duration-500 ease-in-out group-hover:translate-x-6 group-hover:opacity-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M6.75 13.5L11.25 9L6.75 4.5"
                stroke="#ffffff"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="absolute flex -translate-x-6 items-center justify-center opacity-0 transition-all duration-500 ease-in-out group-hover:translate-x-0 group-hover:opacity-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M6.75 13.5L11.25 9L6.75 4.5"
                stroke="#ffffff"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </div>
    </button>
  );
}