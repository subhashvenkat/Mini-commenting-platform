import { Component, OnInit } from '@angular/core';
import { CommentService } from './services/comment.service';
import { Comment } from './models/comment';

@Component({
  selector: 'app-comments',
  template: `
    <app-comment-form (newComment)="fetchComments()"></app-comment-form>
    <div *ngFor="let comment of comments">
      <app-comment-item [comment]="comment" (delete)="fetchComments()"></app-comment-item>
    </div>
  `
})
export class CommentsComponent implements OnInit {
  comments: Comment[] = [];

  constructor(private commentService: CommentService) {}

  ngOnInit() {
    this.fetchComments();
  }

  fetchComments() {
    this.commentService.getComments().subscribe(comments => {
      this.comments = comments;
    });
  }
}
