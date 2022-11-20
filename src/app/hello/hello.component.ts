import { Component, OnInit } from '@angular/core';
import { disableDebugTools } from '@angular/platform-browser';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  name: string = "<podaj swoje imię>";
  counter: number = 0;
  deadline: Date = new Date();
  items = [
    {id: 1, name: "Wynieść śmieci", priority: '', deadline: new Date() },
    {id: 2, name: "Pójść do sklepu", priority: '', deadline: new Date() },
    {id: 3, name: "Przygotować obiad", priority: '', deadline: new Date() },
    {id: 4, name: "Posprzątać", priority: '', deadline: new Date() },
  ];
  lastId: number = this.items.length;
  todoItem: string = "";
  errorBoolean = false;
  priority: string = '3';

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
      const item = { id: ++this.lastId, name: this.todoItem, priority: this.priority,
        deadline: this.deadline };
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

