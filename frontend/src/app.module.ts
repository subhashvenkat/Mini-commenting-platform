import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login.component';
import { CommentsComponent } from './comments.component';
import { CommentFormComponent } from './comment-form.component';
import { CommentItemComponent } from './comment-item.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CommentsComponent,
    CommentFormComponent,
    CommentItemComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
