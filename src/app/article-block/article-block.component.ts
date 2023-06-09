import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-article-block',
  templateUrl: './article-block.component.html',
  styleUrls: ['./article-block.component.scss']
})
export class ArticleBlockComponent  implements OnInit{
 
 
 
  @Input() displayArray: any;

  displayContent: any
  contentArray:any=[]

  ngOnInit(): void {
    this.displayContent =this.displayArray.slice(1, this.displayArray.length);
    console.log(this.displayContent, "sdfgh");
    const obs$ = of(this.displayContent)
    obs$.pipe(map((content: any) => {
      return content[0]
    })).subscribe((data) => {
     this.contentArray.push(data)
     console.log(`contr`,this.contentArray);
    })
  }
  

}
