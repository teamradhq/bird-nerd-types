declare namespace BirdNerd {
  namespace App {
    /**
     * Pages required to deliver the application.
     */
    namespace Pages {
      /**
       * A single application view.
       */
      interface Page {
        /** The document title. */
        title: string;
        /** The canonical path. */
        path: string;
        /** The page slug. */
        slug: string;
        /** Don't render the document title in page body. */
        hideTitle?: boolean;
      }
    }

    namespace State {
      namespace Birds {
        /** Store data required for application. */
        interface Store {
          /** The bird store has the required data. */
          isInitialised: boolean;
          /** A collection of bird species. */
          species: Data.Species[]
          /** The names of every family. */
          families: Names.Family[]
          /** The names of every population. */
          populations: Names.Population[]
          /** The names of every status. */
          statuses: Names.Status[]
          /** The names of every filtered family. */
          filterFamilies: Names.Family[]
          /** The names of every filtered population. */
          filterPopulations: Names.Population[]
          /** The names of every filtered status. */
          filterStatuses: Names.Status[]
          /** The data for every family. */
          familyData: Data.Family[]
          /** The data for every population. */
          populationData: Data.Population[]
          /** The data for every status. */
          statusData: Data.Status[]
          /** The wiki for families. */
          wikiFamilyData: Wiki.Family[]
          /** The wiki for species.. */
          wikiSpeciesData: Wiki.Species[]
        }
      }
    }
  }
}
