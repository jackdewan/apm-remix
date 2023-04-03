import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData, useParams } from "@remix-run/react";
import { client } from "../models/contentful.server";
import { RichText } from "../components/RichText";

export const loader = async ({ params }: LoaderArgs) => {
  const { slug } = params;
  return json(await client.getSingleBlog(slug));
};

export default function PostSlug() {
  const { title, description, tag, blogBody, sys } = useLoaderData();

  return (
    <div className="px-4 sm:px-0 sm:max-w-3xl mx-auto">
      <div className="">{title}</div>
      <article className="mt-4">
        <div className="post px-4 sm:px-0">
          <RichText body={blogBody} />
        </div>
      </article>
      <p className="text-hover italic">
        Last Updated: {new Date(sys.publishedAt).toDateString()}
      </p>
    </div>
  );
}
