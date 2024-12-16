import React, { useEffect, useState } from "react";
import { Form, Formik } from "formik";
import { useTasks } from "../context/TaskProvider";
import { useNavigate, useParams } from "react-router";

function TaskForm() {
  const { createTask, getTask, updateTask } = useTasks();
  const [task, setTask] = useState({
    title: "",
    description: "",
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadTask = async () => {
      if (params.id) {
        const task = await getTask(params.id);
        setTask({
          title: task.title || "",
          description: task.description || "",
        });
      }
    };
    loadTask();
  }, [params.id]);

  return (
    <div className="mx-auto">
      <h1 className="text-4xl font-bold pb-6">
        {params.id ? "Edit Task" : "Create Task"}
      </h1>
      <Formik
        initialValues={task}
        enableReinitialize={true} // Permite que los valores iniciales se actualicen cuando cambian
        onSubmit={async (values, actions) => {
          console.log(values);

          if (params.id) {
            await updateTask(params.id, values);
          } else {
            await createTask(values);
          }
          navigate("/");
          setTask({
            title: "",
            description: "",
          });
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form
            onSubmit={handleSubmit}
            className="bg-slate-600 max-w-lg rounded-md p-4 flex flex-col mx-auto"
          >
            <label className="font-semibold py-2 pt-0">Title</label>
            <input
              className="px-2 py-2 rounded-lg text-black"
              type="text"
              name="title"
              placeholder="Write a title"
              onChange={handleChange}
              value={values.title}
            />
            <label className="font-semibold py-2 pt-4">Description</label>
            <textarea
              className="px-2 py-2 rounded-lg text-black"
              name="description"
              rows="3"
              placeholder="Write a description"
              onChange={handleChange}
              value={values.description}
            ></textarea>
            <div className="flex justify-end pt-4 px-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="py-1 px-6 border border-white rounded-lg hover:bg-slate-700"
              >
                {isSubmitting ? "Saving..." : "Save"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default TaskForm;
