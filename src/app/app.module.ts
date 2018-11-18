import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './directeur/home/home.component';
import { ReservationComponent } from './directeur/reservation/reservation.component';
import { FactureComponent } from './directeur/facture/facture.component';
import { ChambreComponent } from './chef_reception/chambre/chambre.component';
import { TarifComponent } from './chef_reception/tarif/tarif.component';
import { FacturesComponent } from './chef_reception/factures/factures.component';
import { ClientComponent } from './receptionniste/client/client.component';
import { TableComponent } from './maitrehotel/table/table.component';
import { SalleComponent } from './maitrehotel/salle/salle.component';
import { HomeChefComponent } from './chef_reception/home-chef/home-chef.component';
import { HomeMaitreComponent } from './maitrehotel/home-maitre/home-maitre.component';
import { HomeReceptionComponent } from './receptionniste/home-reception/home-reception.component';
import { ContactComponent } from './contact/contact.component';

import {AgmCoreModule} from '@agm/core';
import { AddFactureComponent } from './directeur/add-facture/add-facture.component';

import { DataTablesModule } from 'angular-datatables';
import { AddFactureChefComponent } from './chef_reception/add-facture-chef/add-facture-chef.component';
import { AddChambreComponent } from './chef_reception/add-chambre/add-chambre.component';
import { AddTarifComponent } from './chef_reception/add-tarif/add-tarif.component';
import { ChambreReserverComponent } from './receptionniste/chambre-reserver/chambre-reserver.component';
import { AddChambreReserverComponent } from './receptionniste/add-chambre-reserver/add-chambre-reserver.component';
import { AddClientComponent } from './receptionniste/add-client/add-client.component';
import { AddSalleComponent } from './maitrehotel/add-salle/add-salle.component';
import { AddTableComponent } from './maitrehotel/add-table/add-table.component';
import { AuthGuard } from './auth.guard';
import { UserComponent } from './directeur/user/user.component';
import { RoleGuard } from './role.guard';
import { AddReservationComponent } from './directeur/add-reservation/add-reservation.component';
import { ListContactComponent } from './directeur/list-contact/list-contact.component';


const routes : Routes = [
  {path: 'acceuil', component: AcceuilComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
 //Directeur
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard, RoleGuard], data: {roles: ['directeur']}},
  {path: 'facture', component: FactureComponent},
  {path: 'add-facture', component: AddFactureComponent},
  {path: 'reservation', component: ReservationComponent},
  {path: 'add-reservation', component: AddReservationComponent},
  {path: 'user', component: UserComponent},
  {path: 'list-contact', component: ListContactComponent},
  //chef_reception
  {path: 'home-chef', component: HomeChefComponent, canActivate: [AuthGuard, RoleGuard], data: {roles: ['chef-reception']}},
  {path: 'facture-chef', component: FacturesComponent},
  {path: 'add-facture-chef', component: AddFactureChefComponent},
  {path: 'chambre', component: ChambreComponent},
  {path: 'add-chambre', component: AddChambreComponent},
  {path: 'tarif', component: TarifComponent},
  {path: 'add-tarif', component: AddTarifComponent},
  //receptioniste
  {path: 'home-reception', component: HomeReceptionComponent, canActivate: [AuthGuard, RoleGuard], data: {roles: ['receptionniste']}},
  {path: 'chambre-reserver', component: ChambreReserverComponent},
  {path: 'add-chambre-reserver', component: AddChambreReserverComponent},
  {path: 'client', component: ClientComponent},
  {path: 'add-client', component: AddClientComponent},
  //Maitre
  {path: 'home-maitre', component: HomeMaitreComponent, canActivate: [AuthGuard, RoleGuard], data: {roles: ['maitre-hotel', 'directeur']}},
  {path: 'salle', component: SalleComponent},
  {path: 'add-salle', component: AddSalleComponent},
  {path: 'table', component: TableComponent},
  {path: 'add-table', component: AddTableComponent},
  {path: 'contact', component: ContactComponent},
  {path: '', pathMatch: 'full', redirectTo: 'acceuil'}

];

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ReservationComponent,
    FactureComponent,
    ChambreComponent,
    TarifComponent,
    FacturesComponent,
    ClientComponent,
    TableComponent,
    SalleComponent,
    HomeChefComponent,
    HomeMaitreComponent,
    HomeReceptionComponent,
    ContactComponent,
    AddFactureComponent,
    AddFactureChefComponent,
    AddChambreComponent,
    AddTarifComponent,
    ChambreReserverComponent,
    AddChambreReserverComponent,
    AddClientComponent,
    AddSalleComponent,
    AddTableComponent,
    UserComponent,
    AddReservationComponent,
    ListContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    AgmCoreModule.forRoot({
      apiKey : 'AIzaSyAfJTVKnpLl0ULuuwDuix-9ANpyQhP6mfc' 
    }),
    DataTablesModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
