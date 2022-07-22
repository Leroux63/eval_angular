import { Component, OnInit } from '@angular/core';
import { ApiGetService } from 'src/services/api-get.service';
import { Url_Api } from 'src/services/url_api';
import { Regions } from 'src/models/regions';
@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.scss']
})
export class RegionsComponent implements OnInit {

arrayRegions:Array<Regions> = [] ;

  constructor(private _httpClient: ApiGetService) { }

  ngOnInit(): void {
    this.getRegions();
  }

  getRegions(url: string = Url_Api.regUrl): void {
    this._httpClient.getRequest<Regions[]>(url).subscribe((jsonResponse) => {
      this.arrayRegions = jsonResponse;
      console.log(this.arrayRegions)
    });
  }

}
