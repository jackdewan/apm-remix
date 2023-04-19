import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { ALCard } from "~/components/ALCard";
import { CTAFullScreen } from "~/components/CTAFullScreen";
import { LearnIntro } from "~/components/LearnIntro";
import { client } from "~/models/contentful.server";
import { ArticleInterface } from "~/utils/interfaces";

export const loader = async () => {
  const articles = await client.getAllArticles();
  // const page = await client.getPage("Writings");
  return json({
    articles,
    // page,
  });
};

export default function Posts() {
  const { articles } = useLoaderData<typeof loader>();
  return (
    <div>
      <div className="container pb-10">
        <LearnIntro />
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:gap-10 2xl:gap-20 lg:grid-cols-3 mx-auto">
          {articles.map((article: ArticleInterface) => (
            <ALCard key={article.slug} data={article} />
          ))}
        </div>
      </div>
      <CTAFullScreen dark />
    </div>
  );
}
