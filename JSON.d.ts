declare namespace BirdNerd {
  namespace JSON {
    /** JSON data extracted from source CSV data. */
    type BirdJSONData = {
      families: Names.Family[],
      familyData: Data.Family[],
      populationData: Data.Population[],
      populations: Names.Population[],
      species: Data.Species[],
      statusData: Data.Status[],
      statuses: Names.Status[],
    };

    /** JSON data scraped from wikipedia. */
    type WikiJSONData = {
      families: Wiki.Family[];
      species: Wiki.Species[];
    }
  }
}
