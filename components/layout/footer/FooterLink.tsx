import Link from "next/link";
function FooterLink({children}: {children: React.ReactNode}) {return (
    <div className="flex flex-col gap-2 shrink-0">
        <Link href="/public" className="font-semibold text-[#94979C]">
            {children}
        </Link>
    </div>
);
}
export default FooterLink;

