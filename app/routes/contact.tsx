import type { V2_MetaFunction } from "@remix-run/node";
import { CTAFullScreen } from "~/components/CTAFullScreen";

export const meta: V2_MetaFunction = () => {
  return [{ title: `Contact | Added Performance Machining` }];
};

export default function Contact() {
  return (
    <div className="flex justify-center items-center h-full">
      <CTAFullScreen />;
    </div>
  );
}
