import { ActionArgs, json } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { Form } from "@remix-run/react";

export const action = async ({ request }: ActionArgs) => {
  const formData = await request.formData();
  const name = formData.get("name");
  const subject = formData.get("subject");
  console.log(name);
  return json(formData);
};

export default function NewProject() {
  return (
    <Form method="post" className="p-5 m-5 border">
      <p>
        <label>
          Name: <input name="name" type="text" className="border" />
        </label>
      </p>
      <p>
        <label>
          Subject: <input name="subject" type="text" className="border" />
        </label>
      </p>
      <p>
        <label>
          Description:
          <br />
          <textarea name="description" className="border" />
        </label>
      </p>
      <p>
        <button className="p-2 bg-slate-600 rounded-lg" type="submit">
          Create
        </button>
      </p>
    </Form>
  );
}
