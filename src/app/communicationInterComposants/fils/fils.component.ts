import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent {
  @Output()
  sendMessageToPapa = new EventEmitter<string>();

  sendMessage() {
    this.sendMessageToPapa.emit('cc fiston')
  }
}
