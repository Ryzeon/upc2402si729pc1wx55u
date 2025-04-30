export interface BiographyResource {
  Id: string;
  LastModified: Date;
  PublicationDate: Date;
  DateCreated: Date;
  IncludeInSitemap: boolean;
  SystemSourceKey: string | null;
  UrlName: string;
  ItemDefaultUrl: string;
  Summary: string;
  Biography: string;
  Title: string;
  ParentId: string;
  Provider: string;
}
