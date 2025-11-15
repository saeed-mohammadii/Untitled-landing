import ArrowRightIcon from "@/components/icons/ArrowRightIcon";

function NewBadge() {
  return (
      <div
          className="inline-flex items-center gap-2 xl:gap-3 border border-[#D5D7DA] rounded-[10px] pl-1 py-1 pr-[10px] shadow-[0_1px_2px_0_rgba(10,13,18,0.05)] bg-white w-max">
          {/* Left badge */}
          <div
              className="flex items-center gap-1 bg-white px-2 py-0.5 text-xs xl:text-sm font-medium border border-[#D5D7DA] rounded-[8px]">
              <span className="text-[#17B26A] rounded-full">●</span>
              <span className="text-[#414651]">New!</span>
          </div>

          {/* Text + icon */}
          <div className="flex items-center gap-1 text-[#414651] font-medium text-xs xl:text-sm">
              <span className="">Download the new iOS app</span>
              <ArrowRightIcon />
          </div>
      </div>
  );
}

export default NewBadge;