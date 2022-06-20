import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../Produto';

const httpOptions ={headers: new HttpHeaders({
    'content-type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  url= 'https://localhost:7248/api/Produtos';

  constructor(private http: HttpClient) { }

  PegarTodos(): Observable<Produto[]>{
    return this.http.get<Produto[]>(this.url);
  }

  PegarPeloId(produtoId: number): Observable<Produto>{
    const apiUrl  = `${this.url}/${produtoId}`;
    return this.http.get<Produto>(apiUrl)
  }

  SalvarProduto (produto: Produto): Observable<any> {
    return this.http.post<Produto>(this.url, produto, httpOptions);
  }

  AtualizarProduto (produto: Produto): Observable<any> {
    return this.http.put<Produto>(this.url,produto, httpOptions);
  }

  ExcluirProduto (produtoId: Produto): Observable<any> {
    const apiUrl = `${this.url}/${produtoId}`;
    return this.http.delete<number>(apiUrl,httpOptions);
  }
}
