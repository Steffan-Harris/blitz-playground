import db, { TaskUpdateArgs } from "db"

type UpdateTaskInput = {
  where: TaskUpdateArgs["where"]
  data: TaskUpdateArgs["data"]
}

export default async function updateTask(
  { where, data }: UpdateTaskInput,
  ctx: Record<any, any> = {}
) {
  const task = await db.task.update({ where, data })

  return task
}
