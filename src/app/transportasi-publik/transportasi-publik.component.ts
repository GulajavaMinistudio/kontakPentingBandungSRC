import {Component, OnInit, OnDestroy} from "@angular/core";
import {Kontak} from "../dataclass/kontak-class";
import {HttpservicesService} from "../services/httpservices.service";
import {StoreserviceService} from "../services/storeservice.service";

@Component({
  selector: 'app-transportasi-publik',
  templateUrl: './transportasi-publik.component.html',
  styleUrls: ['./transportasi-publik.component.css']
})
export class TransportasiPublikComponent implements OnInit, OnDestroy {


  private search_katakunci: string = "";
  private listDataKontak: Kontak[] = [];

  constructor(private httpserv: HttpservicesService,
              private stores: StoreserviceService) {
  }

  ngOnInit() {
    this.cekDataKontakStore();
  }

  ngOnDestroy(): void {
  }


  //cek status data yang tersimpan di store data sementara
  //jika data tersedia maka ambil dari cache
  cekDataKontakStore(): void {

    let listDataStore = this.stores.getStoreTransportasiUmum();
    if (listDataStore.length === 0 || listDataStore === undefined ||
      listDataStore === null) {

      this.getDataKontakInternet();
    }
    else {
      //tampilkan ke dalam list
      this.listDataKontak = listDataStore;
    }
  }

  //ambil data kontak via internet, urutkan ascending, dan simpan ke store
  getDataKontakInternet(): void {

    this.httpserv.getDaftarTransportasi()
      .subscribe(
        (hasil) => {

          if (hasil !== undefined) {
            try {
              this.listDataKontak = this.stores.sortKontakAscending(hasil.kontak);
              this.stores.setStoreTransportasiUmum(this.listDataKontak);
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
