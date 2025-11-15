import { MessageSmileCircle } from "@untitledui/icons";

export default function MessageSmileIcon() {
  return (
      <>
        <MessageSmileCircle size={20} color="#414651" className="block xl:hidden" />
        <MessageSmileCircle size={24} color="#414651" className="hidden xl:block" />
      </>
  );
}
