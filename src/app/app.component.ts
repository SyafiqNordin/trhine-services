import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'trhine-services';

  constructor(@Inject(DOCUMENT) private document: Document, private render: Renderer2) {}

  public ngOnInit(): void {
    this.render.addClass(this.document.body, 'lightTheme')
  }
}
