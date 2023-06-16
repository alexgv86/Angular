import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { DbzService } from '../../services/dbz.service';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }]

  @Output()
  //public onDelete: EventEmitter<number> = new EventEmitter();
public onDelete: EventEmitter<string> = new EventEmitter();
    onDeleteCharacter( id?: string): void {
      if ( !id ) return;
      this.onDelete.emit(id);
    }
    //onDeleteCharacter(index: number):void {
    //TODO: Emitir el ID del personaje
  //   this.onDelete.emit(index);

  //   console.log({index});
  // }
}
