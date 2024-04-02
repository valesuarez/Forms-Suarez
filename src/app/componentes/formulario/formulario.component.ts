import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { soloGmailValidator } from '../../utils/valideitors';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent {
  [x: string]: any;

  /**
  * modelo de formulario
  * {
  * Nombre del Alumno: ' ',
  * Apellido del Alumno: ' ',
  * Email del Alumno: ' ' ,
  * Nota Final: ' ',
  * Estado:
  * }
  */
  /*FORMULARIO DEL ALUMNO*/

  miFormulario= this.formBuilder.group({
    nombreDelAlumno: this.formBuilder.control('',[
      Validators.required,
      Validators.pattern('^[a-zA-Z]+$'),
      
      
    ]),
    apellidoDelAlumno: this.formBuilder.control('',[
      Validators.required,
      Validators.pattern('^[a-zA-Z]+$'),
     
    ]
    ),
    emailDelAlumno: this.formBuilder.control('',[
    Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}'),
    Validators.required,
    soloGmailValidator,
  ]),
    notaFinal:['',[
    Validators.required,
    Validators.pattern('-?[0-9]+(\.[0-9][0-9]?)?'),
    Validators.min(1),
    Validators.max(10),
    
  ]],
    estado:this.formBuilder.control('')
  })
 
  get nombreDelAlumnoControl(){
    return this.miFormulario.get('nombreDelAlumno')
  }
  get apellidoDelAlumnoControl(){
    return this.miFormulario.get('apellidoDelAlumno')
  }
    get emailDelAlumboControl(){
    return this.miFormulario.get('emailDelAlumno');
  }
  get notaFinalControl(){
    return this.miFormulario.get('notaFinal');
  }
  get estadoControl(){
    return this.miFormulario.get('estado')
  }
  
 
  constructor(private formBuilder: FormBuilder){
    
  }

  onSubmit():void{
    if(this.miFormulario.valid){
      Swal.fire({
      icon:'success',
      title:'Realizado',
      text:'ALUMNO AGREGADO CORRECTAMENTE',
    }) 
    }else{
      this.miFormulario.markAllAsTouched();
      Swal.fire({
        icon:'error',
        title:'error',
        text:'VERIFIQUE QUE LOS DATOS SEAN CORRECTOS'})


  }}
  /*
  onSubmit(ngForm:NgForm):void{
    if(ngForm.valid){
      Swal.fire({
      icon:'success',
      title:'Realizado',
      text:'ALUMNO AGREGADO CORRECTAMENTE',
    }) 
    }else{
      ngForm.form.markAllAsTouched();
      Swal.fire({
        icon:'error',
        title:'error',
        text:'VERIFIQUE QUE LOS DATOS SEAN CORRECTOS'})

    }
    
  }
  
  */
}
