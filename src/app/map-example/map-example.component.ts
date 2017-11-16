import { Component } from '@angular/core';

@Component({
  selector: 'app-map-example',
  templateUrl: './map-example.component.html',
  styleUrls: ['./map-example.component.css']
})
export class MapExampleComponent {
  public editable: boolean = false;
  public name: string = 'Passau';
  public lat: number = 48.5768558;
  public lng: number = 13.268283;
}
