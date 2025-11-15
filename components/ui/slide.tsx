import {ReactNode} from "react";
import StarIcon from "@/components/icons/StarIcon";

function Slide({children, name, company, position, quote}: {children: ReactNode, name: string, company: string, position: string, quote?: boolean}) {
  const stars = new Array(5).fill(0);
  return (
    <div className="keen-slider__slide w-[288px] h-[384px] xl:w-[360px] xl:h-[480px] relative text-white cursor-pointer">
      {children}
      <div className={`absolute bottom-0 pt-16 xl:pt-24 px-3 xl:px-5 pb-3 md:pb-5 w-full bg-gradient-to-t from-black/40 to-transparent`}>
        <div className="bg-[#FFFFFF4D] backdrop-blur-[12px] px-4 py-6 xl:p-5 flex flex-col gap-1.5 xl:gap-2 border border-[#FFFFFF4D] rounded-xl ">
          <div className="flex flex-col gap-6">
              {quote && <p className="hidden xl:block text-xl font-semibold text-white">
                  “We’ve really sped up our workflow using Untitled.”
              </p>}

              <div className="flex flex-col gap-4">
                  <div className="flex gap-1">
                      {
                          stars.map((_, i) => (
                              <StarIcon key={i}/>
                          ))
                      }
                  </div>
                  <span className="font-semibold text-2xl xl:text-3xl">{name}</span>
              </div>
          </div>

            <div className="flex flex-col gap-0.5">
              <span className="font-semibold xl:text-lg">{company}</span>
              <span className="font-medium text-sm xl:text-base">{position}</span>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Slide;

// ${quote ? "xl:top-[104px]" : "xl:top-[188px]"}