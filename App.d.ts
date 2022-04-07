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
          families: Names.Family[]
          populations: Names.Population[]
          statuses: Names.Status[]
          filterFamilies: Names.Family[]
          filterPopulations: Names.Population[]
          filterStatuses: Names.Status[]
          familyData: Data.Family[]
          populationData: Data.Population[]
          statusData: Data.Status[]
          wikiFamilyData: Wiki.Family[]
          wikiSpeciesData: Wiki.Species[]
        }
      }
    }
  }
}
