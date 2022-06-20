import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Produto } from 'src/app/Produto';
import { ProdutosService } from 'src/app/service/produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  formulario: any;
  tituloFormulario: string;
  produtos : Produto[];

  constructor(private produtosService: ProdutosService) { }

  ngOnInit(): void {
    this.produtosService.PegarTodos().subscribe(resultado =>{
      this.produtos = resultado;
    });

    this.tituloFormulario = 'Novo Cadastro de Produto';

    this.formulario = new FormGroup({
      nome: new FormControl(null),
      categoria: new FormControl(null),
      descricao: new FormControl(null),
      preco: new FormControl(null),
      quantidade: new FormControl(null),
      imagemUrl: new FormControl(null)
    });
  }

  EnviarFormulario(): void{
    const produto: Produto = this.formulario.value;
    this.produtosService.SalvarProduto(produto).subscribe(
      (resultado) =>{alert('pessoa inserida com sucesso')}
    )
  }

}
