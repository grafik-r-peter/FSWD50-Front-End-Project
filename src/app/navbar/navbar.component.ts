import { Component, OnInit } from '@angular/core';
import { UsersService } from '../shared/users.service';
import { UserComponent } from '../user/user.component';


@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public authService: UsersService) {}

  ngOnInit() {
  }

}
