import {Component, OnInit, OnDestroy} from "@angular/core";
import {HttpservicesService} from "../services/httpservices.service";
import {Kontak} from "../dataclass/kontak-class";
import {StoreserviceService} from "../services/storeservice.service";

@Component({
  selector: 'app-kontakdarurat',
  templateUrl: './kontakdarurat.component.html',
  styleUrls: ['./kontakdarurat.component.css']
})
export class KontakdaruratComponent implements OnInit, OnDestroy {

  private search_katakunci: string = "";
  private listDataKontak: Kontak[] = [];

  constructor(private httpserv: HttpservicesService,
              private storeDatas: StoreserviceService) {
  }

  ngOnInit() {
    this.cekDataKontakStore();
  }

  ngOnDestroy(): void {

  }

  //cek status data yang tersimpan di store data sementara
  //jika data tersedia maka ambil dari cache
  cekDataKontakStore(): void {

    let listDataStore = this.storeDatas.getStoreListKontakDarurat();
    if (listDataStore.length === 0 || listDataStore === undefined || listDataStore === null) {

      this.getDataKontakInternet();
    }
    else {
      //tampilkan data ke list
      this.listDataKontak = listDataStore;
    }
  }

  //ambil data kontak via internet, urutkan ascending, dan simpan ke store
  getDataKontakInternet(): void {

    this.httpserv.getDataDarurat()
      .subscribe(
        (hasil) => {

          if (hasil !== undefined) {
            try {
              this.listDataKontak = this.storeDatas.sortKontakAscending(hasil.kontak);
              this.storeDatas.setStoreListKontakDarurat(this.listDataKontak);
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
