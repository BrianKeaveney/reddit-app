import { Article } from './article.model';
import { Component, OnInit, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  @Input() article: Article;

  constructor() {
    this.article = new Article(
      'Angular',
      'http://angular.io',
      10);
    }
      voteUp(): Boolean {
        this.article.voteUp();
        return false;
      }
   
      voteDown(): Boolean {
        this.article.voteDown();
        return false;
      }

  ngOnInit() {
  }

}
