import { Section } from "./Section";
import { Typography } from "./Typography";
import { MailIcon } from "./svg/MailIcon";

interface CTAFullScreenProps {
  dark?: boolean;
}

export const CTAFullScreen = ({ dark }: CTAFullScreenProps) => {
  return (
    <Section title="Interested in Working With Us?" dark={dark}>
      <div className="text-center">
        <a
          href="mailto:hi@apmachining.co"
          className="text-secondary underline text-xl xl:text-2xl cursor-pointer"
        >
          <MailIcon className="h-6 w-6 md:h-10 md:w-10 inline-block mr-2" />
          hi@apmachining.co
        </a>
      </div>
    </Section>
  );
};
