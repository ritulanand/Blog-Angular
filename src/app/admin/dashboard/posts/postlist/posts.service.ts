import { Injectable } from '@angular/core';
import { post } from './post.model';
import {Subject} from  'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private posts:post[] = [];
  private postUpdate = new Subject<post[]>();
  constructor() { }
  getUpdateListener(){
    return this.postUpdate.asObservable();  
  }
  addPost(title:string, content: string, dateTime:any ){
    const post:post = {title, content:content, dateTime : new Date()};
    this.posts.push(post); 
    this.postUpdate.next([...this.posts]);
  }
  getAll(){
    return [...this.posts];
  }
}
