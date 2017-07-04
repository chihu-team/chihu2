import { Component, Input, Output, OnChanges } from '@angular/core';

/**
 * Generated class for the ShareComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'share',
  templateUrl: 'share.html'
})
export class ShareComponent implements OnChanges {

  @Input() data:any = {};
  cont:any = 0;
  like:any = 0;

  constructor() {
    
  }

  ngOnChanges(ch) {

    try {
      if (ch['data'].currentValue && ch['data'].currentValue.uid) {
        //console.log( ch['data'].currentValue.uid );
        this.cont = this.data.mark.cont;
        this.like = this.data.mark.like;
      }
    } catch (error) { }

  }

}
