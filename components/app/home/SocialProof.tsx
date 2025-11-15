import Image from "next/image";

function SocialProof() {
  return (
    <section className="pb-24 flex flex-col gap-16">
        <div className="flex flex-col gap-8  mx-auto md:px-4 xl:px-8 container">
            <div className="bg-[#FAFAFA] px-6 py-12 flex flex-col gap-8 xl:py-16 xl:px-8 w-full">
                <div className="flex flex-col gap-8 ">
                    <span className="font-medium text-[#535862] xl:text-xl text-center">Trusted by 4,000+ companies</span>
                    <div className="grid grid-cols-2 grid-rows-3 justify-items-center md:flex md:justify-center gap-8 text-[#0A0D12] ">
                        <div className="w-[114px] h-[36px] relative">
                            <Image src="/images/socialproof/company1.svg" alt="pic" fill></Image>
                        </div>

                        <div className="w-[114px] h-[36px] relative">
                            <Image src="/images/socialproof/company2.svg" alt="pic" fill></Image>
                        </div>

                        <div className="w-[114px] h-[36px] relative">
                            <Image src="/images/socialproof/company3.svg" alt="pic" fill></Image>
                        </div>

                        <div className="w-[114px] h-[36px] relative">
                            <Image src="/images/socialproof/company4.svg" alt="pic" fill></Image>
                        </div>

                        <div className="w-[114px] h-[36px] relative">
                            <Image src="/images/socialproof/company5.svg" alt="pic" fill></Image>
                        </div>

                        <div className="w-[114px] h-[36px] relative">
                            <Image src="/images/socialproof/company6.svg" alt="pic" fill></Image>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default SocialProof;