import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Lista de clientes',
      url: 'clientes',
      icon: 'people'
    },
    {
      title: 'Cadastro',
      url: 'cadastro',
      icon: 'person-add'
    },
    {
      title: 'Sair',
      url: 'sair',
      icon: 'log-out'
    }];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router

  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    //Ao ser notificado de alterações na rota, marca no side-menu a página atual
    this.router.events.subscribe((evento) => {
      if (evento instanceof NavigationEnd) {
        console.log(evento.url);
        this.atualizarSideMenu(evento.url.replace('/', ''));
      }
    });
  }

  // Verifica no objeto criado acima qual o Index que deverá ser setado como selecionado no side-menu
  atualizarSideMenu(pagina?) {
    if (!pagina || pagina == `/`){
      this.selectedIndex = 0;
    } else {
      this.selectedIndex = this.appPages.findIndex(page => page.url.toLowerCase() === pagina.toLowerCase());
    }
    }


}
