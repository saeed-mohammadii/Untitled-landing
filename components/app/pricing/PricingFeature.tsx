import CheckIcon from "@/components/icons/pricing/CheckIcon";

function PricingFeature({children}: {children?: React.ReactNode}) {
  return (
    <div className="flex gap-3">
        <div>
            <CheckIcon/>
        </div>
        <p>
            {children}
        </p>
    </div>
  );
}

export default PricingFeature;