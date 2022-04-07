declare namespace BirdNerd {
  namespace Wiki {
    /** Wiki infobox table rows contain one or two data cells. */
    type InfoBox = [string] | [string, string];

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
      _type: 'family' | 'species',
      figures: Figure[];
      href: string;
      image: string;
      images: Image[];
      infoBox: string;
      infoBoxData: InfoBox[];
      longDescription: string;
      longDescriptionHTML: string;
      shortDescription: string;
    }

    /** Data from Wikipedia that is linked to a bird family. */
    type Family = Data.Family & Article;

    /** Data from Wikipedia that is linked to a bird species. */
    type Species = Data.Species & Article;
  }
}
