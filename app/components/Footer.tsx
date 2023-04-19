import Logo from "~/components/Logo";
import { Config } from "~/utils/Config";

const linkDarkBg = "hover:text-secondary hover:underline";
export const Footer = () => {
  return (
    <footer className="w-full bg-primary py-16 text-white">
      <div className="lg:grid lg:grid-cols-3 lg:gap-10 container">
        <div>
          <Logo footer />
          <div className="my-8">
            <p>{`${Config.location.city}, ${Config.location.state} ${Config.location.zip}`}</p>
          </div>
          <div className="mb-8">
            {/* <p className="mb-4">
              <a className={`${linkDarkBg}`} href="tel:8103545947">
                Phone: {Config.site.phone}
              </a>
            </p> */}
            <p>
              <a className={`${linkDarkBg}`} href="mailto:hi@apmachining.co">
                Email: {Config.site.email}
              </a>
            </p>
          </div>
        </div>
        <div className="md:mt-4 mb-8">
          <h3 className="text-xl mb-4 text-secondary">
            Find Us | <span className="italic">We&apos;re Social!</span>
          </h3>
          <p className="flex flex-col">
            <a
              className={`${linkDarkBg} mb-2`}
              href={Config.site.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className={`${linkDarkBg}`}
              href={Config.site.googleMaps}
              target="_blank"
              rel="noreferrer"
            >
              Google Maps
            </a>
          </p>
        </div>
        <div className="md:mt-4 max-w-sm">
          <h3 className="mb-4 text-xl text-secondary">About</h3>
          <p>
            Added Performance Machining helps companies of all sizes with their
            Mazatrol programming needs through expert training, programming and
            consulting services.
          </p>
        </div>
      </div>
    </footer>
  );
};
