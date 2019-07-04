import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
   
    items: MenuItem[];
    activeItem: MenuItem;

   

    ngOnInit() {
        this.items = [
            {label: 'Início', icon: 'fa fa-home', "routerLink": "/home"},
            {label: 'Sistema', icon: 'fa fa-bus',  "routerLink": "/sistema"},
            {label: 'Login', icon: 'fa fa-fw fa-book', "routerLink": "/login"},
            {label: 'Suporte', icon: 'fa fa-fw fa-book'}           
         
        ];

        this.activeItem = this.items[0];



    }

    closeItem(event, index) {
        this.items = this.items.filter((item, i) => i !== index);
        event.preventDefault();
    }


    activateMenu(){
          this.activeItem =this.items['activeItem'];
          alert (this.activeItem.label);
        
      
     }
}