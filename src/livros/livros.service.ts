import { Injectable } from '@nestjs/common';
import { Livro } from './livro.model';

@Injectable()
export class LivrosService {
  livros: Livro[] = [
    // new Livro('LIV01', 'Livro TDD', 29.9),
    // new Livro('LIV02', 'Livro TDD', 29.9),
    // new Livro('LIV06', 'Livro TDD', 29.9),
  ];

  getAll(): Livro[] {
    return this.livros;
  }

  getOne(id: number): Livro {
    return this.livros[0];
  }

  store(livros: Livro) {
    this.livros.push(livros);
  }

  update(livros: Livro): Livro {
    return livros;
  }

  delete(id: number) {
    this.livros.pop();
  }
}
