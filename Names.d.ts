declare namespace BirdNerd {
  namespace Names {
    /** The name of a bird family. */
    type Family = string;

    /** Indicates the location where a bird species is found. */
    type Population =
      | 'Australian'
      | 'Endemic'
      | 'Extinct'
      | 'Extinct Endemic'
      | 'Introduced'
      | 'Non-breeding'
      | 'Non-breeding Migrant'
      | 'Vagrant'
      ;

    /** Indicates the conservation status of a bird species. */
    type Status =
      | 'Critically Endangered'
      | 'Endangered'
      | 'Extinct'
      | 'Introduced'
      | 'Least Concern'
      | 'Near Threatened'
      | 'Not Assessed'
      | 'Vagrant'
      | 'Vulnerable'
      ;
  }
}
