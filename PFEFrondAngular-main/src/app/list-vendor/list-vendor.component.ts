import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Observable, forkJoin, map } from 'rxjs';
import { user } from '../Models/user';
import { VendorServicesService } from '../_services/vendor-services.service';
import { page } from '../Models/page';
import { page2 } from '../Models/page2';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { UserServiceService } from '../_services/user-service.service';
import { MatDialog } from '@angular/material/dialog';
import { Dialog22Component } from '../dialog22/dialog22.component';

@Component({
  selector: 'app-list-vendor',
  templateUrl: './list-vendor.component.html',
  styleUrls: ['./list-vendor.component.scss'],
  
})
export class ListVendorComponent implements OnInit, AfterViewInit {
  Animal!:Number;
  displayedColumns: string[] = ['id', 'title', 'activity', 'email','address','phone','Action'];
  dataSource: MatTableDataSource<page2> = new MatTableDataSource<page2>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  loading$!: Observable<boolean>;
  vendors$!: Observable<page2[]>;
  constructor(private vendorService:VendorServicesService,private user:UserServiceService,public dialog: MatDialog){}
 // dataSource = new MatTableDataSource<Observable<page2[]>>(this.vendors$);

  ngOnInit(): void {
    this.initObservables();
   // Change this to the desired initial filter value.
  
   
    }
    getVendeurs(filter: any){
      this.vendorService.getVendorFromServer();  
    this.vendors$.subscribe((data: page2[]) => {
      this.dataSource.data = data; 
        this.dataSource.filter = filter;
    });
       
       
     
    }
  private initObservables(){
   
    this.loading$=this.vendorService.loading$;
    this.vendors$=this.vendorService.vendors$;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.dataSource.filter = filterValue;
    if (filterValue === "") {
      this.dataSource.data = [];
    } else {
      this.getVendeurs(filterValue);
    }
  }

  modifier(i:string):void {
    const dialogRef = this.dialog.open(Dialog22Component, {
      data: {id:i, animal: this.Animal},
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.Animal = result;
    });
  }
  bloquer(id:string){
    this.vendorService.UserByPage(id).subscribe({
      next:(data)=>{
        this.user.bloquer(data).subscribe();

      }});
   
  
  }


}


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

