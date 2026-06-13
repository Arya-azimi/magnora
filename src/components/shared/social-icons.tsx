import Link from "next/link";

export default function SocialIcons() {
  return (
    <ul className="flex items-center gap-3">
      <li>
        <Link href="#" className="inline-block transition-transform duration-500 hover:-translate-y-1">
          <span className="sr-only">Facebook</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19Z"
              stroke="#CED7DE"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.75 6.25H12.25C11.6533 6.25 11.081 6.48705 10.659 6.90901C10.2371 7.33097 10 7.90326 10 8.5V19"
              stroke="#CED7DE"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M7 11.5H13" stroke="#CED7DE" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </li>
      <li>
        <Link href="#" className="inline-block transition-transform duration-500 hover:-translate-y-1">
          <span className="sr-only">Instagram</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M10 13.75C12.0711 13.75 13.75 12.0711 13.75 10C13.75 7.92893 12.0711 6.25 10 6.25C7.92893 6.25 6.25 7.92893 6.25 10C6.25 12.0711 7.92893 13.75 10 13.75Z"
              stroke="#CED7DE"
              strokeMiterlimit="10"
            />
            <path
              d="M14.125 1.375H5.875C3.38972 1.375 1.375 3.38972 1.375 5.875V14.125C1.375 16.6103 3.38972 18.625 5.875 18.625H14.125C16.6103 18.625 18.625 16.6103 18.625 14.125V5.875C18.625 3.38972 16.6103 1.375 14.125 1.375Z"
              stroke="#CED7DE"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.875 6.25C15.4963 6.25 16 5.74632 16 5.125C16 4.50368 15.4963 4 14.875 4C14.2537 4 13.75 4.50368 13.75 5.125C13.75 5.74632 14.2537 6.25 14.875 6.25Z"
              fill="#CED7DE"
            />
          </svg>
        </Link>
      </li>
      <li>
        <Link href="#" className="inline-block transition-transform duration-500 hover:-translate-y-1">
          <span className="sr-only">X</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
            <path
              d="M15.2955 1L9.19287 7.29329M7.11364 9.4375L0.75 16M0.75 1L12.1136 16H15.75L4.38636 1H0.75Z"
              stroke="#CED7DE"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </li>
    </ul>
  );
}