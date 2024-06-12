import { Controller, Get, Post, Body, Param, Delete, Put, Patch } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { ApiBody, ApiParam, ApiTags } from '@nestjs/swagger';

@Controller('clients')
@ApiTags('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Post()
  @ApiBody({ type: CreateClientDto})
  create(@Body() createClientDto: CreateClientDto) {
    return this.clientsService.create(createClientDto);
  }

  @Get()
  findAllAlive() {
    return this.clientsService.findAllAlive();
  }

  @Get(':id')
  @ApiParam({ name: 'id', type: String })
  findOne(@Param('id') id: string) {
    return this.clientsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateClientDto: UpdateClientDto) {
    return this.clientsService.update(id, updateClientDto);
  }

  @Patch(':id')
partialUpdate(@Param('id') id: string, @Body() updateClientDto: UpdateClientDto) {
  return this.clientsService.partialUpdate(id, updateClientDto); // Llamar a un método específico en el servicio para actualizaciones parciales
}

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clientsService.remove(id);
  }
}