import {Component, OnInit, OnDestroy} from "@angular/core";
import {HttpservicesService} from "./services/httpservices.service";
import {StoreserviceService} from "./services/storeservice.service";
import {Observable} from "rxjs";
import {Kontak} from "./dataclass/kontak-class";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  subscribtions: any;

  isLoadingBar: boolean = false;

  constructor(private httpserv: HttpservicesService,
              private stores: StoreserviceService) {
  }

  ngOnInit(): void {
    this.getSemuaData();
  }

  ngOnDestroy(): void {

    if (this.subscribtions !== undefined) {
      this.subscribtions.unsubscribe();
    }
  }

  getSemuaData(): void {

    //tampil proses
    this.showLoadingBar();

    this.httpserv.getSemuaDataTelepon()
      .subscribe(
        (hasil) => {
          this.simpanDataStore(hasil);
        },
        (error) => {
          console.log(error);
          this.hideLoadingBar();
        }
      )
  }

  simpanDataStore(hasil: any): void {

    let observables = Observable.of(hasil)
      .map(
        (data) => {

          //simpan data kontak darurat
          let datakontakdarurat = data[0];
          let listkontak: Kontak[] = this.stores.sortKontakAscending(datakontakdarurat.kontak);
          this.stores.setStoreListKontakDarurat(listkontak);

          return data;
        }
      )
      .map(
        (data) => {

          //simpan data rumah sakit
          let datarumahsakit = data[1];
          let listkontak: Kontak[] = this.stores.sortKontakAscending(datarumahsakit.kontak);
          this.stores.setStoreListRumahSakit(listkontak);

          return data;
        }
      )
      .map(
        (data) => {

          //simpan data layanan masyarakat
          let datalayananmsy = data[2];
          let listkontak: Kontak[] = this.stores.sortKontakAscending(datalayananmsy.kontak);
          this.stores.setStorePelayananMasyarakat(listkontak);

          return data;
        }
      )
      .map(
        (data) => {

          //simpan data kontak transportasi
          let datakontaktransport = data[3];
          let listkontak: Kontak[] = this.stores.sortKontakAscending(datakontaktransport.kontak);
          this.stores.setStoreTransportasiUmum(listkontak);

          return data;
        }
      )
      .catch(
        (error) => (Observable.throw(error))
      );

    this.subscribtions = observables.subscribe(
      (hasilOK) => {
        //sukses request semua data
        this.hideLoadingBar();
      },
      (error) => {
        console.log(error);
        this.hideLoadingBar();
      },
      () => {
        //komplit
        this.hideLoadingBar();
      }
    )
  }


  //tampil loadingBar
  showLoadingBar(): void {
    this.isLoadingBar = true;
  }

  //sembunyi loading bar
  hideLoadingBar(): void {
    this.isLoadingBar = false;
  }

}
