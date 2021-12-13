import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Post } from '../model/post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  postForm  = this.fb.group({
    title : ['', [Validators.required, Validators.minLength(3)]] ,
    description: ['', [Validators.required, Validators.minLength(5)]]
  }
  );

  constructor
  (
    private fb: FormBuilder,
    private postService: PostService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSavePost()
  {
    const title = this.postForm.get('title')?.value;
    const description = this.postForm.get('description')?.value;
    const newPost = new Post(title, description);
    this.postService.createNewPost(newPost);
    console.log('Enregistrement du post avec succès');
    this.router.navigate(['/posts']);
  }

  onBack()
  {
    this.router.navigate(['']);
  }



}
