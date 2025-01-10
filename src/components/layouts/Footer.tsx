import Link from "next/link";
import { Logo } from "../svgs";

function Footer() {
  return (
    <footer className="bg-primary py-10">
      <div className="max-w-[1440px] mx-auto px-3 lg:px-20 flex flex-col lg:flex-row justify-between py-5 gap-10">
        <div className="pt-5 lg:w-2/5">
          <Link href="/">
            <Logo innerfill="var(--primary)" fill="var(--white)" />
          </Link>
        </div>
        <div className="flex flex-col lg:flex-row text-white justify-between lg:w-3/5 gap-5">
          <ul className="space-y-5">
            <li className="font-semibold">Menu</li>
            <li className="font-light">
              <Link href="/">Home</Link>
            </li>
            <li className="font-light">Coverter</li>
            <li className="font-light">
              <Link href="#howitworks">How it Works</Link>
            </li>
          </ul>
          <ul className="space-y-5">
            <li className="font-semibold">About Us</li>
            <li className="font-light">About</li>
            <li className="font-light">Contact Us</li>
            <li className="font-light">Private Policy</li>
          </ul>
          <ul className="space-y-5">
            <li className="font-semibold">Screen Record</li>
            <li className="font-light">Browser Window</li>
            <li className="font-light">Desktop</li>
            <li className="font-light">Chrom extension</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
