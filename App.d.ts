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
          species: Data.Species[]
          families: Data.FamilyName[]
          populations: Data.PopulationName[]
          statuses: Data.StatusName[]
          filterFamilies: Data.FamilyName[]
          filterPopulations: Data.PopulationName[]
          filterStatuses: Data.StatusName[]
          familyData: Data.Family[]
          populationData: Data.Population[]
          statusData: Data.Status[]
          wikiFamilyData: Data.WikiFamily[]
          wikiSpeciesData: Data.WikiSpecies[]
        }
      }
    }
  }
}
