import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommentService } from './services/comment.service';

@Component({
  selector: 'app-comment-form',
  template: `
    <form [formGroup]="commentForm" (ngSubmit)="addComment()">
      <textarea formControlName="content" placeholder="Add a comment" required></textarea>
      <button type="submit">Submit</button>
    </form>
  `
})
export class CommentFormComponent {
  @Output() newComment = new EventEmitter<void>();
  commentForm: FormGroup;

  constructor(private fb: FormBuilder, private commentService: CommentService) {
    this.commentForm = this.fb.group({
      content: ['', Validators.required]
    });
  }

  addComment() {
    this.commentService.addComment(this.commentForm.value).subscribe(() => {
      this.newComment.emit();
      this.commentForm.reset();
    });
  }
}
