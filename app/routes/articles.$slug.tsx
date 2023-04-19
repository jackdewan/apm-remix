import { marked } from "marked";
import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useLoaderData, useParams } from "@remix-run/react";
import { client } from "../models/contentful.server";
import { RichText } from "../components/RichText";
import { Typography } from "~/components/Typography";

export const loader = async ({ params }: LoaderArgs) => {
  const { slug } = params;
  const article = await client.getSingleArticle(slug);
  const html = marked(article.content);
  return json({
    title: article.title,
    date: article.sys.publishedAt,
    html,
    featuredImage: article.featuredImage,
  });
};

export default function PostSlug() {
  const { title, date, html, featuredImage } = useLoaderData();
  return (
    <div className="py-8 lg:py-16 container">
      <Link to="/articles" className="inline-flex items-center hover:underline">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4 mr-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
        Go Back
      </Link>
      <div className="mx-auto prose prose-stone lg:prose-xl py-16 px-4 lg:px-0">
        <h1 className="text-4xl font-bold leading-normal">{title}</h1>
        {featuredImage ? (
          <img className="w-full aspect-video" src={featuredImage.url} alt="" />
        ) : null}
        <p className="text-hover italic">
          Last Updated: {new Date(date).toDateString()}
        </p>
        <article className="mt-4">
          <div className="">
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </article>
      </div>
    </div>
  );
}
