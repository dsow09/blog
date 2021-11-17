import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  @Input() loveIts: number = 0;
  @Input() title: string | undefined;
  @Input() dontLoveIts: number = 0;
  @Input() content: string | undefined;
  @Input() created_at: Date | undefined

  onLove()
  {
    console.log('Love IT = '+ ++this.loveIts+' pour '+this.title);
  }

  onNotLove()
  {
    console.log("Don't Love IT "+ ++this.dontLoveIts+ ' pour '+this.title);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
