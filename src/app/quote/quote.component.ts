import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[]= [
    new Quote('hope and will-power','No matter where you are from your dreams are valid','Lupita Nyongo','enock'),
    new Quote('Creativity' ,'Change the world by being yourself',' T.S Eliot' ,'enock'),
    new Quote('Beginnings', 'Every moment is a fresh beginning.','Mark Twain','enock'),
    new Quote('Happiness' ,'Never regret anything that made you smile.','Amy Poehler','enock'),
    new Quote('Greatness' ,'No human is limited. ', 'Eliud Kipchoge','enock'),
    new Quote('Forgive Yourself' ,'Simplicity is the ultimate sophistication.' ,'Leonardo da Vinci','enock'),

  ];
  toggleDetail(index){
    this.quotes[index].showAuthor = !this.quotes[index].showAuthor ;
  }
 
  constructor() { }

  ngOnInit(): void {
  }

}
