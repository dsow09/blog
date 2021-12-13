import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  Subscription } from 'rxjs';
import { Post } from '../model/post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: Post[] = [];
  postSubscription: Subscription = new Subscription();


  constructor(private postService: PostService, private router: Router) { }

  ngOnInit(): void {
    this.postSubscription = this.postService.postsSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
    this.postService.getPosts();
    this.postService.emitPosts();
  }

  onNewPost()
  {
    this.router.navigate(['posts', 'new']);
  }

  onDeletePost(post: Post)
  {
    this.postService.removePost(post);
  }

  

}
