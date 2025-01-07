import Gravity, { MatterBody } from "@/components/fancy/gravity";

export const Footer = () => {
  return (
    <footer id="footer" className="w-screen sticky bottom-0 z-[-100] bg-primary text-white">
      <section className="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
        <div className="col-span-full xl:col-span-2">
          <a
            rel="noreferrer noopener"
            href="/"
            className="font-medium text-4xl md:text-8xl flex"
          >
            MIKHAIL VODOPIANOV
          </a>
        </div>
      </section>
    </footer>
  );
};
