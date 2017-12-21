import { Component } from '@angular/core';
import { fadeAnimation } from '../../common/animations/fade.animation';

@Component({
  selector: 'app-edit-campaign',
  templateUrl: './edit-campaign.component.html',
  styleUrls: ['./edit-campaign.component.scss'],
  animations: [fadeAnimation]
})
export class EditCampaignComponent {
  getRouterOutletState = (outlet) => outlet.isActivated ? outlet.activatedRoute : '';

}