import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';
import { UserService } from '../servises/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  friends: User[];
  query: string='';

  constructor(private userServise: UserService) { 
    this.friends = userServise.getFriends();
  }

  ngOnInit(): void {
  }

}
