import FeatureDetail from "@/components/app/features/FeatureDetail";
import MessageIcon from "@/components/icons/features/MessageIcon";
import ZapIcon from "@/components/icons/features/ZapIcon";
import ChartIcon from "@/components/icons/features/ChartIcon";
import MessageSmileIcon from "@/components/icons/features/MessageSmileIcon";
import MessageHeartIcon from "@/components/icons/features/MessageHeartIcon";
import CommandIcon from "@/components/icons/features/CommandIcon";
import SectionHeader from "@/components/ui/sectionHeader";

function Features() {
    return (
        <section className="py-24 flex flex-col gap-16 max-w-[379px] md:max-w-[1312px] mx-auto px-4">

            <SectionHeader
                subHeading="Features"
                heading="All you need to run your finances effectively"
                supportingText="Open a full-featured account in with virtual cards in less than 5 minutes."
            />

            <div className="md:px-8">
                <div className="w-full grid grid-rows-6 grid-cols-1 md:grid-rows-2 md:grid-cols-3 gap-x-8 gap-y-16">
                    <FeatureDetail icon={<MessageIcon/>}>
                        <h3 className="feature-title xl:text-xl">
                            Share team inboxes
                        </h3>
                        <p className="feature-text">
                            Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page
                            and in the loop.
                        </p>
                    </FeatureDetail>

                    <FeatureDetail icon={<ZapIcon/>}>
                        <h3 className="feature-title text-lg xl:text-xl">
                            Deliver instant answers
                        </h3>
                        <p className="feature-text">
                            An all-in-one customer service platform that helps you balance everything your customers
                            need to be happy.
                        </p>
                    </FeatureDetail>

                    <FeatureDetail icon={<ChartIcon/>}>
                        <h3 className="feature-title text-lg xl:text-xl">
                            Manage your team with reports
                        </h3>
                        <p className="feature-text xl:text-base">
                            Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and
                            drilldown on the data in a couple clicks.
                        </p>
                    </FeatureDetail>

                    <FeatureDetail icon={<MessageSmileIcon/>}>
                        <h3 className="feature-title text-lg xl:text-xl">
                            Connect with customers
                        </h3>
                        <p className="feature-text xl:text-base">
                            Solve a problem or close a sale in real-time with chat. If no one is available, customers
                            are seamlessly routed to email without confusion.
                        </p>
                    </FeatureDetail>

                    <FeatureDetail icon={<CommandIcon/>}>
                        <h3 className="feature-title text-lg xl:text-xl">
                            Connect the tools you already use
                        </h3>
                        <p className="feature-text xl:text-base">
                            Explore 100+ integrations that make your day-to-day workflow more efficient and familiar.
                            Plus, our extensive developer tools.
                        </p>
                    </FeatureDetail>

                    <FeatureDetail icon={<MessageHeartIcon/>}>
                        <h3 className="feature-title text-lg xl:text-xl">
                            Our people make the difference
                        </h3>
                        <p className="feature-text xl:text-base">
                            We’re an extension of your customer service team, and all of our resources are free. Chat to
                            our friendly team 24/7 when you need help.
                        </p>
                    </FeatureDetail>
                </div>
            </div>
        </section>
    );
}

export default Features;