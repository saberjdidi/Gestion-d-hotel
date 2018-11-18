import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:Http) { }

  //api user
  postRegister(form){
    return this.http.post('http://localhost:3000/auth/register', form)
  }
  postLogin(form){
    return this.http.post('http://localhost:3000/auth/login', form)
  }
  getUser(){
    return this.http.get('http://localhost:3000/auth/users')
  }
  putUser(id, user){
    return this.http.put('http://localhost:3000/auth/users/' + id, user)
  }
  deleteUser(id){
    return this.http.delete('http://localhost:3000/auth/users/' + id)
  }
  //api facture
  postFacture(form){
    return this.http.post('http://localhost:3000/directeur/facture', form)
  }
  getFacture(){
    return this.http.get('http://localhost:3000/directeur/facture')
  }
  putFacture(id, facture){
    return this.http.put('http://localhost:3000/directeur/facture/' + id, facture)
  }
  deleteFacture(id){
    return this.http.delete('http://localhost:3000/directeur/facture/' + id)
  }
  //api chambre
  postChambre(form){
    return this.http.post('http://localhost:3000/chefReception/chambre', form)
  }
  getChambre(){
    return this.http.get('http://localhost:3000/chefReception/chambre')
  }
  putChambre(id, chambre){
    return this.http.put('http://localhost:3000/chefReception/chambre/' + id, chambre)
  }
  deleteChambre(id){
    return this.http.delete('http://localhost:3000/chefReception/chambre/' + id)
  }
    //api tarif
    postTarif(form){
      return this.http.post('http://localhost:3000/chefReception/tarif', form)
    }
    getTarif(){
      return this.http.get('http://localhost:3000/chefReception/tarif')
    }
    putTarif(id, tarif){
      return this.http.put('http://localhost:3000/chefReception/tarif/' + id, tarif)
    }
    deleteTarif(id){
      return this.http.delete('http://localhost:3000/chefReception/tarif/' + id)
    }
    //api client
    postClient(form){
      return this.http.post('http://localhost:3000/receptionniste/client', form)
    }
    getClient(){
      return this.http.get('http://localhost:3000/receptionniste/client')
    }
    putClient(id, client){
      return this.http.put('http://localhost:3000/receptionniste/client/' + id, client)
    }
    deleteClient(id){
      return this.http.delete('http://localhost:3000/receptionniste/client/' + id)
    }
    //api salle
    postSalle(form){
      return this.http.post('http://localhost:3000/maitreHotel/salle', form)
    }
    getSalle(){
      return this.http.get('http://localhost:3000/maitreHotel/salle')
    }
    putSalle(id, salle){
      return this.http.put('http://localhost:3000/maitreHotel/salle/' + id, salle)
    }
    deleteSalle(id){
      return this.http.delete('http://localhost:3000/maitreHotel/salle/' + id)
    }
     //api table
     postTable(form){
      return this.http.post('http://localhost:3000/maitreHotel/table', form)
    }
    getTable(){
      return this.http.get('http://localhost:3000/maitreHotel/table')
    }
    putTable(id, table){
      return this.http.put('http://localhost:3000/maitreHotel/table/' + id, table)
    }
    deleteTable(id){
      return this.http.delete('http://localhost:3000/maitreHotel/table/' + id)
    }
    //api reservation
    postReservation(form){
      return this.http.post('http://localhost:3000/directeur/reservation', form)
    }
    getReservation(){
      return this.http.get('http://localhost:3000/directeur/reservation')
    }
    putReservation(id, reservation){
      return this.http.put('http://localhost:3000/directeur/reservation/' + id, reservation)
    }
    deleteReservation(id){
      return this.http.delete('http://localhost:3000/directeur/reservation/' + id)
    }
    //api contact
    postContact(form){
      return this.http.post('http://localhost:3000/contact', form)
    }
    getContact(){
      return this.http.get('http://localhost:3000/contact')
    }
    putContact(id, contact){
      return this.http.put('http://localhost:3000/contact/' + id, contact)
    }
    deleteContact(id){
      return this.http.delete('http://localhost:3000/contact/' + id)
    }
}
