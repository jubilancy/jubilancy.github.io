import { isStage, STAGES } from "../util/stages"

export function StageChip({ stage }: { stage: unknown }) {
  if (!isStage(stage)) return null
  return (
    <span class={`stage stage-${stage}`} title={STAGES[stage]}>
      {stage}
    </span>
  )
}
