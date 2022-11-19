import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  nazwa: string = "<podaj swoje imię>";
  counter: number = 0;
  items = [
    {id: 1, name: "Wynieść śmieci" },
    {id: 2, name: "Pójść do sklepu" },
    {id: 3, name: "Przygotować obiad" },
    {id: 4, name: "Posprzątać" },
  ];
  lastId: number = this.items.length;
  todoItem: string = "<podaj czynność do wykonania>";

  constructor() { }

  ngOnInit(): void {

  }

  incrementCounter(){
    this.counter++;
  }

  decrementCounter(){
    this.counter--;
  }

  addItem(){
    const item = { id: ++this.lastId, name: this.todoItem };
    this.items.push(item);
    this.todoItem = "";
  }

  deleteItem(id: number){
    const index = this.items.findIndex(obj => obj.id == id);
    if(index !== -1){
      this.items.splice(index, 1);
      this.lastId--;
      for(let i=(index); i< this.lastId; i++)
        this.items[i].id--;
    }
  }
}

