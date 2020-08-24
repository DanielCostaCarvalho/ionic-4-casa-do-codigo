import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-cliente-add-edit",
  templateUrl: "./cliente-add-edit.page.html",
  styleUrls: ["./cliente-add-edit.page.scss"],
})
export class ClienteAddEditPage implements OnInit {
  clienteForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.clienteForm = this.formBuilder.group({
      nome: [
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ]),
      ],
      email: ["", Validators.compose([Validators.required, Validators.email])],
      telefone: ["", Validators.required],
      renda: [
        "0",
        Validators.compose([Validators.required, Validators.min(0)]),
      ],
      nascimento: ["", Validators.required],
    });
  }

  async submit() {
    if (this.clienteForm.invalid || this.clienteForm.pending) {
      return;
    }
    console.log(this.clienteForm);
  }
}
