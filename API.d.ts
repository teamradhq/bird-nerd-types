declare namespace BirdNerd {
  namespace Api {
    type Payload<T> = Omit<T, '_id'>;

    type CollectionData = {
      status: number;
      data: unknown;
    };

    type OkayPayload<T> = CollectionData & {
      status: 200 | 201 | 202 | 203 | 204 | 205 | 206;
      data: Payload<T>;
    };

    type ErrorPayload = CollectionData & {
      status: 400 | 401 | 403 | 404 | 500 | 501 | 502 | 503 | 504;
      data: {
        error: string;
      }
    };

    /**
     * Properties required to define a set of API
     * routes for interacting with a collection.
     */
    type RouteCollection<Schema, Model> = {
      single: string;
      plural: string;
      Model: Model;
    }
  }

}

