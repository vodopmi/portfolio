import { Car } from "lucide-react";
import Carusel from "./carusel/BreakPoint";



export const Hero: React.FC = () => {
  const images = [
    "https://cdn.prod.website-files.com/67194ae3b2dc2cdbc27d80df/671bfb446693bbe517047418_823_253ed6145ab85106616e64308f0ca263.png",
    "https://cdn.prod.website-files.com/67194ae3b2dc2cdbc27d80df/671bfb497a30054fb007d002_850_3ad860595c4d066410a01a64868a8a6c.jpg",
    "https://cdn.prod.website-files.com/67194ae3b2dc2cdbc27d80df/671bfb48332024bb808a90a6_848_a9af8751369f9e5b5418f441562954f2.jpg",
    "https://cdn.prod.website-files.com/67194ae3b2dc2cdbc27d80df/671bfb21e10e678043f334f0_641_949934755b3ab84199b1d2c71ca72830.png",
    "https://cdn.prod.website-files.com/67194ae3b2dc2cdbc27d80df/671bfb4d44cedc753d47f4ab_864_48c45b974816175b24f20b94bc8f225f.jpg",
    "https://cdn.prod.website-files.com/67194ae3b2dc2cdbc27d80df/671bfb4bcd69d970b1b0322e_856_8b3e617cb1f74e3800c87499fc0365aa.png",
    "https://cdn.prod.website-files.com/67194ae3b2dc2cdbc27d80df/671bfb4be10e678043f357a4_859_0a785c00f9a1167cdf3a67125cd551dd.jpg",
    "https://cdn.prod.website-files.com/67194ae3b2dc2cdbc27d80df/671bfb4bc5c6fa4556652618_855_c471ebe897c5cda8a71d5d2fdefd0ed4.jpg",

  ];

  return (
    <section 
      id="hero"
      className="h-[800px] sm:h-screen w-screen relative bg-background">
      <div className="flex flex-col h-full relative py-14">
      <div className="relative z-10 h-full flex items-center">
        <Carusel />
      </div>
        <div className="mx-auto max-w-4xl py-8 sm:py-6 lg:py-12">
          <div className="text-center">
            <h2 className="text-center text-xl  md:text-xl lg:text-3xl font-medium mb-8 text-pretty text-primary">
              Mikhail Vodopianov
            </h2>
            <h1 data-cursor="AAA" className="text-balance text-5xl md:text-6xl lg:text-7xl 2xl:text-9xl font-semibold tracking-tight">
              Clarity Drives Every Detail
            </h1>
            <p className="mt-8 text-pretty text-lg lg:text-xl 2xl:text-2xl font-regular">
              Digital designer with two years in a few complex SaaS, building design systems and performance-driven features within small teams.
              <br></br>Currently in Belgrade, Serbia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};