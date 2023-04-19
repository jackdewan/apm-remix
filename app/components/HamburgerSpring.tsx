import { useState } from "react";

interface HamburgerSpringProps {
  open: boolean;
  setOpen: () => void;
}

export const HamburgerSpring = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <button
      onClick={() => setIsActive(!isActive)}
      className={`hamburger hamburger--spring ${isActive ? "is-active" : ""}`}
      type="button"
    >
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </button>
  );
};
