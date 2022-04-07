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

    /** A record for a bird family. */
    type Family = BaseRecord & {
      name: Names.Family;
      scientificName: string;
    }

    /** A record for a bird population. */
    type Population = BaseRecordWithColor & {
      name: Names.Population;
    }

    /** Information on a single bird species. */
    type Species = Family & {
      family: Names.Family;
      population: Names.Population;
      scientificFamily: string;
      status: Names.Status;
      taxonomyNotes: string;
    };

    /** A record for a conservation status. */
    type Status = BaseRecordWithColor & {
      name: Names.Status;
    }
  }
}
