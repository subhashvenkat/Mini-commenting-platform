import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Comment } from './models/comment';
import { CommentService } from './services/comment.service';

@Component({
  selector: 'app-comment-item',
  template: `
    <div>
      <p>{{ comment.content }} - {{ comment.user }}</p>
      <button (click)="deleteComment()">Delete</button>
    </div>
  `
})
export class CommentItemComponent {
  @Input() comment!: Comment;
  @Output() delete = new EventEmitter<void>();

  constructor(private commentService: CommentService) {}

  deleteComment() {
    this.commentService.deleteComment(this.comment.id).subscribe(() => {
      this.delete.emit();
    });
  }
}
