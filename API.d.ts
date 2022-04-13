
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

    /**
     * A login request will have username and password. There may also
     * be additional field values included if the request is a new
     * registration or update.
     */
    export type LoginRequest = {
      /** The unique username. */
      username: string,
      /** The plain-text password. */
      password: string,
      /** Optional name field for registration or update. */
      name?: string,
    };

    /**
     * To update a user's password, their user id, existing
     * password and a new password need to be provided.
     */
    type PasswordUpdateRequest = {
      /** User's ObjectId */
      _id: string,
      /** Existing password for the user. */
      password: string;
      /** New password to set when validation passes. */
      newPassword: string;
    };
  }
}

