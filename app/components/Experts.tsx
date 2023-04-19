import { Typography } from "./Typography";

export const Experts = () => {
  return (
    <section className="w-full px-8 py-16">
      <div className="max-w-screen-lg mx-auto">
        <Typography as="h2">
          <>
            <span className="text-mazak">Mazak Mazatrol</span> Programming,
            Processing, Tooling, Training and Troubleshooting
          </>
        </Typography>
        <div className="">
          <div className="md:text-xl">
            <h3 className="mb-8 md:mb-16">
              Times of high workload present a great opportunity for increased
              efficiency. The name of our company, Added Performance Machining,
              says a lot about what we do. We are experts in Mazatrol
              programming, processing, tooling, training, and work holding.
            </h3>
            <p className="mb-8 md:mb-16 font-bold text-2xl text-center text-secondary-700">
              We specialize in process improvement for increased efficiency and
              more through-put on Mazak lathes.
            </p>
            <div className="mb-8 md:mb-16 text-center">
              <img
                className="mx-auto"
                src="/assets/img/Mazak_QUICK_TURN_100-600x450.png"
                alt="Mazak Quick Turn CNC Lathe"
              />
              <p className="hover:underline text-xs">
                <a href="https://www.mazakusa.com/machines/quick-turn-100/">
                  Photo Credit: Mazak USA Corporation
                </a>
              </p>
            </div>
            <p className="mb-8 md:mb-16">
              Since the inception of Added Performance Machining, we have been
              able to consistently and dramatically increase work-piece
              through-put. The attention we give to setup rigidity and
              professional Mazatrol processing are key factors to APM’s success.
              We are available for hire in several different capacities.
            </p>
            <p className="mb-8 md:mb-16">
              We will improve efficiency and positively affect your company’s
              bottom line as a pre-production engineer, process improvement
              engineer, an expert trainer of Mazatrol/Mazak processes, or as a
              spot fill for operators. You can view our testimonials on our
              experience page. There is no long-term commitment on your part.
              You only contract for our time to fit your needs. You incur no
              social security tax or insurance costs. No overtime.
            </p>
            <p className="mb-8 md:mb-8 md:text-2xl">
              We would love to talk to you about your specific needs:
            </p>
            <div className="mb-8 md:mb-16">
              <ul className="list-disc list-inside">
                <li>Mazatrol Training</li>
                <li>Mazatrol Programming</li>
                <li>Mazak Lathe Consulting</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
