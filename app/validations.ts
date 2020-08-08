import * as z from "zod"

export const CreateTaskInput = z.object({
  taskName: z.string().min(10).max(100),
})
export type CreateTaskInputType = z.infer<typeof CreateTaskInput>
