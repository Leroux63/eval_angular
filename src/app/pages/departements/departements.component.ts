import { Component, OnInit } from '@angular/core';
import { ApiGetService } from 'src/services/api-get.service';
import { Departement } from 'src/models/departement';
import { Url_Api } from 'src/services/url_api';
@Component({
  selector: 'app-departements',
  templateUrl: './departements.component.html',
  styleUrls: ['./departements.component.scss']
})
export class DepartementsComponent implements OnInit {

  arrayDep:Array<Departement> = [] ;

  constructor(private _httpClient: ApiGetService) { }

  ngOnInit(): void {
    this.getDep();
  }

  getDep(url: string = Url_Api.DepUrl): void {
    this._httpClient.getRequest<Departement[]>(url).subscribe((jsonResponse) => {
      this.arrayDep = jsonResponse;
      console.log(this.arrayDep)
    });
  }
}
