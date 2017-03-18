import {Component, OnInit, OnDestroy} from "@angular/core";
import {Kontak} from "../dataclass/kontak-class";
import {HttpservicesService} from "../services/httpservices.service";
import {StoreserviceService} from "../services/storeservice.service";

@Component({
  selector: 'app-rumah-sakit',
  templateUrl: './rumah-sakit.component.html',
  styleUrls: ['./rumah-sakit.component.css']
})
export class RumahSakitComponent implements OnInit, OnDestroy {

  private search_katakunci: string = "";
  private listDataKontak: Kontak[] = [];

  constructor(private httpserv: HttpservicesService,
              private stores: StoreserviceService) {
  }

  ngOnInit() {
    this.cekDataKontakRSStore();
  }

  ngOnDestroy(): void {
  }

  //cek status data yang tersimpan di store data sementara
  //jika data tersedia maka ambil dari cache
  cekDataKontakRSStore(): void {

    let listDataStore = this.stores.getStoreListRumahSakit();
    if (listDataStore.length === 0 || listDataStore === undefined ||
      listDataStore === null) {
      this.getDataRumahSakitInternet();
    }
    else {
      this.listDataKontak = listDataStore;
    }
  }


  //ambil data kontak via internet, urutkan ascending, dan simpan ke store
  getDataRumahSakitInternet(): void {

    this.httpserv.getDaftarRumahSakit()
      .subscribe(
        (hasil) => {

          if (hasil !== undefined) {
            try {
              this.listDataKontak = this.stores.sortKontakAscending(hasil.kontak);
              this.stores.setStoreListRumahSakit(this.listDataKontak);
            } catch (e) {
              console.log(e);
              this.listDataKontak = [];
            }
          }
          else {
            this.listDataKontak = [];
          }
        },
        (error) => {
          console.log(error);
        }
      )
  }


}
