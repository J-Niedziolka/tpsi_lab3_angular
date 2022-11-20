import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs';

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
  todoItem: string = "";
  errorBoolean = false;

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
    const index = this.items.findIndex(obj => obj.name == this.todoItem);
    //#2 solution
    if(index !== -1){
      this.errorBoolean = true;
      return;
    }
    //#1 solution to alert about list element already existing and
    //prevent from adding it again
    // if(index !==  -1)
    //   this.todoItem = "takie zadanie jest już dodane!";
    // else{

    //both solutions share this part
      const item = { id: ++this.lastId, name: this.todoItem };
      this.items.push(item);
      this.todoItem = "";

    //#2
    this.errorBoolean = false;
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

