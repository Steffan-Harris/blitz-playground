import { NotFoundError } from "blitz"
import db, { FindOneTaskArgs } from "db"

type GetTaskInput = {
  where: FindOneTaskArgs["where"]
  // Only available if a model relationship exists
  // include?: FindOneTaskArgs['include']
}

export default async function getTask(
  { where /* include */ }: GetTaskInput,
  ctx: Record<any, any> = {}
) {
  const task = await db.task.findOne({ where })

  if (!task) throw new NotFoundError()

  return task
}
