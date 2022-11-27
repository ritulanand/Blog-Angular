import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { post } from './post.model';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.scss']
})
export class PostlistComponent implements OnInit, OnDestroy {

  
posts:post[] = [];
  
private postSub:Subscription;

  constructor(public ps:PostsService) { }
  ngOnInit(): void {
    this.posts = this.ps.getAll();
    this.postSub = this.ps.getUpdateListener().subscribe((posts:post[]) => {
      this.posts = posts;
    })
  }
  ngOnDestroy():void{
this.postSub.unsubscribe();
  }
}
