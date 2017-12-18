import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-edit-campaign-navigation',
  templateUrl: './edit-campaign-navigation.component.html',
  styleUrls: ['./edit-campaign-navigation.component.scss'],
})
export class EditCampaignNavigationComponent implements OnInit {
  steps = [
    { id: 1, name: 'Basic Information', link: 'basic-information' },
    { id: 2, name: 'Additional Targeting', link: 'additional-targeting' },
    { id: 3, name: 'Create Ads', link: 'edit-campaign-create-ad' },
    { id: 4, name: 'Summary', link: 'summary' }
  ];

  currentStep: number;
  subscription: Subscription;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.subscription = this.route.queryParams.subscribe(params => {
      this.currentStep = params.step;
    });
  }
}
