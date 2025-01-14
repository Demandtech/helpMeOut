import Link from "next/link";
import { Logo } from "../../svgs";

function Footer() {
  return (
    <footer className="bg-primary py-10 font-inter">
      <div className="max-w-[1440px] mx-auto px-3 lg:px-20 flex flex-col lg:flex-row justify-between py-5 gap-10">
        <div className="lg:pt-5 lg:w-2/5">
          <Link href="/">
            <Logo innerfill="var(--primary)" fill="var(--white)" />
          </Link>
        </div>
        <div className="flex flex-wrap lg:flex-row  text-white justify-between lg:w-3/5 gap-5">
          <ul className="space-y-5 text-sm lg:text-base">
            <li className="font-semibold">Menu</li>
            <li className="font-light link-hover">
              <Link href="/">Home</Link>
            </li>
            <li className="font-light link-hover">
              <a href="#">Coverter</a>
            </li>
            <li className="font-light link-hover">
              <Link href="#howitworks">How it Works</Link>
            </li>
          </ul>
          <ul className="space-y-5 text-sm lg:text-base">
            <li className="font-semibold">About Us</li>
            <li className="font-light link-hover">
              <a href="#">About</a>
            </li>
            <li className="font-light link-hover">
              <a href="#">Contact Us</a>
            </li>
            <li className="font-light">
              <a href="#">Private Policy</a>
            </li>
          </ul>
          <ul className="space-y-5 text-sm lg:text-base">
            <li className="font-semibold ">Screen Record</li>
            <li className="font-light link-hover">
              <a href="#">Browser Window</a>
            </li>
            <li className="font-light link-hover">
              <a href="#">Desktop</a>
            </li>
            <li className="font-light link-hover">
              <a href="">Chrom extension</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
