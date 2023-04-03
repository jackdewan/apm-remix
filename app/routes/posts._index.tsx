import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { client } from "~/models/contentful.server";

export const loader = async () => {
  const blogs = await client.getAllBlogs();
  const page = await client.getPage("Writings");
  return json({
    blogs,
    page,
  });
};

export default function Posts() {
  const { blogs } = useLoaderData<typeof loader>();
  return (
    <main>
      <h1>Posts</h1>
      <ul>
        {blogs.map((blog: any) => (
          <li key={blog.slug}>
            <Link to={blog.slug} className="text-blue-600 underline">
              {blog.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
