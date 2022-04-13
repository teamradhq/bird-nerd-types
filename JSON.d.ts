declare namespace BirdNerd {
  namespace JSON {
    /** JSON data extracted from source CSV data. */
    type BirdJSONData = {
      /** Names of found bird families. */
      families: Names.Family[],
      /** Data for found bird families. */
      familyData: Data.Family[],
      /** Names of found bird populations. */
      populations: Names.Population[],
      /** Data For found bird populations. */
      populationData: Data.Population[],
      /** Data For found bird species. */
      species: Data.Species[],
      /** Names of found statuses. */
      statuses: Names.Status[],
      /** Data for found statuses. */
      statusData: Data.Status[],
    };

    /** JSON data scraped from wikipedia. */
    type WikiJSONData = {
      /** A collection of family articles. */
      families: Wiki.Family[];
      /** A collection of species articles. */
      species: Wiki.Species[];
    }
  }
}
