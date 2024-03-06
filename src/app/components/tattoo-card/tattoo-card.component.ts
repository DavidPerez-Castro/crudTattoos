import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Tattoo } from '../../models/tattoo';
import { TattooService } from '../../services/tattoo.service';

@Component({
  selector: 'app-tattoo-card',
  templateUrl: './tattoo-card.component.html',
  styleUrls: ['./tattoo-card.component.css']
})
export class TattooCardComponent implements OnInit {

  @Input() tattoo!: Tattoo;
  @Output() tattooDeleted = new EventEmitter<string>();

  constructor(private tattooService: TattooService, private toastr: ToastrService) {}

  ngOnInit() {
    if (!this.tattoo) throw Error('Tattoo property is required');
  }

  deleteTattoo(id: any) {
    console.log("Deleting tattoo with ID: ", id);
    this.tattooService.deleteTattoo(id).subscribe(
      () => {
        this.toastr.success('El tatuaje fue eliminado con éxito', 'Tatuaje Eliminado');
        this.tattooDeleted.emit(id); // Emitir evento para notificar la eliminación
      },
      error => {
        console.log(error);
      }
    );
  }
}
