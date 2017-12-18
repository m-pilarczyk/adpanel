import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCommonModule } from '../common/common.module';
import { FormsModule } from '@angular/forms';

import { SettingsRoutingModule } from './settings-routing.module';

import { WalletDialogComponent } from './dialogs/wallet-dialog/wallet-dialog.component';
import { SettingsComponent } from './settings.component';
import { BillingComponent } from './billing/billing.component';
import { GeneralSettingsComponent } from './general-settings/general-settings.component';
import { PreferencesComponent } from './general-settings/preferences/preferences.component';
import { NotificationSettingsComponent } from './general-settings/notification-settings/notification-settings.component';
import { UserWalletComponent } from './billing/user-wallet/user-wallet.component';
import { BillingHistoryComponent } from './billing/billing-history/billing-history.component';
import { SettingsNavigationComponent } from './settings-navigation/settings-navigation.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BillingHistoryWithdrawalComponent } from './billing/billing-history/billing-history-withdrawal/billing-history-withdrawal.component';

@NgModule({
  imports: [
    CommonModule,
    AppCommonModule,
    FormsModule,
    SettingsRoutingModule,
    MatSlideToggleModule
  ],
  declarations: [
    WalletDialogComponent,
    SettingsComponent,
    BillingComponent,
    GeneralSettingsComponent,
    PreferencesComponent,
    NotificationSettingsComponent,
    UserWalletComponent,
    BillingHistoryComponent,
    SettingsNavigationComponent,
    BillingHistoryWithdrawalComponent,
  ],
  entryComponents: [
    WalletDialogComponent
  ]
})
export class SettingsModule { }
