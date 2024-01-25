import { Component } from '@angular/core';
import { headerTabsInterface } from '../../interface/header-tabs';
import { listOfTabs } from './listOfTabs';

@Component({
  selector: 'app-header-tabs',
  templateUrl: './header-tabs.component.html',
  styleUrl: './header-tabs.component.scss'
})
export class HeaderTabsComponent {
  public listOfHeaderTabs: headerTabsInterface[] = listOfTabs
}
