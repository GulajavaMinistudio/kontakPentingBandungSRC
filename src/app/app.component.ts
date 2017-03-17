import {Component, OnInit, OnDestroy} from "@angular/core";
import {HttpservicesService} from "./services/httpservices.service";
import {StoreserviceService} from "./services/storeservice.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  subscribtions : any;

  constructor(private httpserv: HttpservicesService,
              private stores: StoreserviceService) {
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  getSemuaData() : void {

    this.httpserv.getSemuaDataTelepon()
      .subscribe(
        (hasil) => {

          this.simpanDataStore(hasil);
        }
      )
  }

  simpanDataStore(hasil : any) : void {



  }

}
