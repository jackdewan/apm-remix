import { Config } from "~/utils/Config";
import { sectionHeader } from "./Section";
import { Link } from "@remix-run/react";
import { MailIcon } from "./svg/MailIcon";

export const Hero = () => {
  return (
    <section className="h-[65vh] min-h-[700px] bg-center bg-cover bg-no-repeat relative bg-primary">
      <img
        className="w-full h-full opacity-30 object-cover object-center"
        src="/assets/img/turning_mill_lathe_hero.jpg"
        alt="Turning Mill Lathe"
      />
      <div
        className={`text-white top-1/2 md:top-1/2 left-1/2 absolute text-center transform -translate-x-2/4 -translate-y-2/4 w-full px-4 max-w-screen-lg`}
      >
        <h1
          className={`block ${sectionHeader} font-comfort leading-snug lg:leading-normal`}
        >
          Experts in <span className="text-mazak">Mazak Mazatrol</span>{" "}
          Programming, Training and Consulting
        </h1>
        <h2 className="block text-xl mb-12">
          Improve your investment with{" "}
          <span className="text-mazak">smarter throughput</span>
        </h2>
        <div className="">
          <a
            href="mailto:hi@apmachining.co"
            className="text-primary bg-secondary hover:bg-secondary-600 focus:ring-4 focus:outline-none focus:ring-secondary/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-secondary/55 mr-2 mb-2"
          >
            Contact Us
            <MailIcon className="w-4 h-4 ml-2 -mr-1" />
          </a>
        </div>
      </div>
    </section>
  );
};
