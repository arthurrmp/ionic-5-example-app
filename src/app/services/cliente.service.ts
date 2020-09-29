import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ClienteService {

  url = 'https://reqres.in';

  constructor(private http: HttpClient) { }

  obterClientes(pagina: number): Observable<any> {
    return this.http.get(`${this.url}/api/users?page=${pagina}`)
  }

  obterCliente(id: number): Observable<any> {
    return this.http.get(`${this.url}/api/users/${id}`)
  }

  cadastrarCliente(nome: string, profissão: string) {
    let body = { name: nome, job: profissão }
    return this.http.post(`${this.url}/api/users`, body)
  }

  atualizarCliente(id: number, nome: string, profissao: string) {
    let body = { name: nome, job: profissao }
    return this.http.patch(`${this.url}/api/users/${id}`, body)
  }

}
