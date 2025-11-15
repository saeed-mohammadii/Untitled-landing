import {ReactNode} from "react";

function FooterContainer({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col md:flex-row items-start justify-between gap-8 px-4 xl:px-8 max-w-[379px]  md:container mx-auto">
        {children}
    </div>
  );
}

export default FooterContainer;

// w-full max-w-screen-xl mx-auto