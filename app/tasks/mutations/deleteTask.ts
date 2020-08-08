import db, { TaskDeleteArgs } from "db"

type DeleteTaskInput = {
  where: TaskDeleteArgs["where"]
}

export default async function deleteTask({ where }: DeleteTaskInput, ctx: Record<any, any> = {}) {
  const task = await db.task.delete({ where })

  return task
}
