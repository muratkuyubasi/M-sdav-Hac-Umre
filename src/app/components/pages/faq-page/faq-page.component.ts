import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-faq-page',
    templateUrl: './faq-page.component.html',
    styleUrls: ['./faq-page.component.scss']
})
export class FaqPageComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {}

    // for tab click event
    currentTab = 'tab1';
    switchTab(event: MouseEvent, tab: string) {
        event.preventDefault();
        this.currentTab = tab;
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


}