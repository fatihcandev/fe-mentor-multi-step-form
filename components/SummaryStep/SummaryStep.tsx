import AddOnSummary from './AddOnSummary'
import PlanSummary from './PlanSummary'
import Total from './Total'

const SummaryStep = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-6 rounded-lg bg-magnolia p-6">
        <PlanSummary />
        <div className="h-[1px] bg-lightGray" />
        <AddOnSummary />
      </div>
      <Total />
    </div>
  )
}

export default SummaryStep
