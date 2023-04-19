interface TypographyProps {
  as?: string;
  subheading?: string;
  children: JSX.Element | string;
}

const baseHeadingClasses = "";

export const Typography = ({ as, subheading, children }: TypographyProps) => {
  if (as === "h1") {
    return (
      <h1 className={`${baseHeadingClasses} font-comfort text-4xl font-bold`}>
        {children}
      </h1>
    );
  }

  if (as === "h2") {
    return (
      <div className="mb-20">
        <h2
          className={`${baseHeadingClasses} font-comfort text-4xl md:text-5xl font-bold text-center ${
            subheading ? "mb-6" : ""
          }`}
        >
          {children}
        </h2>
        {subheading ? <p>{subheading}</p> : null}
      </div>
    );
  }

  if (as === "h3") {
    return (
      <h3
        className={`${baseHeadingClasses} text-xl mb-12 max-w-screen-md mx-auto`}
      >
        {children}
      </h3>
    );
  }
  return <p>{children}</p>;
};
