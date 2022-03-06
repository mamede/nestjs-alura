import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('produtos')
export class ProdutosController {
  @Get()
  getAll(): string {
    return 'Lista todos os produtos';
  }

  @Get(':id')
  getOne(@Param() params): string {
    return `Retorna os dados do produto ${params.id}`;
  }

  @Post()
  store(@Body() body): string {
    console.log(body);
    return 'Produto Criado';
  }

  @Put()
  update(@Body() body): string {
    console.log(body);
    return 'Produto Atualizado';
  }

  @Delete(':id')
  delete(@Param() params): string {
    return `Apagar o produto ${params.id}`;
  }
}
