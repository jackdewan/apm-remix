import { Typography } from "./Typography";

export const About = () => {
  return (
    <section className="py-16 container max-w-6xl">
      <Typography as="h2">About Us</Typography>
      <div className="md:flex md:items-center md:justify-between">
        <div className="text-left md:text-xl md:max-w-lg">
          <p className="mb-8">
            Tom Herzog founded Added Performance Machining after being employed
            at Mazak Corporation as an Applications Engineer for almost 20
            years.
          </p>
          <p className="mb-8">
            In the fifteen years before Mazak, he gained knowledge and
            experience by working in every area of his father’s shop, Michigan
            Automatic Turning where the main business included manufacturing and
            machining transmission shafts and gears with CNC machines.
          </p>
        </div>
        <div className="mb-16">
          <img className="" src="/assets/img/tom_herzog.jpg" alt="Tom Herzog" />
        </div>
      </div>
    </section>
  );
};
