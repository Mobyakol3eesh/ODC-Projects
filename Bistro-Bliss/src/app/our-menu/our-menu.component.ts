import { Component } from '@angular/core';
import { TopHeaderComponent } from '../top-header/top-header.component';
import { NavComponent } from '../nav/nav.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { AllMenuComponent } from './all-menu/all-menu.component';
import { OrderAppsComponent } from "./order-apps/order-apps.component";


@Component({
  selector: 'app-our-menu',
  standalone: true,
  imports: [TopHeaderComponent, NavComponent, AllMenuComponent, FooterComponent, CommonModule, OrderAppsComponent],
  templateUrl:'./our-menu.component.html',
  styleUrl: './our-menu.component.scss'
})
export class OurMenuComponent {
    selectedMenu: string = 'All';
    goPage(event : any){
      event.preventDefault();
      const page : string = event.target.innerText;
      const buttons = document.querySelectorAll('.btn');
      const clickedButton = event.target as HTMLElement;
      buttons.forEach((button) => {
         button.classList.remove('active');
      });
      console.log(buttons)
      switch (page) {
         case "All" :  this.selectedMenu = 'All'; 
          clickedButton.classList.add('active');
         break;
         case "Breakfast" : 
         this.selectedMenu = 'Breakfast';
          clickedButton.classList.add('active');
          break;
          case "Lunch" : this.selectedMenu = 'Lunch';
          clickedButton.classList.add('active');
          break;
          case "Dinner" : this.selectedMenu = 'Dinner';
          clickedButton.classList.add('active');
          break;
          case "Desserts" : this.selectedMenu = 'Desserts';
          clickedButton.classList.add('active');
          break;
      }
    }
}
