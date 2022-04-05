declare namespace BirdNerd {
  namespace App {
    namespace Pages {
      interface Page {
        title: string;
        path: string;
        slug: string;
        hideTitle?: boolean;
      }
    }

    namespace State {
      namespace Birds {
        /** Store data required for application. */
        interface Store {
          isInitialised: boolean;
          species: Data.BirdSpecies[]
          families: Data.BirdFamily[]
          populations: Data.BirdPopulation[]
          statuses: Data.BirdStatus[]
          filterFamilies: Data.BirdFamily[]
          filterPopulations: Data.BirdPopulation[]
          filterStatuses: Data.BirdStatus[]
          familyData: Data.BirdFamilyData[]
          populationData: Data.BirdPopulationData[]
          statusData: Data.BirdStatusData[]
          wikiFamilyData: Data.WikiBirdFamilyData[]
          wikiSpeciesData: Data.WikiSpeciesData[]
        }
      }
    }
  }
}
