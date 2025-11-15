import {Button} from "@/components/ui/button";

function PricingActions() {
  return (
    <div className="flex flex-col gap-3">
        <Button variant="primary" size="xl">Get started</Button>
        <Button variant="secondaryGray" size="xl">Chat to sales</Button>
    </div>
  );
}

export default PricingActions;