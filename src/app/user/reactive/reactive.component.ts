import { Component , OnInit} from '@angular/core';
import {Observable,Observer,Subject,catchError} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PostsService } from '../../interface/posts.service';
import { Post } from '../../interface/interfaces';
@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.scss'
})
export class ReactiveComponent {
  public hasError: boolean = false;
  public post$!: Observable<Post>;  
  constructor(private postService: PostsService){
    this.post$ = this.postService.getPost().pipe(catchError(error => {
      console.error(error);
      this.hasError = true;
      throw new Error(error);
    }))
  }

}
