import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.page.html',
  styleUrls: ['./detalhe.page.scss'],
})
export class DetalhePage implements OnInit {

  @Input() id: number;
  cliente: any;
  modoEditar = false;
  email: string;
  nome: string;

  constructor(
    public modalCtrl: ModalController,
    private clienteService: ClienteService,
    private alertController: AlertController) { }

  ngOnInit() {
    this.atualizarDados();
  }

  atualizarDados() {
    this.clienteService.obterCliente(this.id).subscribe((data => {
      this.cliente = data.data;
      this.nome = `${this.cliente.first_name} ${this.cliente.last_name}`;
      this.email = this.cliente.email;
    }))
  }

  async AlternarEdicao() {
    if (this.modoEditar && (this.nome !== `${this.cliente.first_name} ${this.cliente.last_name}`)) {
      const alert = await this.alertController.create({
        header: 'Confirmação',
        message: 'Deseja continuar sem salvar?',
        buttons: [
          {
            text: 'Sim',
            handler: () => {
              this.modoEditar = false;
              this.nome = `${this.cliente.first_name} ${this.cliente.last_name}`;
              this.email = this.cliente.email;
            }
          },
          {
            text: 'Não',
          }
        ]
      });
      await alert.present();

    } else if (this.modoEditar) {
      this.modoEditar = false;
    } else if (!this.modoEditar) {
      this.modoEditar = true;
    }

  }

  async AtualizarCliente() {

    if (!this.nome) {

      const alert = await this.alertController.create({
        header: 'Aviso',
        message: 'Por favor, preencha o nome.',
        buttons: ['OK']
      });

      await alert.present();
      return;
    }

    if (!this.email) {

      const alert = await this.alertController.create({
        header: 'Aviso',
        message: 'Por favor, preencha a email.',
        buttons: ['OK']
      });

      await alert.present();
      return;

    }

    this.clienteService.atualizarCliente(this.id, this.nome, this.email).subscribe(async (data: any) => {

      const alert = await this.alertController.create({
        header: 'Sucesso!',
        message: `Cadastro atualizado (ID ${this.id}).`,
        buttons: ['OK']
      });

      this.cliente.first_name = this.nome;
      this.cliente.last_name = '';
      this.cliente.email = this.email;

      this.modoEditar = false;

      await alert.present();
      return;
    })
  }

}
