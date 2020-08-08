import db, { TaskCreateArgs } from "db"

type CreateTaskInput = {
  data: TaskCreateArgs["data"]
}
export default async function createTask({ data }: CreateTaskInput, ctx: Record<any, any> = {}) {
  const task = await db.task.create({ data })

  return task
}
