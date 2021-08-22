import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[]= [
    new Quote('hope and will-power','No matter where you are from your dreams are valid','Lupita Nyongo','enock',new Date(2020,3,17)),
    new Quote('Creativity' ,'Change the world by being yourself',' T.S Eliot' ,'enock',new Date(2019,4,9)),
    new Quote('Beginnings', 'Every moment is a fresh beginning.','Mark Twain','enock',new Date(2020,5,17)),
    new Quote('Happiness' ,'Never regret anything that made you smile.','Amy Poehler','enock',new Date(2019,10,17)),
    new Quote('Greatness' ,'No human is limited. ', 'Eliud Kipchoge','enock',new Date(2020,6,23)),
    new Quote('Forgive Yourself' ,'Simplicity is the ultimate sophistication.' ,'Leonardo da Vinci','enock',new Date(2020,11,2)),

  ];

  quoteDelete(isRead, index){
    if (isRead) {
      let toDelete = confirm(`Are you sure you want to delete this Quote?`)
      if(toDelete){
        this.quotes.splice(index,1);
      }
      
    }
  }
  
  toggleDetail(index){
    this.quotes[index].showAuthor = !this.quotes[index].showAuthor ;
  }
 
  constructor() { }

  ngOnInit(): void {
  }

}
