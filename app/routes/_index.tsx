import { V2_MetaFunction, json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { client } from "../models/contentful.server";

export const meta: V2_MetaFunction = () => {
  return [{ title: "New Remix App" }];
};

export async function loader() {
  return json(await client.getPage("Corgi"));
}

export default function Index() {
  const { title } = useLoaderData();
  console.log(title);
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <div className="mx-auto mt-16 max-w-7xl text-center">
        <Link to="/posts" className="text-xl text-blue-600 underline">
          Blog Posts
        </Link>
      </div>
    </div>
  );
}
