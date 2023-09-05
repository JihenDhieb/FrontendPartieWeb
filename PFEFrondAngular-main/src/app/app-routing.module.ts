import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UpdateUserComponent } from './update-user/update-user.component'
import { ListVendorComponent } from './list-vendor/list-vendor.component';

import { AddCatComponent } from './add-cat/add-cat.component';

import { ProfileComponent } from './profile/profile.component';
import { VendreComponent } from './vendre/vendre.component';


import { MyPagesComponent } from './my-pages/my-pages.component';
import { DetailsPageComponent } from './details-page/details-page.component';

import { UpdatePageComponent } from './update-page/update-page.component';
import { MapsComponent } from './maps/maps.component';




import { CartComponent } from './cart/cart.component';

import { TableListComponent } from './table-list/table-list.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { SideBarDComponent } from './side-bar-d/side-bar-d.component';
import { ChartComponent } from './chart/chart.component';
import { LivreurComponent } from './livreur/livreur.component';
import { OrderClComponent } from './order-cl/order-cl.component';


const routes: Routes = [{path:'register',component:RegisterComponent},
{path:'login',component:LoginComponent},

{path:'list-vendor',component:ListVendorComponent},

{path:'add-category',component:AddCatComponent},

{path:'profile',component:ProfileComponent, children:[
  {path:'update/:id',component:UpdateUserComponent},
  {path:'vendor',component:VendreComponent},
 
  {path:'myPage/:id',component:MyPagesComponent},
  
  
  {path:'UpdatePage/:id',component:UpdatePageComponent},
  {path:'OrderUser/:id',component:OrderClComponent}
  
  
  
]},
{path:'profile/livreur',component:LivreurComponent},



 


{path:'maps',component:MapsComponent},





{path:'home/cart',component:CartComponent},

{path:'tabless',component:TableListComponent},
{path:'sidebar',component:SideBarDComponent,children:[
  {path:'chart',component:ChartComponent},
  {path:'update/:id',component:UpdateUserComponent},

]},
{path:'dashbord',component:DashbordComponent},
{path:'chart',component:ChartComponent},
{path:'detailP/:id',component:DetailsPageComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
