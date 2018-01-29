import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AdminSettings, UserInfoStats } from '../models/settings.model';

import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AdminService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<UserInfoStats[]> {
    return this.http.get(`${environment.apiUrl}/users`)
      .map((userInfoStats: UserInfoStats[]) => userInfoStats);
  }

  getAdminSettings(): Observable<AdminSettings> {
    return this.http.get(`${environment.apiUrl}/admin_settings`)
      .map((adminSettings: AdminSettings) => adminSettings);
  }
}