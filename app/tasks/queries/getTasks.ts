import db, { FindManyTaskArgs } from "db"

type GetTasksInput = {
  where?: FindManyTaskArgs["where"]
  orderBy?: FindManyTaskArgs["orderBy"]
  cursor?: FindManyTaskArgs["cursor"]
  take?: FindManyTaskArgs["take"]
  skip?: FindManyTaskArgs["skip"]
  // Only available if a model relationship exists
  // include?: FindManyTaskArgs['include']
}

export default async function getTasks(
  { where, orderBy, cursor, take, skip }: GetTasksInput,
  ctx: Record<any, any> = {}
) {
  const tasks = await db.task.findMany({
    where,
    orderBy,
    cursor,
    take,
    skip,
  })

  return tasks
}
