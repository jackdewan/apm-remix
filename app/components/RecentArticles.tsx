import { ArticleInterface } from "~/utils/interfaces";
import { Section } from "./Section";
import { ALCard } from "./ALCard";

interface RecentArticlesProps {
  data: ArticleInterface[];
}

export const RecentArticles = ({ data }: RecentArticlesProps) => {
  return (
    <Section title="Recent Articles">
      <div className="lg:grid lg:grid-cols-3 lg:gap-10 container">
        {data.map((article) => (
          <ALCard key={article.title} data={article} />
        ))}
      </div>
    </Section>
  );
};
