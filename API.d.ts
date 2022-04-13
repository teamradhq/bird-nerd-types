
declare namespace BirdNerd {
  namespace Api {
    type Payload<T> = Omit<T, '_id'>;

    /** Data about a collection. */
    type CollectionData = {
      /** The http response code. */
      status: number;
      /** The item collection. */
      data: unknown;
    };

    /** A successful response. */
    type OkayPayload<T> = CollectionData & {
      status: 200 | 201 | 202 | 203 | 204 | 205 | 206;
      data: Payload<T>;
    };

    /** A error response. */
    type ErrorPayload = CollectionData & {
      status: 400 | 401 | 403 | 404 | 500 | 501 | 502 | 503 | 504;
      data: {
        /** A text description of the error. */
        error: string;
      }
    };

    /**
     * Properties required to define a set of API
     * routes for interacting with a collection.
     */
    type RouteCollection<Schema, Model> = {
      /** The string for a single item. */
      single: string;
      /** The string for multiple items. */
      plural: string;
      /** The Model for interacting with items. */
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

    /**
     * A username and password is required to validate a user's credentials.
     */
    type ValidUserPassword = Pick<LoginRequest, 'password' | 'username'>;

    /**
     * Retrieve the user details when user credentials are valid.
     */
    type PasswordResult<T> = Promise<false | T>;

  }
}

