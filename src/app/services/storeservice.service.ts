import {Injectable} from "@angular/core";
import {Kontak} from "../dataclass/kontak-class";

@Injectable()
export class StoreserviceService {

  private storeListKontakDarurat: Kontak[] = [];
  private storeListKontakRumahSakit: Kontak[] = [];
  private storeListKontakPelayananMasyarakat: Kontak[] = [];
  private storeListKontakTransportasi: Kontak[] = [];

  constructor() {
  }

  //sort kontak
  sortKontakAscending(list: Kontak[]): Kontak[] {

    let listSort: Kontak[] = list;

    //urutkan array secara ascending dengan membandingkan dua parameter
    try {
      listSort.sort(
        (item1, item2): number => {

          let nama1 = item1.nama;
          let nama2 = item2.nama;

          if (nama1 < nama2) {
            return -1;
          }
          if (nama1 > nama2) {
            return 1;
          }
          return 0;
        }
      );
    } catch (e) {
      console.log(e);
    }

    return listSort;
  }

  //kontak darurat store
  setStoreListKontakDarurat(list: Kontak[]): void {
    this.storeListKontakDarurat = list;
  }

  getStoreListKontakDarurat(): Kontak[] {
    return this.storeListKontakDarurat;
  }

  //rumah sakit store
  setStoreListRumahSakit(list: Kontak[]): void {
    this.storeListKontakRumahSakit = list;
  }

  getStoreListRumahSakit(): Kontak[] {
    return this.storeListKontakRumahSakit;
  }


  //pelayanan masyarakat
  setStorePelayananMasyarakat(list: Kontak[]): void {
    this.storeListKontakPelayananMasyarakat = list;
  }

  getStorePelayananMasyarakat(): Kontak[] {
    return this.storeListKontakPelayananMasyarakat;
  }


  //transportasi umum
  setStoreTransportasiUmum(list: Kontak[]): void {
    this.storeListKontakTransportasi = list;
  }

  getStoreTransportasiUmum(): Kontak[] {
    return this.storeListKontakTransportasi;
  }


}
