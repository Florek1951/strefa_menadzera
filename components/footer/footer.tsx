import { prefix } from "@/lib/prefix";
import Image from "next/image";

const Footer = () => {
 return (
  <footer className="flex flex-col items-center w-full bg-blue-950">
   <div className="w-full max-w-[1400px] p-4">
    <img
     alt="Akademia Humanistyczno Ekonomiczna w Łodzi"
     src={`${prefix}/images/ahe-logo.png`}
    />
   </div>
  </footer>
 );
};

export default Footer;
