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

  visibilidadeTabela: boolean = true;
  visibilidadeFormulario: boolean = false;

  constructor(private produtosService: ProdutosService) { }

  ngOnInit(): void {
    this.produtosService.PegarTodos().subscribe(resultado =>
      this.produtos = resultado);
  }

    ExibirFormularioCadastro(): void{
      this.visibilidadeTabela=false;
      this.visibilidadeFormulario=true;

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
    this.produtosService.SalvarProduto(produto).subscribe((resultado) => {
      this.visibilidadeTabela=true;
      this.visibilidadeFormulario=false;
      alert('pessoa inserida com sucesso');
      this.produtosService.PegarTodos().subscribe(registros=> { this.produtos = registros})
    });
  }

  voltar() : void{
    this.visibilidadeTabela=true;
    this.visibilidadeFormulario=false;
  }

  ExcluirProduto(produtoId) {
    this.produtosService.ExcluirProduto(produtoId).subscribe((resultado) =>{
      this.visibilidadeTabela=true;
      this.visibilidadeFormulario=false;
      alert('Excluido com sucesso');
      this.produtosService.PegarTodos().subscribe(registro =>{this.produtos = registro});
    });
  }
}

