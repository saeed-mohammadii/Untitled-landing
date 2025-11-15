import { Command } from "@untitledui/icons";

export default function CommandIcon() {
  return (
      <>
        <Command size={20} color="#414651" className="block xl:hidden" />
        <Command size={24} color="#414651" className="hidden xl:block" />
      </>
  );
}
