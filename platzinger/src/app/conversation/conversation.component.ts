import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../interfaces/user';
import { UserService } from '../servises/user.service';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit {
  
  friendId: any;
  friends: User[];
  friend: User;
  
  constructor(private activadteRoute: ActivatedRoute, private userService: UserService) { 
    this.friendId = this.activadteRoute.snapshot.params['uid'];
    console.log(this.friendId);
    this.friends = this.userService.getFriends();
    this.friend = this.friends.find((record)=>{
      return record.uid == this.friendId
    });
    console.log(this.friend);
  }

  ngOnInit(): void {
  }

}
