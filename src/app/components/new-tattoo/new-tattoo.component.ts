import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Tattoo } from '../../models/tattoo';
import { TattooService } from '../../services/tattoo.service';

@Component({
  selector: 'app-new-tattoo',
  templateUrl: './new-tattoo.component.html',
  styleUrls: ['./new-tattoo.component.css']
})
export class NewTattooComponent implements OnInit {
  tattooForm: FormGroup;
  titulo = 'Crear tatuaje';
  id: string | null;

  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private tattooService: TattooService,
              private activatedRoute: ActivatedRoute) {
    this.tattooForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      details: ['', Validators.required],
      imageUrl: ['', [Validators.required, this.validateImageUrl]],
    });

    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.id) {
      this.titulo = 'Editar tatuaje';
      this.tattooService.getTattooById(this.id).subscribe(tattoo => {
        this.tattooForm.patchValue({
          title: tattoo.title,
          description: tattoo.description,
          price: tattoo.price,
          details: tattoo.details,
          imageUrl: tattoo.imageUrl,
        });
      });
    }
  }

  ngOnInit(): void {
  }

  // Agregar o editar tatuaje
  saveTattoo() {
    const tattooData: Tattoo = {
      title: this.tattooForm.get('title')?.value,
      description: this.tattooForm.get('description')?.value,
      price: this.tattooForm.get('price')?.value,
      details: this.tattooForm.get('details')?.value,
      imageUrl: this.tattooForm.get('imageUrl')?.value,
    };

    if (this.id) {
      // Editar tatuaje
      this.tattooService.editTattoo(this.id, tattooData).subscribe(
        () => {
          this.toastr.success('El tatuaje fue actualizado con éxito!', 'Tatuaje Actualizado');
          this.router.navigate(['/']);
        },
        error => {
          console.log(error);
          this.tattooForm.reset();
        }
      );
    } else {
      // Agregar tatuaje
      this.tattooService.addTatto(tattooData).subscribe(
        () => {
          this.toastr.success('El tatuaje fue registrado con éxito!', 'Tatuaje Registrado');
          this.router.navigate(['/']);
        },
        error => {
          console.log(error);
          this.tattooForm.reset();
        }
      );
    }
  }

  validateImageUrl(control: AbstractControl): ValidationErrors | null {
    const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    const valid = urlPattern.test(control.value);
    return valid ? null : { invalidUrl: true };
  }

}
