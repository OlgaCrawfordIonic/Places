import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { NavController,ModalController, ModalOptions } from '@ionic/angular';
import { CreateBookingComponent } from '../../../bookimgs/create-booking/create-booking.component';
import { Place } from '../../places.model';
import { PlacesService } from '../../places.service';
@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  constructor(private router:Router, private navCtrl: NavController,
    private modal:ModalController, private route: ActivatedRoute,
    private placesService: PlacesService) { }
   place:Place;
  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if(!paramMap.has('placeId'))
      { this.navCtrl.navigateBack('places/tabs/discover');
       return;}
      /* from this.place=this.placesService.places.find
       (p => p.id===paramMap.get('placeId'));  to*/
       this.place=this.placesService.getPlace(paramMap.get('placeId'));
       
   }
   );
  }

  onBookPlace(){
    //this.router.navigateByUrl('/places/tabs/discover');
  //  this.navCtrl.navigateBack('/places/tabs/discover');
   // this.navCtrl.pop
   this.modal.create({component: CreateBookingComponent,
    componentProps: {selectedPlace: this.place}
   })
   .then(modalEL => { modalEL.present();
    return modalEL.onDidDismiss();
  })
     .then(resultData => {
      console.log(resultData.data, resultData.role);
      if (resultData.role === 'confirm')
      { console.log('BOOKED!')}

     })
     
  }

}
