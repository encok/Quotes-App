import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[]= [
    {id:1, name:'Lupita Nyongo', description:'No matter where you are from your dreams are valid.'},
    {id:2, name:' T.S Eliot', description:'Change the world by being yourself'},
    {id:3, name:'Mark Twain',description:'Every moment is a fresh beginning.'},
    {id:4, name:'Amy Poehler',description:'Never regret anything that made you smile.'},
    {id:5, name:'Eliud Kipchoge',description:'No human is limited. '},
    {id:6, name:'Leonardo da Vinci',description:'Simplicity is the ultimate sophistication.'},

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
