import { getPlaiceholder } from "plaiceholder";

const SPACE = process.env.CONTENTFUL_SPACE_ID;
const TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN;

async function apiCall(query, variables) {
  const fetchUrl = `https://graphql.contentful.com/content/v1/spaces/${SPACE}/environments/master`;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({ query, variables }),
  };
  return await fetch(fetchUrl, options);
}

async function getRecentArticles() {
  const query = `
    {
        articleCollection(order:sys_firstPublishedAt_DESC, limit: 3) {
          total
          items {
            title
            slug
            description
            date
            featuredImage {
              title
              description
              url
            }
            sys {
              firstPublishedAt
              publishedAt
            }
          }
      }
    }
    `;
  const response = await apiCall(query);
  const json = await response.json();
  return await json.data.articleCollection.items;
}

async function getAllArticles() {
  const query = `
    {
        articleCollection(order:sys_firstPublishedAt_DESC) {
          total
          items {
            title
            slug
            description
            date
            featuredImage {
              title
              description
              url
            }
            sys {
              firstPublishedAt
              publishedAt
            }
          }
      }
    }
    `;
  const response = await apiCall(query);
  const json = await response.json();
  return await json.data.articleCollection.items;
}

async function getSingleArticle(slug) {
  const query = `
    query($slug: String){
        articleCollection(where: {slug:$slug}) {
            items {
              title
              slug
              date
              content
              description
              metaTitle
              metaDescription
              content
              featuredImage {
                title
                description
                url
              }
              sys {
                firstPublishedAt
                publishedAt
                id
              }
              }
            }
    }
    `;
  const variables = {
    slug: slug,
  };
  const response = await apiCall(query, variables);
  const json = await response.json();
  console.log(json);
  return await json.data.articleCollection.items[0];
}

async function getPage(title) {
  const query = `
    query($title:String) {
        pageCollection(where:{title:$title}){
          items{
            title
            description{
              json
            }
            rolesCollection{
              items{
                roleTitle
              }
            }
            linksCollection{
              items {
                name
                url
              }
            }
            seoMetadata{
              title
              ogImage {
                url
              }
              description
            }
          }
        }
      }
    `;
  const variables = {
    title: title,
  };
  const response = await apiCall(query, variables);
  const json = await response.json();
  return await json.data.pageCollection.items[0];
}

export const client = {
  getAllArticles,
  getSingleArticle,
  getPage,
  getRecentArticles,
};
