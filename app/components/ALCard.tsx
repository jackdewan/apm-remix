import { Link } from "@remix-run/react";
import { ArticleInterface } from "~/utils/interfaces";

interface ALCardProps {
  data: ArticleInterface;
}

export const ALCard = ({ data }: ALCardProps) => {
  const {
    title,
    description,
    slug,
    featuredImage,
    // sys: { publishedAt },
  } = data;
  return (
    <Link to={`/articles/${slug}`} className="space-y-4 shadow-xl">
      <img
        src={featuredImage ? featuredImage.url : "/assets/img/dato.png"}
        alt=""
        className="aspect-video object-cover"
      />
      <div className="space-y-4 p-5">
        <h2 className="text-xl font-bold">{title}</h2>
        {/* <p>{publishedAt}</p> */}
        <p>{description}</p>
      </div>
    </Link>
  );
};
