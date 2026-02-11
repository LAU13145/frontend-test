import { BuildingLibraryIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const socialLinks = [
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465C9.673 2.013 10.03 2 12.48 2h-.165zm-2.37 1.734c-2.219.093-3.36.59-3.975 1.135a2.53 2.53 0 00-.943.943c-.545.615-1.042 1.756-1.135 3.975-.093 2.218-.093 2.218 0 4.437.093 2.219.59 3.36 1.135 3.975.303.338.64.64.943.943.615.545 1.756 1.042 3.975 1.135 2.218.093 2.218.093 4.437 0 2.219-.093 3.36-.59 3.975-1.135a2.53 2.53 0 00.943-.943c.545-.615 1.042-1.756 1.135-3.975.093-2.218.093-2.218 0-4.437-.093-2.219-.59-3.36-1.135-3.975a2.53 2.53 0 00-.943-.943c-.615-.545-1.756-1.042-3.975-1.135-2.218-.093-2.218-.093-4.437 0zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 2.162a3.997 3.997 0 110 7.994 3.997 3.997 0 010-7.994zm5.337-3.205a1.44 1.44 0 110 2.88 1.44 1.44 0 010-2.88z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "X",
    href: "https://twitter.com",
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
];

export const MainHeader = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-blue-900 shadow-lg">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <div className="rounded-lg bg-white p-2 shadow-md transition-transform duration-300 group-hover:scale-105">
            <BuildingLibraryIcon className="h-6 w-6 text-blue-900" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl leading-none font-bold tracking-tight text-white">
              Tu Banco
            </h1>
            <span className="text-xs font-semibold tracking-[0.2em] text-blue-200 uppercase">
              Preferente
            </span>
          </div>
        </Link>
        <div className="flex items-center gap-4">
          {socialLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-200 transition-colors hover:text-white"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-5 w-5" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};
