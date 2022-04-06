declare namespace BirdNerd {
  namespace Data {
    /**
     * Records should have a name and slug which should be
     * unique to the collection.
     */
    type BaseRecord = { slug: string, name: string }

    /**
     * Some records may have a colour which may or may not be
     * unique to collection.
     */
    type BaseRecordWithColor = BaseRecord & { color: string }

    /** The name of a bird family. */
    type FamilyName = string;

    /** A record for a bird family. */
    type Family = BaseRecord & {
      name: FamilyName;
      scientificName: string;
    }

    /** Wiki infobox table rows contain one or two data cells. */
    type WikiInfoBox = [string] | [string, string];

    type WikiImage = {
      [k in 'src' | 'width' | 'height']: string;
    };

    /** A figure includes a caption and srcset. */
    type WikiFigure = {
      caption: string;
      srcset: { magnification: number, src: string }[]
    }

    /**
     * Wiki data is extracted from wikipedia pages and includes
     * a link back to the original article.
     */
    interface WikiArticle {
      figures: WikiFigure[];
      href: string;
      image: string;
      images: WikiImage[];
      infoBox: string;
      infoBoxData: WikiInfoBox[];
      longDescription: string;
      longDescriptionHTML: string;
      shortDescription: string;
    }

    /** Data from Wikipedia that is linked to a bird family. */
    type WikiFamily = Family & WikiArticle;

    /** Data from Wikipedia that is linked to a bird species. */
    type WikiSpecies = Species & WikiArticle;

    /** Indicates the location where a bird species is found. */
    type PopulationName =
      | 'Australian'
      | 'Endemic'
      | 'Extinct'
      | 'Extinct Endemic'
      | 'Introduced'
      | 'Non-breeding'
      | 'Non-breeding Migrant'
      | 'Vagrant'
      ;

    /** A record for a bird population. */
    type Population = BaseRecordWithColor & {
      name: PopulationName;
    }

    /** Indicates the conservation status of a bird species. */
    type StatusName =
      | 'Critically Endangered'
      | 'Endangered'
      | 'Extinct'
      | 'Introduced'
      | 'Least Concern'
      | 'Near Threatened'
      | 'Not Assessed'
      | 'Vagrant'
      | 'Vulnerable'
      ;

    /** A record for a conservation status. */
    type Status = BaseRecordWithColor & {
      name: StatusName;
    }

    /** Information on a single bird species. */
    type Species = Family & {
      family: string;
      population: PopulationName;
      scientificFamily: string;
      status: StatusName;
      taxonomyNotes: string;
    };
  }
}
