import {Injectable} from "@angular/core";
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class HttpservicesService {

  private urlDarurat: string = "/assets/data/darurat.json";
  private urlRumahSakit: string = "/assets/data/rumahsakit.json";
  private urlPelayananMasy: string = "/assets/data/pelayananmasyarakat.json";
  private urlTransportasi: string = "/assets/data/transportasi.json";

  private headerTipeJson: string = "application/json";

  constructor(private _http: Http) {
  }

  //ambil daftar nomor darurat dari server
  getDataDarurat(): any {

    let headersReq = new Headers();
    headersReq.set("Content-Type", this.headerTipeJson);

    let optionsReq = new RequestOptions();
    optionsReq.headers = headersReq;

    return this._http.get(this.urlDarurat, optionsReq)
      .map(this.extractData)
      .catch(this.handleErrorMsg);
  }


  //ambil daftar rumah sakit medis
  getDaftarRumahSakit(): any {

    let headersReq = new Headers({"Content-Type": this.headerTipeJson});
    let optionsReq = new RequestOptions({headers: headersReq});

    return this._http.get(this.urlRumahSakit, optionsReq)
      .map(this.extractData)
      .catch(this.handleErrorMsg);
  }

  //ambil daftar nomor pelayanan masyarakat
  getDaftarPelayananMasyarakat(): any {

    let headersReq = new Headers({"Content-Type": this.headerTipeJson});
    let optionsReq = new RequestOptions({headers: headersReq});

    return this._http.get(this.urlPelayananMasy, optionsReq)
      .map(this.extractData)
      .catch(this.handleErrorMsg);
  }

  //ambil daftar nomor telepon transportasi
  getDaftarTransportasi(): any {

    let headersReq = new Headers({"Content-Type": this.headerTipeJson});
    let optionsReq = new RequestOptions({headers: headersReq});

    return this._http.get(this.urlTransportasi, optionsReq)
      .map(this.extractData)
      .catch(this.handleErrorMsg);
  }


  //fungsi untuk mengambil semua request yang sama di halaman home saat pertama kali dibuka
  getSemuaDataTelepon(): any {

    let headersReq = new Headers({"Content-Type": this.headerTipeJson});
    let optionsReq = new RequestOptions({headers: headersReq});

    let observableDarurat = this._http.get(this.urlDarurat, optionsReq)
      .map(this.extractData);

    let observableRumahSakit = this._http.get(this.urlRumahSakit, optionsReq)
      .map(this.extractData);

    let observableLayananMasy = this._http.get(this.urlPelayananMasy, optionsReq)
      .map(this.extractData);

    let observableTransportasi = this._http.get(this.urlTransportasi, optionsReq)
      .map(this.extractData);

    return Observable.zip(observableDarurat, observableRumahSakit,
      observableLayananMasy, observableTransportasi)
      .catch(this.handleErrorMsg);
  }


  //ekstrak data json
  private extractData(res: Response) {
    let body = res.json();
    return body.data || {};
  }

  //olah data error yang muncul
  private handleErrorMsg(error: Response | any) {

    let errMsg: string;

    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }

    console.error(errMsg);
    return Observable.throw(errMsg);
  }


}
