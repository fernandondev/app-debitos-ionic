import { ScrapServiceService } from './../services/scrap-service.service';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators,ReactiveFormsModule, FormControl  } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  today: number = Date.now();
  ionicForm: FormGroup;
  consulta: any;
  consultado = false;


  constructor( public formBuilder: FormBuilder, public scrapService: ScrapServiceService) {

    this.ionicForm = this.formBuilder.group({
      placa: ['', [Validators.required]],
      renavam: ['',[Validators.required, Validators.minLength(8), Validators.maxLength(12), Validators.pattern("^[0-9]*$")] ],
        uf: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(3)]]
    })

  }

  get errorControl() {
    return this.ionicForm.controls;
  }
  submitForm = () => {

    if (this.ionicForm.valid) {
      console.log('form valid');
      let placa = this.ionicForm.get('placa')?.value;
      let renavam = this.ionicForm.get('renavam')?.value;
      let uf = this.ionicForm.get('uf')?.value;
      if(this.validarPlaca(placa) == false){
        return console.log("insira uma placa valida");
      }
      this.scrapService.pegarDadosScrap(placa, renavam, uf).then((resposta) =>{this.consulta = resposta; this.consultado = true;} ) ;



      return false;
    } else {
      console.log("formulario invalido")
    }
  };


   validarPlaca(placa: string){
    var resposta = false;
    const regexPlaca = /^[a-zA-Z]{3}[0-9]{4}$/;
    const regexPlacaMercosulCarro = /^[a-zA-Z]{3}[0-9]{1}[a-zA-Z]{1}[0-9]{2}$/;
    const regexPlacaMercosulMoto = /^[a-zA-Z]{3}[0-9]{2}[a-zA-Z]{1}[0-9]{1}$/;
    if(regexPlaca.test(placa)){
    resposta = true;
    }
    if(regexPlacaMercosulCarro.test(placa)){
    resposta = true;
    }
    if(regexPlacaMercosulMoto.test(placa)){
    resposta = true;
    }
    return resposta;
   }

}
