import Image from "next/image";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import { Reveal } from "./ui/Reveal";

const Footer = () => {
  return (
    <footer id="contact" className="relative overflow-hidden border-t border-white/10 py-20 sm:py-28" aria-labelledby="contact-title">
      <Image src="/footer-grid.svg" alt="" fill className="pointer-events-none object-cover object-top opacity-20" />
      <Reveal className="relative z-10 flex flex-col items-center text-center">
        <p className="eyebrow">Have a project in mind?</p>
        <h2 id="contact-title" className="mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.05em] text-white sm:text-6xl">Let&apos;s build <span className="text-[#65e8df]">reliable</span> backend systems.</h2>
        <p className="mt-6 max-w-xl text-sm leading-6 text-[#aab5d1] sm:text-base">Need APIs, authentication, database design, or third-party integrations? Send me a message and let&apos;s talk.</p>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=kaqyword2304@gmail.com" target="_blank" rel="noopener noreferrer" className="focus-ring mt-8 w-full max-w-[260px] rounded-xl"><MagicButton title="Get in touch" icon={<FaArrowUpRightFromSquare />} position="right" /></a>
      </Reveal>
      <div className="relative z-10 mt-16 flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row">
        <span>© {new Date().getFullYear()} Rifki Anandita</span>
        <div className="flex items-center gap-3">
          {socialMedia.map((info) => <a key={info.id} href={info.link} target="_blank" rel="noopener noreferrer" aria-label="Open social profile" className="focus-ring flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-black/20 transition hover:border-[#65e8df]/50"><Image src={info.img} alt="" width={20} height={20} /></a>)}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
