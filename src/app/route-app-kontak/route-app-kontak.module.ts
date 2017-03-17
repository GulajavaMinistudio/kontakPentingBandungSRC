import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {HomeAppComponent} from "../home-app/home-app.component";
import {HalamanGagalKosongComponent} from "../halaman-gagal-kosong/halaman-gagal-kosong.component";
import {KontakdaruratComponent} from "../kontakdarurat/kontakdarurat.component";
import {RumahSakitComponent} from "../rumah-sakit/rumah-sakit.component";
import {PelayananMasyComponent} from "../pelayanan-masy/pelayanan-masy.component";
import {TransportasiPublikComponent} from "../transportasi-publik/transportasi-publik.component";
import {TentangAppComponent} from "../tentang-app/tentang-app.component";

const routesapp: Routes = [
  {path: 'home', component: HomeAppComponent},
  {path: 'darurat', component: KontakdaruratComponent},
  {path: 'rumahsakit', component: RumahSakitComponent},
  {path: 'pelayanan', component: PelayananMasyComponent},
  {path: 'transportasi', component: TransportasiPublikComponent},
  {path: 'tentangapp', component: TentangAppComponent},
  {path: '', redirectTo: '/darurat', pathMatch: 'full'},
  {path: '**', component: HalamanGagalKosongComponent}
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routesapp)
  ],
  exports: [
    RouterModule
  ]
})
export class RouteAppKontakModule {
}
