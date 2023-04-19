export interface ArticleInterface {
  title: string;
  slug: string;
  markdown: string;
  description: string;
  featuredImage: {
    title: string;
    description: string;
    url: string;
  } | null;
  tag: string[];
  sys: { publishedAt: string };
}

export interface SingleArticleInterface extends ArticleInterface {
  blogBody: any;
}
