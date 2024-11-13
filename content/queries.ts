import { ClientImages, HeroQuery } from "@/types";
import { contentGqlFetcher } from "./fetch";

export const getContentForHero = async () => {
  const query = `#graphql
  query HeroCollection {
  heroCollection {
      items {
        preTitle
        subtitle
        title
        callToActionsCollection {
          items {
            text
            href
          }
        }
      }
    }
  }`;

  const data = await contentGqlFetcher<HeroQuery>({ query });

  if (!data) {
    throw new Error("Failed to fetch hero content.");
  }

  return data;
};

export const getClientImages = async () => {
  const query = `#graphql
  query ($where: AssetFilter) {
    assetCollection(where: $where) {
      items {
        height
        url
        width
        title
      }
    }
  }
  `;

  const variables = {
    where: {
      title_contains: "client",
    },
  };

  const data = await contentGqlFetcher<ClientImages>({
    query,
    variables,
  });

  if (!data) {
    throw new Error("Failed to fetch client images.");
  }

  return data;
};
