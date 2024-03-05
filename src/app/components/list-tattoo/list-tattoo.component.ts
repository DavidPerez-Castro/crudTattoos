import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Tattoo } from '../../models/tattoo';
import { TattooService } from '../../services/tattoo.service';

@Component({
  selector: 'app-list-tattoo',
  templateUrl: './list-tattoo.component.html',
  styleUrl: './list-tattoo.component.css'
})
export class ListTattooComponent implements OnInit {
  listTattoos: Tattoo[] = [];

  constructor(private tattooService: TattooService, private toastr: ToastrService) {}

  ngOnInit() {
    this.getTattoos();
  }

  getTattoos() {
    this.tattooService.getTattoos().subscribe(data => {
      console.log(data);
      this.listTattoos = data;
    }, error => {
      console.log(error);
    })
  }

  deleteTattoo(id: any) {
    console.log("Deleting tattoo with ID: ", id); // Agrega esta línea
    this.tattooService.deleteTattoo(id).subscribe(data => {
      this.toastr.error('El tatuaje fue eliminado con exito', 'Tatuaje Eliminado');
      this.getTattoos();
    }, error => {
      console.log(error);
    });
  }

}
