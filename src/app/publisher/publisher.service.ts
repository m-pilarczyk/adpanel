import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { environment } from 'environments/environment';
import { Site, AdUnitSize } from 'models/site.model';
import { TargetingOption } from 'models/targeting-option.model';
import { parseTargetingForBackend } from 'common/components/targeting/targeting.helpers';

@Injectable()
export class PublisherService {

  constructor(private http: HttpClient) {}

  getSites(): Observable<Site[]> {
    return this.http.get<Site[]>(`${environment.apiUrl}/sites`);
  }

  getSite(id: number): Observable<Site> {
    return this.http.get<Site>(`${environment.apiUrl}/site/${id}`);
  }

  saveSite(site: Site): Observable<Site> {
    if (site.targetingArray) {
      const targetingObject = parseTargetingForBackend(site.targetingArray);

      Object.assign(site, {targeting: targetingObject});
    }

    return this.http.post<Site>(`${environment.apiUrl}/save_site`, { site });
  }

  getTargetingCriteria(): Observable<TargetingOption[]> {
    return this.http.get<TargetingOption[]>(`${environment.apiUrl}/site_targeting`);
  }

  getAdUnitSizes(): Observable<AdUnitSize[]> {
    return this.http.get<AdUnitSize[]>(`${environment.apiUrl}/ad_unit_sizes`);
  }
}
