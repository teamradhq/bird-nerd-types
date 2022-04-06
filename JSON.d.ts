declare namespace BirdNerd {
  namespace JSON {
    /** JSON data extracted from source CSV data. */
    type BirdJSONData = {
      families: Data.FamilyName[],
      familyData: Data.Family[],
      populationData: Data.Population[],
      populations: Data.PopulationName[],
      species: Data.Species[],
      statusData: Data.Status[],
      statuses: Data.StatusName[],
    };

    /** JSON data scraped from wikipedia. */
    type WikiJSONData = {
      families: Data.WikiFamily[];
      species: Data.WikiSpecies[];
    }
  }
}
