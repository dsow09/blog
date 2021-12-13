import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from './model/post';
import * as firebase from 'firebase/database'
import { getDatabase, onValue, ref } from 'firebase/database';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts: Post[] = [];
  postsSubject = new Subject<Post[]>();

  emitPosts()
  {
    this.postsSubject.next(this.posts);
  }

  savePosts()
  {
    firebase.set(ref(getDatabase(), '/posts'), this.posts);
  }

  getPosts()
  {
    onValue(ref(getDatabase(), '/posts'),
    (data) => {
      this.posts = data.val() ? data.val() : [];
      this.emitPosts();
    });
  }

  createNewPost(post: Post)
  {
    this.posts.push(post);
    this.savePosts();
    this.emitPosts();
  }

  removePost(post: Post)
  {
    const postIndex = this.posts.findIndex(
      (postEl) => {
        postEl === post ? true : false;
      }
    );
    this.posts.splice(postIndex, 1);
    this.savePosts();
    this.emitPosts();
  }


  constructor() { }
}
