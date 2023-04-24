import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child-comp',
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.scss']
})
export class ChildCompComponent implements OnChanges, OnInit, DoCheck,
 AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
@Input() inputValue : string;
@Input() userList : string[] | undefined;
userData : any;
@Output() someEvent : EventEmitter<any> = new EventEmitter();
@ContentChild ('child') contentChild : ElementRef<any>;
@ViewChild('view') view : ElementRef;

constructor() {
  console.log("Construtor called")
}

ngOnChanges(changes: SimpleChanges): void {
  this.userData = changes['userList']?.currentValue;
}
ngOnInit(): void {
  console.log("ngOnInit called")
}
ngDoCheck() : void {
console.log("ngDoCheck called");
}

sendBack() : void {
  let Person = {
    id : 1,
    name : "Kishor"
  }
  this.someEvent.emit(Person)
}

ngAfterContentInit() {
  console.log("ngAfterContentInit", this.contentChild);
  this.contentChild.nativeElement.setAttribute("style",`color:${this.inputValue}`);
}

ngAfterContentChecked():void {
console.log("ngAfterContentChecked");
this.contentChild.nativeElement.setAttribute("style",`color:${this.inputValue}`);
}

ngAfterViewInit():void {
  console.log("ngAfterViewInit called", this.view);
  this.view.nativeElement.setAttribute("style",`color:${this.inputValue}`);
}

ngAfterViewChecked():void {
  console.log("ngAfterViewChecked called", this.view);
  this.view.nativeElement.setAttribute("style",`color:${this.inputValue}`);
}
}
