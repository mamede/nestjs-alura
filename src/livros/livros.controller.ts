import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Livro } from './livro.model';
import { LivrosService } from './livros.service';

@Controller('livros')
export class LivrosController {
  constructor(private livrosService: LivrosService) {}

  @Get()
  getAll(): Livro[] {
    return this.livrosService.getAll();
  }

  @Get(':id')
  getOne(@Param() params): Livro {
    return this.livrosService.getOne(params.id);
  }

  @Post()
  store(@Body() livro: Livro) {
    this.livrosService.store(livro);
  }

  @Put()
  update(@Body() livro: Livro) {
    this.livrosService.update(livro);
  }

  @Delete(':id')
  delete(@Param() params) {
    this.livrosService.delete(params.id);
  }
}
