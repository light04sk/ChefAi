import { PricingTable } from "@clerk/nextjs";

const PricingSection = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="px-10 pt-10 pb-6 border-b">
        <h2 className="text-3xl font-semibold tracking-tight">
          Simple pricing
        </h2>

        <p className="text-stone-500 mt-2">
          Start for free. Upgrade to unlock AI chef powers.
        </p>
      </div>

      {/* Pricing Table */}
      <div className="p-10">
        <PricingTable
          checkoutProps={{
            appearance: {
              elements: {
                drawerRoot: {
                  zIndex: 2000,
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default PricingSection;
