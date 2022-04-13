declare namespace BirdNerd {
  namespace Wiki {
    /** Wiki infobox table rows contain one or two data cells. */
    type InfoBox = [string] | [string, string];

    /** An image src, width and height. */
    type Image = {
      [k in 'src' | 'width' | 'height']: string;
    };

    /** A figure includes a caption and srcset. */
    type Figure = {
      caption: string;
      srcset: { magnification: number, src: string }[]
    }

    /**
     * Wiki data is extracted from wikipedia pages and includes
     * a link back to the original article.
     */
    interface Article {
      /** The article relates to a species or bird family */
      _type: 'family' | 'species',
      /** A collection of figures from the article */
      figures: Figure[];
      /** The full url to the wikipedia article. */
      href: string;
      /** The first og:image for the article. */
      image: string;
      /** A collection of og:image entries for the article. */
      images: Image[];
      /** Rows of infobox data found in the article. */
      infoBoxData: InfoBox[];
      /** Plain text long description. */
      longDescription: string;
      /** HTML long description. */
      longDescriptionHTML: string;
      /** Plain text long description. */
      shortDescription: string;
    }

    /** Data from Wikipedia that is linked to a bird family. */
    type Family = Data.Family & Article;

    /** Data from Wikipedia that is linked to a bird species. */
    type Species = Data.Species & Article;
  }
}
