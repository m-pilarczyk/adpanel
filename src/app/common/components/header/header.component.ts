import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { User } from '../../../models/user.model';
import { HandleSubscription } from '../../handle-subscription';
import { AppState } from '../../../models/app-state.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends HandleSubscription implements OnInit {
  currentBalanceAdst: number = 128.20;
  currentBalanceUSD: number = 1240.02;
  notificationsCount: number = 8;
  selectedRole: string = 'Admin';
  userDataState: Store<User>;

  notificationsBarEnabled: boolean = false;

  constructor(private store: Store<AppState>) {
    super(null);

    this.userDataState = this.store.select('state', 'auth', 'userData');
  }

  ngOnInit() {
    const getUserSubscription = this.userDataState
      .subscribe((userData: User) => this.checkUserRole(userData));
    this.subscriptions.push(getUserSubscription);
  }

  toggleNotificationsBar(status: boolean) {
    this.notificationsBarEnabled = status;
  }

  checkUserRole(user: User) {
    if (user.isAdmin) {
      return;
    }

    this.selectedRole = user.isAdvertiser ? 'Advertiser' : 'Publisher';
  }
}
