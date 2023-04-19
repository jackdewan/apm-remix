import { Link } from "@remix-run/react";

interface LogoProps {
  footer?: boolean;
  setOpen: (arg0: boolean) => void;
}

export default function Logo({ footer, setOpen }: LogoProps) {
  return (
    <div>
      <div className="hidden md:block">
        {/* <svg id="Logo" xmlns="http://www.w3.org/2000/svg" width="350" height="23.973" viewBox="0 0 350 23.973">
          <text id="Added_Performance_Machining" data-name="Added Performance Machining" transform="translate(0 18)" fill="#40add0" fontSize="23" fontFamily="BCAlphapipeTSB-Bold, BC Alphapipe, Roboto" fontWeight="600"><tspan x="0" y="0">Added Performance Machining</tspan></text>
        </svg> */}
        <Link to="/" className="text-secondary text-2xl font-comfort">
          Added Performance Machining
        </Link>
      </div>
      <div className="block md:hidden">
        <Link
          to="/"
          className="text-secondary text-2xl font-comfort tracking-wide font-bold"
          onClick={() => setOpen(false)}
        >
          {footer ? (
            // <div className="flex flex-col space-y-1">
            //   <span></span>
            //   {/* <span>Performance</span> */}
            //   {/* <span>Machining</span> */}
            // </div>
            <>Added Performance Machining</>
          ) : (
            <>APM</>
          )}
        </Link>
      </div>
    </div>
  );
}
