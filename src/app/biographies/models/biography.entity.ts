export class Biography {

  id: string;

  lastModified: Date;

  publicationDate: Date;

  dateCreated: Date;

  biography: string;

  title: string;

  provider: string;

  /**
   * @constructor
   * @description
   * Constructor for the Biography class.
   */
  constructor() {
    this.id = '';
    this.lastModified = new Date();
    this.publicationDate = new Date();
    this.dateCreated = new Date();
    this.biography = '';
    this.title = '';
    this.provider = '';
  }

}
