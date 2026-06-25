import PageBreadcrumb from '../components/common/PageBreadcrumb'
import CtaBanner from '../components/common/CtaBanner'
import PricingPlans from '../components/pricing/PricingPlans'

export default function Pricing() {
  return (
    <>
      <PageBreadcrumb title="Pricing" />
      <PricingPlans />
      <CtaBanner />
    </>
  )
}
