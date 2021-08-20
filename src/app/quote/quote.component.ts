import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[]= [
    new Quote('hope and will-power','No matter where you are from your dreams are valid','Lupita Nyongo'),
    new Quote('Creativity' ,'Change the world by being yourself',' T.S Eliot' ),
    new Quote('Beginnings', 'Every moment is a fresh beginning.','Mark Twain'),
    new Quote('Happiness' ,'Never regret anything that made you smile.','Amy Poehler'),
    new Quote('Greatness' ,'No human is limited. ', 'Eliud Kipchoge',),
    new Quote('Forgive Yourself' ,'Simplicity is the ultimate sophistication.' ,'Leonardo da Vinci'),

  ];
  toggleDetail(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
