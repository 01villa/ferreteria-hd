import { PartialType } from '@nestjs/swagger';
import { CreateClientDto } from './create-client.dto';

export class UpdateClientDto extends PartialType(CreateClientDto){
  // Define los campos que se pueden actualizar para un cliente
  
}