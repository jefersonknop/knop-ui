import { Component, OnInit, ViewChild } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';






@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})


export class SidebarComponent implements OnInit { 
  shared : SharedService;
  


  constructor(  
  ) {
     
      this.shared = SharedService.getInstance();

    
      

  }

  ngOnInit() {
    
    
  }
  
}