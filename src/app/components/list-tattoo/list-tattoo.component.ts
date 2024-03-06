import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Tattoo } from '../../models/tattoo';
import { TattooService } from '../../services/tattoo.service';

@Component({
  selector: 'app-list-tattoo',
  templateUrl: './list-tattoo.component.html',
  styleUrls: ['./list-tattoo.component.css']
})
export class ListTattooComponent implements OnInit {
  listTattoos: Tattoo[] = [];

  constructor(private tattooService: TattooService, private toastr: ToastrService) {}

  ngOnInit() {
    this.getTattoos();
  }

  getTattoos() {
    this.tattooService.getTattoos().subscribe(
      data => {
        console.log(data);
        this.listTattoos = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  // Manejar el evento de eliminación de tatuaje
  onTattooDeleted(id: string) {
    // Filtrar la lista para quitar el tatuaje eliminado
    this.listTattoos = this.listTattoos.filter(tattoo => tattoo._id !== undefined && tattoo._id !== id);
  }
}
