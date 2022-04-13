declare namespace BirdNerd {
  namespace Data {
    /**
     * Records should have a name and slug which should be
     * unique to the collection.
     */
    type BaseRecord = {
      /** The item's object id. */
      _id?: string;
      /** An item's type should correspond to the collection it's stored in. */
      _type: string;
      /** A slug should be unique to this item's collection. */
      slug: string;
      /** A unique name for this item. */
      name: string;
    }

    /**
     * Represents a user of the application.
     */
    type Nerd = BaseRecord & {
      _type: 'nerd',
      /** A unique user identifier. */
      username: string;
      /** The user's display name. */
      name?: string;
      /** The user's birthday. */
      birthday?: Date;
    }

    /**
     * Some records may have a colour which may or may not be
     * unique to collection.
     */
    type BaseRecordWithColor = BaseRecord & {
      /** A colour name that represents this item. */
      color: string;
    }

    /** A record for a bird family. */
    type Family = BaseRecord & {
      _type: 'family';
      /** Name of the bird family. */
      name: Names.Family;
      /** Scientific of the bird family. */
      scientificName: string;
    }

    /** A record for a type of bird population. */
    type Population = BaseRecordWithColor & {
      _type: 'population';
      /** The name of this population type. */
      name: Names.Population;
    }

    /** Information on a single bird species. */
    type Species = BaseRecord & {
      _type: 'species';
      /** Scientific of the bird species. */
      scientificName: string;
      /** Name of the family this bird belongs to. */
      family: Names.Family;
      /** Name of the population this bird belongs to. */
      population: Names.Population;
      /** Scientific name of the family this bird belongs to. */
      scientificFamily: string;
      /** Name of the status this bird belongs to. */
      status: Names.Status;
      /** Notes about this species. */
      taxonomyNotes: string;
    };

    /** A record for a conservation status. */
    type Status = BaseRecordWithColor & {
      _type: 'status';
      /** The name of this status type. */
      name: Names.Status;
    }
  }
}
