import { ActionArgs, redirect } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";
import { Typography } from "../components/Typography";
import { mailer } from "~/models/contact.server";
import invariant from "tiny-invariant";

const errorInputClass = "border-2 border-red-600";
const inputClass = "";

export const action = async ({ request }: ActionArgs) => {
  const formData = await request.formData();

  const name = formData.get("name");
  const email = formData.get("email");
  const subject = formData.get("subject");
  const message = formData.get("message");

  const errors = {
    name: name ? null : "Name is required",
    email: email ? null : "Email is required",
    subject: subject ? null : "Subject is required",
    message: message ? null : "Message is required",
  };

  const hasErrors = Object.values(errors).some((errorMessage) => errorMessage);
  if (hasErrors) return json(errors);

  invariant(typeof name === "string", "name must be a string");
  invariant(typeof email === "string", "email must be a string");
  invariant(typeof subject === "string", "subject must be a string");
  invariant(typeof message === "string", "message must be a string");

  await mailer({ name, email, subject, message });
  return redirect("/contact");
};

export default function Contact() {
  const errors = useActionData<typeof action>();

  return (
    <section className="bg-white">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <Typography
          as="h2"
          subheading="Want to work together or have an issue you want help troubleshooting? Give us a shout!"
        >
          Contact Us
        </Typography>
        <Form method="post" className="space-y-8">
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your Name
              <input
                type="text"
                id="name"
                className={`shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 ${
                  errors?.name ? errorInputClass : ""
                }`}
                placeholder="Jane Doe"
                // required
              />
              {errors?.name ? (
                <em className="text-red-600">{errors.name}</em>
              ) : null}
            </label>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your email
              <input
                type="email"
                id="email"
                className={`shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 ${
                  errors?.name ? errorInputClass : ""
                }`}
                placeholder="name@example.com"
                // required
              />
              {errors?.email ? (
                <em className="text-red-600">{errors.email}</em>
              ) : null}
            </label>
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Subject
              <input
                type="text"
                id="subject"
                className={`block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 ${
                  errors?.name ? errorInputClass : ""
                }`}
                placeholder="Let us know how we can help you"
                // required
              />
              {errors?.subject ? (
                <em className="text-red-600">{errors.subject}</em>
              ) : null}
            </label>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your message
              {errors?.message ? (
                <em className="text-red-600">{errors.message}</em>
              ) : null}
            </label>
            <textarea
              id="message"
              rows={6}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300"
          >
            Send message
          </button>
        </Form>
      </div>
    </section>
  );
}
