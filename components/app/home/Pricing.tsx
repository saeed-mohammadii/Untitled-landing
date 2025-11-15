import SectionHeader from "@/components/ui/sectionHeader";
import PricingCard from "@/components/app/pricing/PricingCard";

function Pricing() {
  return (
      <section className="py-24 flex flex-col gap-16">
              <SectionHeader
                  subHeading="Pricing"
                  heading="Plans that fit your scale"
                  supportingText="Simple, transparent pricing that grows with you. Try any plan free for 30 days."
              />

              <div className="max-w-[379px] mx-auto px-4 xl:px-8 md:container flex flex-col gap-12">
                  <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                      <PricingCard badge={true} plan="basic"/>
                      <PricingCard badge={false} plan="business"/>
                      <PricingCard badge={false} plan="enterprise"/>
                  </div>
              </div>
          </section>



  );
}

export default Pricing;