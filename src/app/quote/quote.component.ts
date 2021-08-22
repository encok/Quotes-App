import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[]= [
    new Quote('hope and will-power','No matter where you are from your dreams are valid','Lupita Nyongo','Benson Olerina',new Date(2020,3,17),0,0),
    new Quote('Creativity' ,'Change the world by being yourself because you are the one',' T.S Eliot' ,'Edward Muthee',new Date(2019,4,9),0,0),
    new Quote('Beginnings', 'Every moment is a fresh beginning. Adore the small beginnings','Mark Twain','Allan Nyansimera',new Date(2020,5,17),0,0),
    new Quote('Happiness' ,'Never regret anything that made you smile.Give it its worth .','Amy Poehler','enock kipronoh',new Date(2019,10,17),0,0),
    new Quote('Greatness' ,'No human is limited. No human is limited No human is limited ', 'Eliud Kipchoge','enock',new Date(2020,6,23),0,0),
    new Quote('Forgive Yourself' ,'Simplicity is the ultimate sophistication. You don.t have' ,'Leonardo da Vinci','Vitalis Nanok',new Date(2020,11,2),0,0),

  ];
  addQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }


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
