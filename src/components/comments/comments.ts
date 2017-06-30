import { Component } from '@angular/core';

/**
 * Generated class for the CommentsComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'comments',
  templateUrl: 'comments.html'
})
export class CommentsComponent {

  text: string;

  constructor() {
    console.log('Hello CommentsComponent Component');
    this.text = 'Hello World';
  }

}
