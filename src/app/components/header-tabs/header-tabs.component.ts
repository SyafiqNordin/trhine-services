import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { headerTabsInterface } from '../../interface/header-tabs';
import { listOfTabs } from '../../constants/listOfTabs';

@Component({
  selector: 'app-header-tabs',
  templateUrl: './header-tabs.component.html',
  styleUrl: './header-tabs.component.scss'
})
export class HeaderTabsComponent {
  public listOfHeaderTabs: headerTabsInterface[] = listOfTabs;

  constructor( 
    private readonly router: Router
  ) {}

  public navigateToPage(tab: headerTabsInterface): void {
    this.listOfHeaderTabs.forEach(tab => tab.active = false);
    tab.active = true;
    this.router.navigate([tab.path]);
  }
}
