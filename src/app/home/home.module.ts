import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { ReactiveFormsModule } from '@angular/forms';


import { HomePageRoutingModule } from './home-routing.module';
import { ScrapServiceService } from '../services/scrap-service.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ScrapServiceService],
  declarations: [HomePage]
})
export class HomePageModule {}
