import { PricingTable } from "@clerk/nextjs";

const PricingSection = () => {
  return (
    <div className="w-full [&_.cl-pricingTable]:flex [&_.cl-pricingTable]:flex-col [&_.cl-pricingTable]:gap-4 sm:[&_.cl-pricingTable]:flex-row sm:[&_.cl-pricingTable]:gap-5 [&_.cl-pricingTable]:max-w-none [&_.cl-pricingTable]:w-full [&_.cl-pricingTableCard]:w-full">
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
  );
};

export default PricingSection;
