import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ContentsModel } from 'src/app/components/models/contentsModel';
import { ContentsService } from 'src/app/components/services/contents.service';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-homenine-main-banner',
    templateUrl: './homenine-main-banner.component.html',
    styleUrls: ['./homenine-main-banner.component.scss']
})
export class HomenineMainBannerComponent implements OnInit {

    path = environment.serverUrl;
	slidersModel!: ContentsModel;


	constructor(private contentsService: ContentsService) { }
	ngOnInit(): void {
		this.getnewsList();
	
	  }

	getnewsList() {
		this.contentsService.getsldiderList().subscribe(newsdata => {
		  this.slidersModel = newsdata;
		})
	  }

    healthCoachingBannerSlides: OwlOptions = {
        items: 1,
        nav: true,
		loop: true,
        dots: false,
        autoplay: true,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        autoplayHoverPause: true,
        navText: [
            "<i class='flaticon-arrows'></i>",
            "<i class='flaticon-right-arrow'></i>"
        ]
    }

}