import {BiographyResource} from './biography.resource';
import {BiographyResponse} from './biography.response';

export class BiographyAssembler {

  /**
   * @summary Converts a BiographyResource to a Biography entity.
   * @author Rizz
   */
  static toEntityFromResource(resource: BiographyResource) {
    return {
      id: resource.Id,
      lastModified: new Date(resource.LastModified),
      publicationDate: new Date(resource.PublicationDate),
      dateCreated: new Date(resource.DateCreated),
      biography: resource.Biography,
      title: resource.Title,
      provider: resource.Provider,
    }
  }

  /**
   * @summary Converts a BiographyResponse to an array of Biography entities.
   * @author Rizz
   */
  static toEntitiesFromResponse(response: BiographyResponse) {
    return response.value.map((resource: BiographyResource) => {
      return this.toEntityFromResource(resource);
    });
  }
}
