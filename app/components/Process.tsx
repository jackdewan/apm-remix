import { Typography } from "./Typography";
import { BagIcon } from "./svg/BagIcon";
import { BoltIcon } from "./svg/BoltIcon";
import { ChartIcon } from "./svg/ChartIcon";

const columns = [
  {
    icon: <BagIcon />,
    title: "Mazatrol Services",
    body: "We can improve efficiency and positively affect your company’s bottom line as a pre-production engineer, process improvement engineer, an expert trainer of Mazatrol/Mazak processes, or as a spot fill for an operator.",
  },
  {
    icon: <BoltIcon />,
    title: "Experience",
    body: "Added Performance Machining has extensive experience in Mazatrol programming, processing, tooling, training and troubleshooting.",
  },
  {
    icon: <ChartIcon />,
    title: "About",
    body: "With over 25 years experience with Mazatrol programming, we are able to consistently and dramatically increase your work-piece through-put.",
  },
];

export const Process = () => {
  return (
    <section className="bg-primary py-16 text-white text-center px-8 w-full">
      <div className="max-w-screen-lg mx-auto">
        <Typography as="h2">
          <>
            We do Process <span className="text-secondary">Improvement</span>
          </>
        </Typography>
        <Typography as="h3">
          Specializing in Mazak lathes, our vast experience with Mazatrol
          programming will change the way you work for the better.
        </Typography>
        <div className="lg:grid lg:grid-cols-3 lg:gap-16">
          {columns.map((item) => (
            <div key={item.title} className="my-16 max-w-lg mx-auto">
              <div className="block mb-4 text-secondary">{item.icon}</div>
              <h4 className="mb-4 text-2xl">{item.title}</h4>
              <p className="text-left md:text-center">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
