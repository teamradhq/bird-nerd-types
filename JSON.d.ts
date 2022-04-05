declare namespace BirdNerd {
  namespace JSON {
    /** JSON data extracted from source CSV data. */
    type BirdJSONData = {
      birds: Data.BirdSpecies[],
      families: Data.BirdFamily[],
      populations: Data.BirdPopulation[],
      statuses: Data.BirdStatus[],
      familyData: Data.BirdFamilyData[],
      populationData: Data.BirdPopulationData[],
      statusData: Data.BirdStatusData[],
    };

    /** JSON data scraped from wikipedia. */
    type WikiJSONData = {
      families: Data.WikiBirdFamilyData[];
      species: Data.WikiSpeciesData[];
    }
  }
}
