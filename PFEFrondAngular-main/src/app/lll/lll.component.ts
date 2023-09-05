import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UserServiceService } from '../_services/user-service.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogOverviewExampleDialogComponent } from '../dialog-overview-example-dialog/dialog-overview-example-dialog.component';

@Component({
  selector: 'app-lll',
  templateUrl: './lll.component.html',
  styleUrls: ['./lll.component.scss']
})
export class LllComponent implements OnInit, AfterViewInit {
  livreur!: any[];
  displayedColumns: string[] = ['id','firstName','lastName', 'email', 'phone', 'enLigne','comission','Action'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>([]);
  animal!: Number;
  name!: string;
  us!: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
 
  constructor(private user:UserServiceService, public dialog: MatDialog, private userServ:UserServiceService) {}

  ngOnInit(): void {
   
  }
  
  getLivreurs(): void {
    this.user.Livreurs().subscribe({
      next: (data) => {
        this.livreur= data;
        console.log(data);
        this.dataSource.data = data;
      },
      error: (e) => console.error(e)
    });
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    
    if (this.dataSource.paginator && filterValue === "") {
      this.dataSource.paginator.firstPage();
      this.dataSource.data=[];
    }else{this.getLivreurs();}
  }
  
  openDialog(): void {
    let dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, {
      width: '700px',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  payer(id: string) {
    console.log('idLivreur', id);
  
    const currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}");
    const email = currentUser.email;
  
    this.userServ.getUserByemail(email)
      .subscribe({
        next: (data) => {
          this.us = data;
          console.log('idSousadmin', this.us.id);
          
          this.userServ.payer(id, this.us.id).subscribe({next: (data)  => {
            console.log('success');
        }});
        },
        error: (e) => console.error(e)
      });
  }
}
