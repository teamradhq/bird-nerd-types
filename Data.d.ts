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
    type BirdFamily = string;

    /** A record for a bird family. */
    interface BirdFamilyData extends BaseRecord {
      name: BirdFamily;
      scientificName: string;
    }

    /** Wiki infobox table rows contain one or two data cells. */
    type WikiInfoBoxData = [string] | [string, string];

    type WikiImageData = {
      [k in 'src' | 'width' | 'height']: string;
    };

    /** A figure includes a caption and srcset. */
    type WikiFigureData = {
      caption: string;
      srcset: { magnification: number, src: string }[]
    }

    /**
     * Wiki data is extracted from wikipedia pages and includes
     * a link back to the original article.
     */
    interface WikiData {
      figures: WikiFigureData[];
      href: string;
      image: string;
      images: WikiImageData[];
      infoBox: string;
      infoBoxData: WikiInfoBoxData[];
      longDescription: string;
      longDescriptionHTML: string;
      shortDescription: string;
    }

    /** Data from Wikipedia that is linked to a bird family. */
    type WikiBirdFamilyData = BirdFamilyData & WikiData;

    /** Data from Wikipedia that is linked to a bird species. */
    type WikiSpeciesData = BirdSpecies & WikiData;

    /** Indicates the location where a bird species is found. */
    type BirdPopulation =
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
    type BirdPopulationData = BaseRecordWithColor & {
      name: BirdPopulation;
    }

    /** Indicates the conservation status of a bird species. */
    type BirdStatus =
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
    type BirdStatusData = BaseRecordWithColor & {
      name: BirdStatus;
    }

    /** Information on a single bird species. */
    type BirdSpecies = BirdFamilyData & {
      family: string;
      population: BirdPopulation;
      scientificFamily: string;
      status: BirdStatus;
      taxonomyNotes: string;
    };
  }
}
