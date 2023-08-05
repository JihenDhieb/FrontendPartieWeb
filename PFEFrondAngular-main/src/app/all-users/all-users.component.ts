import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { UserServiceService } from '../_services/user-service.service';
import { MatTableDataSource } from '@angular/material/table';
import { user2 } from '../Models/user2';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss']
})
export class AllUsersComponent implements OnInit, AfterViewInit {
  users: user2[] = [];
  dataSource: MatTableDataSource<user2> = new MatTableDataSource<user2>([]);
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'vendeur', 'role', 'phone'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  isFiltering: boolean = false;

  constructor(private user: UserServiceService) { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
getUsers(filter: any){
  this.user.Client().subscribe({
    next: (data) => {
      this.users = data;
      this.dataSource.data = data;
      this.dataSource.filter = filter;
    },
    error: (e) => console.error(e)
  });
}
  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    if (filterValue === "") {
      this.dataSource.data = [];
    } else {
      this.getUsers(filterValue);
    }

  }
  
}
