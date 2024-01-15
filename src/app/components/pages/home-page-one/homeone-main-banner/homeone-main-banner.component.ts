import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ContentsModel } from 'src/app/components/models/contentsModel';
import { ContentsService } from 'src/app/components/services/contents.service';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-homeone-main-banner',
    templateUrl: './homeone-main-banner.component.html',
    styleUrls: ['./homeone-main-banner.component.scss']
})
export class HomeoneMainBannerComponent implements OnInit {
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
	  

	gymHomeSlides: OwlOptions = {
		autoplayHoverPause: true,
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		autoHeight: true,
		autoplay: true,
		dots: false,
		loop: true,
		nav: true,
		items: 1,
		navText: [
			"<i class='flaticon-arrows'></i>",
			"<i class='flaticon-right-arrow'></i>"
		]
	}

}