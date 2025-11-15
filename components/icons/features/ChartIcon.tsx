import { ChartBreakoutSquare } from "@untitledui/icons";

export default function ChartIcon() {
  return (
      <>
        <ChartBreakoutSquare size={20} color="#414651" className="block xl:hidden" />
        <ChartBreakoutSquare size={24} color="#414651" className="hidden xl:block" />
      </>
  );
}
