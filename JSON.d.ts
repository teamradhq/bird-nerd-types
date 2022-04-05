declare namespace BirdNerd {
  namespace JSON {
    /** JSON data extracted from source CSV data. */
    type BirdJSONData = {
      families: Data.BirdFamily[],
      familyData: Data.BirdFamilyData[],
      populationData: Data.BirdPopulationData[],
      populations: Data.BirdPopulation[],
      species: Data.BirdSpecies[],
      statusData: Data.BirdStatusData[],
      statuses: Data.BirdStatus[],
    };

    /** JSON data scraped from wikipedia. */
    type WikiJSONData = {
      families: Data.WikiBirdFamilyData[];
      species: Data.WikiSpeciesData[];
    }
  }
}
