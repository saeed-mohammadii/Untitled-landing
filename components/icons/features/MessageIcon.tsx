import { MessageChatCircle } from "@untitledui/icons";

function MessageIcon() {
  return (
      <>
        {/* Mobile icon (20px) */}
        <MessageChatCircle
            color="#414651"
            size={20}
            className="block xl:hidden"
        />

        {/* Desktop icon (24px) */}
        <MessageChatCircle
            color="#414651"
            size={24}
            className="hidden xl:block"
        />
      </>
  );
}

export default MessageIcon;
