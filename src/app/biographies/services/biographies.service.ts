import {Injectable, Optional} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Biography} from '../models/biography.entity';
import {map, Observable, retry} from 'rxjs';
import {BiographyResponse} from './biography.response';
import {BiographyAssembler} from './biography.assembler';

@Injectable({
  providedIn: 'root'
})
export class BiographiesService {

  private serverBasePath = environment.serverBasePath;

  private biographiesPath = environment.biographiesPath;

  constructor(private http: HttpClient) {
  }

  /**
   * @summary Allows to get the biographies from the server, using the HttpClient. following assembly pattern.
   * @description This method makes a GET request to the server to fetch the biographies.
   * It uses the HttpClient to make the request and returns an Observable of Biography array.
   * @throws Will throw an error if the request fails.
   * @returns An Observable of Biography array.
   * @author Rizz
   */
  getBiographies(): Observable<Biography[]> {
    return this.http.get<BiographyResponse>
    (`${this.serverBasePath}${this.biographiesPath}`)
      .pipe(
        retry(3), // retry a failed request up to 3 times
        map(response => {
            // Usando el ensamblador para convertir la respuesta en entidades
            return BiographyAssembler.toEntitiesFromResponse(response);
          }
        ));
  }

}
