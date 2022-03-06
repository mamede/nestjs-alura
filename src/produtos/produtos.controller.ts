import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Produto } from './produtos.model';
@Controller('produtos')
export class ProdutosController {
  produtos: Produto[] = [
    new Produto('LIV01', 'Livro TDD', 29.9),
    new Produto('LIV02', 'Livro TDD', 29.9),
    new Produto('LIV06', 'Livro TDD', 29.9),
  ];
  @Get()
  getAll(): Produto[] {
    return this.produtos;
  }

  @Get(':id')
  getOne(@Param() params): Produto {
    return this.produtos[0];
  }

  @Post()
  store(@Body() produto: Produto) {
    produto.id = 100;
    this.produtos.push(produto);
  }

  @Put()
  update(@Body() produto: Produto) {
    return produto;
  }

  @Delete(':id')
  delete(@Param() params) {
    this.produtos.pop();
  }
}
