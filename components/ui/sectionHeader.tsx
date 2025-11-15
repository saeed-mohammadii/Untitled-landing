interface TProps{
    subHeading: string;
    heading: string;
    supportingText: string;
}

function SectionHeader({subHeading, heading, supportingText}: TProps) {
  return (
      <div className="flex flex-col gap-8">
          <div className="text-center w-full flex flex-col gap-8">
              <div className="flex flex-col gap-4 xl:gap-5">
                  <div className="flex flex-col gap-3">
                      <div className="text-[#6941C6] text-sm xl:text-base font-semibold">
                          {subHeading}
                      </div>
                      <h3 className="text-3xl xl:text-4xl font-semibold">
                          {heading}
                      </h3>
                  </div>
                  <p className="font-normal xl:text-xl text-lg">
                      {supportingText}
                  </p></div>
          </div>
      </div>
  );
}

export default SectionHeader;