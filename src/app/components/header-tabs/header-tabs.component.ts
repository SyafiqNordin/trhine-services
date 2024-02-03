import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { headerTabsInterface } from '../../interface/header-tabs';
import { listOfTabs } from '../../constants/listOfTabs';

@Component({
  selector: 'app-header-tabs',
  templateUrl: './header-tabs.component.html',
  styleUrl: './header-tabs.component.scss'
})
export class HeaderTabsComponent implements OnInit{
  public listOfHeaderTabs: headerTabsInterface[] = listOfTabs;

  constructor( 
    private readonly router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  
  public ngOnInit(): void {
    this.activatedRoute.url.subscribe(urlSegments => {
      for (let tab of listOfTabs) {
        if ( tab.path === '/' + urlSegments[0].path) {
          tab.active = true;
        }
      }
    })
  }

  public navigateToPage(tab: headerTabsInterface): void {
    this.listOfHeaderTabs.forEach(tab => tab.active = false);
    tab.active = true;
    this.router.navigate([tab.path]);
  }
}
