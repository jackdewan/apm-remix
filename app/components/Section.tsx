import { Typography } from "./Typography";

interface SectionProps {
  title: string;
  className?: string;
  dark?: boolean;
  children: JSX.Element;
}

export const sectionHeader = "text-4xl md:text-5xl font-bold mb-8 text-center";

export const Section = ({ title, className, dark, children }: SectionProps) => {
  return (
    <section className={`py-24 ${dark ? "bg-primary text-white" : ""}`}>
      <Typography as="h2">{title}</Typography>
      {children}
    </section>
  );
};
