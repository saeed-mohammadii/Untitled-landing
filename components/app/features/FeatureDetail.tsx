import {ReactNode} from "react";

function FeatureDetail({children, icon}: {children: ReactNode, icon: React.ReactNode}) {
  return (
    <div className="flex flex-col items-center gap-4">
        <div className="w-[40px] h-[40px] md:w-[48px] md:h-[48px] border border border-[#E9EAEB] shadow-xs rounded-md flex justify-center items-center">
            {icon}
        </div>
        <div className="flex flex-col gap-1 text-center">
            {children}
        </div>
    </div>
  );
}

export default FeatureDetail;