import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { Livro } from './livro.model';

@Injectable()
export class LivrosService {
  constructor(
    @InjectModel(Livro)
    private livroModel: typeof Livro,
  ) {}

  async getAll(): Promise<Livro[]> {
    return await this.livroModel.findAll();
  }

  async getOne(id: number): Promise<Livro> {
    return await this.livroModel.findByPk(id);
  }

  async store(livros: Livro) {
    await this.livroModel.create(livros);
  }

  async update(livro: Livro): Promise<[number, Livro[]]> {
    return await this.livroModel.update(livro, livro.id);
  }

  async delete(id: number) {
    const livro: Livro = await this.getOne(id);
    livro.destroy();
  }
}
