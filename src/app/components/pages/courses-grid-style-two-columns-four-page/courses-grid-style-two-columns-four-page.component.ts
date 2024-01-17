import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-courses-grid-style-two-columns-four-page',
  templateUrl: './courses-grid-style-two-columns-four-page.component.html',
  styleUrls: ['./courses-grid-style-two-columns-four-page.component.scss']
})
export class CoursesGridStyleTwoColumnsFourPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  selectedItem = null;

  toggleAccordionItem(item) {
      item.open = !item.open;
      if (this.selectedItem && this.selectedItem !== item) {
          this.selectedItem.open = false;
      }
      this.selectedItem = item;
  }

  
  accordionItems = [
      {
          title: 'Kısaca Umre',
          content: 'Umre Vizesi ile Krallık şehirleri arasında hareket etmek mümkün mü?',
          open: false
      },
      {
          title: 'Ramazan’da Umre',
          content: 'Associate: a two-year program that either leads to a specific vocation or transitions to a bachelor program. Bachelor: a four or five-year program where students earn credits in a wide variety of courses.',
          open: false
      },
      {
          title: 'Umre Tekrarı',
          content: 'Associate: a two-year program that either leads to a specific vocation or transitions to a bachelor program. Bachelor: a four or five-year program where students earn credits in a wide variety of courses.',
          open: false
      },
      {
          title: 'Umrenin Fazileti',
          content: 'Associate: a two-year program that either leads to a specific vocation or transitions to a bachelor program. Bachelor: a four or five-year program where students earn credits in a wide variety of courses.',
          open: false
      },
      {
          title: 'Allahın Haremi Mekke',
          content: 'Associate: a two-year program that either leads to a specific vocation or transitions to a bachelor program. Bachelor: a four or five-year program where students earn credits in a wide variety of courses.',
          open: false
      }
     
  ];
  accordion1Items = [
     
      {
          title: 'Bir mümin Krallığa farklı yollarla girip çıkabilir mi?',
          content: 'Associate: a two-year program that either leads to a specific vocation or transitions to a bachelor program. Bachelor: a four or five-year program where students earn credits in a wide variety of courses.',
          open: false
      },
      {
          title: 'Umrenin kaç kez yapılmasına izin verilir?',
          content: 'Associate: a two-year program that either leads to a specific vocation or transitions to a bachelor program. Bachelor: a four or five-year program where students earn credits in a wide variety of courses.',
          open: false
      },
      {
          title: 'İzin saatinden bir saat veya daha fazla sonra umre yapmak ?',
          content: 'Associate: a two-year program that either leads to a specific vocation or transitions to a bachelor program. Bachelor: a four or five-year program where students earn credits in a wide variety of courses.',
          open: false
      }
  ];

  // for tab click event
  currentTab = 'tab1';
  switchTab(event: MouseEvent, tab: string) {
      event.preventDefault();
      this.currentTab = tab;
  }
  missionSlides: OwlOptions = {
    loop: true,
    nav: true,
    dots: false,
    autoplayHoverPause: true,
    autoplay: false,
    items: 1,
    navText: [
        "<i class='bx bx-left-arrow-alt'></i>",
        "<i class='bx bx-right-arrow-alt'></i>"
    ]
}
blogSlides: OwlOptions = {
    loop: true,
    nav: true,
    dots: false,
    autoplayHoverPause: true,
    autoplay: true,
    margin: 30,
    navText: [
        "<i class='bx bx-left-arrow-alt'></i>",
        "<i class='bx bx-right-arrow-alt'></i>"
    ],
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1200: {
            items: 3
        }
    }
}



}
