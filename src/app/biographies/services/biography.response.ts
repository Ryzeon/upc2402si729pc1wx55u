import {BiographyResource} from './biography.resource';

export interface BiographyResponse {

  "@odata.context": string | null;

  value: BiographyResource[]

  "@odata.nextLink": string | null;
}
