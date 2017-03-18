import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {HomeAppComponent} from "./home-app/home-app.component";
import {KontakdaruratComponent} from "./kontakdarurat/kontakdarurat.component";
import {RumahSakitComponent} from "./rumah-sakit/rumah-sakit.component";
import {PelayananMasyComponent} from "./pelayanan-masy/pelayanan-masy.component";
import {TransportasiPublikComponent} from "./transportasi-publik/transportasi-publik.component";
import {HalamanGagalKosongComponent} from "./halaman-gagal-kosong/halaman-gagal-kosong.component";
import {TentangAppComponent} from "./tentang-app/tentang-app.component";
import {RouteAppKontakModule} from "./route-app-kontak/route-app-kontak.module";
import {StoreserviceService} from "./services/storeservice.service";
import {HttpservicesService} from "./services/httpservices.service";
import {FilterSearchKontakPipe} from "./pipes/filter-search-kontak.pipe";

@NgModule({
  declarations: [
    AppComponent,
    HomeAppComponent,
    KontakdaruratComponent,
    RumahSakitComponent,
    PelayananMasyComponent,
    TransportasiPublikComponent,
    HalamanGagalKosongComponent,
    TentangAppComponent,
    FilterSearchKontakPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouteAppKontakModule
  ],
  providers: [StoreserviceService, HttpservicesService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
