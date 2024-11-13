export type HeroQuery = {
  heroCollection: {
    items: {
      preTitle: string;
      subtitle: string;
      title: string;
      callToActionsCollection: {
        items: {
          text: string;
          href: string;
        }[];
      };
    }[];
  };
};

export type ClientImages = {
  assetCollection: {
    items: {
      height: number;
      url: string;
      width: number;
      title: string;
    }[];
  };
};
