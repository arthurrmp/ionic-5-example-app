import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage {
  profissao: string;
  nome: string;

  constructor(
    private clienteService: ClienteService,
    private alertController: AlertController) { }

  async cadastrarCliente() {

    if (!this.nome) {

      const alert = await this.alertController.create({
        header: 'Aviso',
        message: 'Por favor, preencha o nome.',
        buttons: ['OK']
      });

      await alert.present();
      return;
    }

    if (!this.profissao) {

      const alert = await this.alertController.create({
        header: 'Aviso',
        message: 'Por favor, preencha a profissão.',
        buttons: ['OK']
      });

      await alert.present();
      return;

    }

    this.clienteService.cadastrarCliente(this.nome, this.profissao).subscribe(async (data: any) => {
      const alert = await this.alertController.create({
        header: 'Sucesso!',
        message: `Cadastro realizado (ID ${data.id}).`,
        buttons: ['OK']
      });

      await alert.present();
      return;
    })
  }

}
