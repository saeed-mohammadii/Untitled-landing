import { MessageHeartCircle } from "@untitledui/icons";

export default function MessageHeartIcon() {
  return (
      <>
        <MessageHeartCircle size={20} color="#414651" className="block xl:hidden" />
        <MessageHeartCircle size={24} color="#414651" className="hidden xl:block" />
      </>
  );
}
