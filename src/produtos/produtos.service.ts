import { Injectable } from '@nestjs/common';
import { Produto } from './produtos.model';

@Injectable()
export class ProdutosService {
  produtos: Produto[] = [
    new Produto('LIV01', 'Livro TDD', 29.9),
    new Produto('LIV02', 'Livro TDD', 29.9),
    new Produto('LIV06', 'Livro TDD', 29.9),
  ];

  getAll(): Produto[] {
    return this.produtos;
  }

  getOne(id: number): Produto {
    return this.produtos[0];
  }

  store(produto: Produto) {
    this.produtos.push(produto);
  }

  update(produto: Produto): Produto {
    return produto;
  }

  delete(id: number) {
    this.produtos.pop();
  }
}
