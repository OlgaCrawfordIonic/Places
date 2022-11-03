import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Place } from '../../places.model';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-offer-bookings',
  templateUrl: './offer-bookings.page.html',
  styleUrls: ['./offer-bookings.page.scss'],
})
export class OfferBookingsPage implements OnInit {
place:Place;
  constructor(private router:Router, private route:ActivatedRoute, private navCtrl:NavController, 
    private placesService:PlacesService) { }

  goBack(){
    this.router.navigateByUrl('/places/tabs/offers');

    }
 
  
  ngOnInit() {//can use it even if the page is cashed
    this.route.paramMap.subscribe(paramMap => {
       if(!paramMap.has('placeId'))
       { this.navCtrl.navigateBack('places/tabs/offers');
        return;}
       /* from this.place=this.placesService.places.find
        (p => p.id===paramMap.get('placeId'));  to*/
        this.place=this.placesService.getPlace(paramMap.get('placeId'));
        
    }
    );
  }

}
