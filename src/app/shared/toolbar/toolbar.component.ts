import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  displaySearch: boolean= false;

  displaySearchBar(value:boolean) {
    this.displaySearch = value;
  }
  

}
