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
import { ProdutosService } from './produtos.service';
@Controller('produtos')
export class ProdutosController {
  constructor(private produtosService: ProdutosService) {}
  @Get()
  getAll(): Produto[] {
    return this.produtosService.getAll();
  }

  @Get(':id')
  getOne(@Param() params): Produto {
    return this.produtosService.getOne(params.id);
  }

  @Post()
  store(@Body() produto: Produto) {
    this.produtosService.store(produto);
  }

  @Put()
  update(@Body() produto: Produto) {
    this.produtosService.update(produto);
  }

  @Delete(':id')
  delete(@Param() params) {
    this.produtosService.delete(params.id);
  }
}
