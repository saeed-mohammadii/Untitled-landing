import Link from "next/link";
import {type ComponentType, ReactNode, type SVGProps} from "react";

type IconType = ComponentType<SVGProps<SVGSVGElement>>;

interface TProps {
    label: string;
    icon?: ReactNode;
    bgColor?:string;
    textColor?:string;
}
function NavLink({label, icon: Icon, bgColor, textColor}: TProps) {
  return (
    <li className="flex md:flex-row-reverse justify-end  px-[4px] py-[8px]" style={{ backgroundColor: bgColor }}>
        {Icon}
        <Link style={{color: textColor}} className="no-underline text-[#535862] " href="/">
            {label}
        </Link>
    </li>
  );
}

export default NavLink;