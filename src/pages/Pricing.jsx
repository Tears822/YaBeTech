import PageBreadcrumb from '../components/common/PageBreadcrumb'
import CtaBanner from '../components/common/CtaBanner'
import PricingPlans from '../components/pricing/PricingPlans'
import { useLanguage } from '../i18n/LanguageContext'

export default function Pricing() {
  const { t } = useLanguage()

  return (
    <>
      <PageBreadcrumb title={t.pages.pricing} />
      <PricingPlans />
      <CtaBanner />
    </>
  )
}
