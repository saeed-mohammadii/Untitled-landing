import PricingActions from "@/components/app/pricing/PricingActions";
import {TPlan} from "@/types/types";
import PopularBadge from "@/components/ui/popularBadge";
import PricingFeature from "@/components/app/pricing/PricingFeature";

function PricingCard({badge, plan}: { badge: boolean, plan: TPlan }) {
    return (
        <div className="border border-[#E9EAEB] shadow-xs rounded-2xl">
            <div className="pt-6 pb-8 px-6 xl:p-8 flex flex-col gap-8 border-b border-[#E9EAEB]">
                <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between gap-4">
                        <span className="text-[#535862] font-semibold text-lg flex-grow">
                            {
                                plan === "basic" ? "Basic plan" :
                                    plan === "business" ? "Business plan" : "Enterprise plan"
                            }
                        </span>
                        {badge && <PopularBadge/>}
                    </div>

                    <div className="flex items-end gap-1">
                        <span className="text-[#181D27] font-semibold text-5xl xl:6xl tracking-tighter">
                            $
                            {
                                plan === "basic" ? "10" :
                                    plan === "business" ? "20" : "40"
                            }
                        </span>
                        <span className="font-medium text-[#535862]">per month</span>
                    </div>
                    <p className="font-normal">
                        {
                            plan === "basic" ? "Basic features for up to 10 users." :
                                plan === "business" ? "Advanced features and reporting." : "Unlimited features."
                        }
                    </p>
                </div>
                <PricingActions/>
            </div>

            <div className="pt-8 pb-10 px-6 xl:px-8 flex flex-col gap-8">
                <div className="flex flex-col gap-1">
                    <h5 className="text-[#181D27] font-semibold">FEATURES</h5>
                    <p className="font-normal">
                        Everything in <span className="font-semibold">
                        {
                            plan === "basic" ? "Starter" :
                                plan === "business" ? "Basic" : "Business"
                        }
                    </span> plus....
                    </p>
                </div>

                <div className="flex flex-col gap-4">
                    <PricingFeature>Access to basic features</PricingFeature>
                    <PricingFeature>Basic reporting and analytics</PricingFeature>
                    <PricingFeature>Up to 10 individual users</PricingFeature>
                    <PricingFeature>20 GB individual data each user</PricingFeature>
                    <PricingFeature>Basic chat and email support</PricingFeature>
                </div>
            </div>
        </div>
    );
}

export default PricingCard;