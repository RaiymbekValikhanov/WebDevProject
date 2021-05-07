import { Component, Input, OnInit } from '@angular/core';
import { Comment } from '../../models';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input()comment: Comment | undefined;
  @Input()visitorComment: boolean = false;
  visibleEdit = false;
  editText = '';
  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    if (this.comment) {
      this.editText = this.comment.body;
    }
  }
  deleteCom(commentID: number): void {
    if (confirm('Удалить комментарий?')) {
      this.userService.deleteCom(commentID).subscribe(info => {
        alert(info);
      }, error => {
        console.log(error);
        alert('error');
      });
      window.location.reload();
    }
  }
  editCom(commentID: number): void {
    if (confirm('Сохранить изменения?')) {
      this.userService.editCom(commentID, this.editText).subscribe(res => {
        console.log(res);
      }, error => {
        console.log(error);
      });
      window.location.reload()
    }
  }
}
