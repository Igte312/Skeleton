import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { HomePageRoutingModule } from './home-routing.module';
import { MyNavigationBarComponent } from '../my-navigation-bar/my-navigation-bar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    MatDatepickerModule,

    
  ],
  declarations: [HomePage, MyNavigationBarComponent]
})
export class HomePageModule {}
