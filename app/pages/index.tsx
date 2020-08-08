import { useSession, useQuery } from "blitz"
import { Button, Input, Heading, ListItem, FormControl } from "@chakra-ui/core"
import createTask from "../tasks/mutations/createTask"
import getTasks from "../tasks/queries/getTasks"
import { useState, Suspense } from "react"
import { Form, FORM_ERROR } from "app/components/Form"
import { CreateTaskInput, CreateTaskInputType } from "../validations"
import { LabeledTextField } from "app/components/LabeledTextField"

/*
 * This file is just for a pleasant getting started page for your new app.
 * You can delete everything in here and start from scratch if you like.
 */

export default function Home() {
  const TaskList = () => {
    const [tasks] = useQuery(getTasks, {})

    return (
      <>
        {tasks.map((task) => {
          return <ListItem>{task.name}</ListItem>
        })}
      </>
    )
  }

  return (
    <>
      <Heading>Hello World</Heading>
      Tasks are below:
      <Suspense fallback={<p>Loading...</p>}>
        <TaskList />
      </Suspense>
      <Heading>Create a Task</Heading>
      <Form<CreateTaskInputType>
        submitText="Create"
        schema={CreateTaskInput}
        onSubmit={async (values) => {
          const task = await createTask({
            data: {
              name: values.taskName,
            },
          })

          alert(`${task.name} created!`)
        }}
      >
        <LabeledTextField name="taskName" label="Task Name" placeholder="Task Name" />
      </Form>
    </>
  )
}
