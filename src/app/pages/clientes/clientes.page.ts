import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ClienteService } from 'src/app/services/cliente.service';
import { DetalhePage } from '../detalhe/detalhe.page';
import { IonRouterOutlet } from '@ionic/angular';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage implements OnInit {
  clientes: any;
  pagina: number = 1;

  constructor(
    private clienteService: ClienteService, 
    private modalController: ModalController, 
    private routerOutlet: IonRouterOutlet) { }

  ngOnInit() {
    this.atualizarDados();
  }

  atualizarDados() {
    if (!this.clientes) {
      this.pagina = 1;
    }
    this.clienteService.obterClientes(this.pagina).subscribe((dados) => {
      this.clientes = dados;
    });
  }

  paginaProxima() {
    if (this.pagina < this.clientes.total_pages) {
      this.pagina++;
      this.atualizarDados();
    }
  }

  paginaAnterior() {
    if (this.pagina <= this.clientes.total_pages) {
      if (this.pagina > 1) {
        this.pagina--;
        this.atualizarDados();
      }
    }
  }

  async ExibirDetalhe(id) {
    const modal = await this.modalController.create({
      component: DetalhePage,
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl,
      componentProps: {
        'id': id
      }
    });
    await modal.present();
  }

}
