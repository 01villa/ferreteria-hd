import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';

@Injectable()
export class ClientsService {
  constructor(private prisma: PrismaService) {}

  async create(createClientDto: CreateClientDto) {
    try {
      return await this.prisma.customer.create({
        data: {
          customerName: createClientDto.customerName,
          contactName: createClientDto.contactName,
          contactPhone: createClientDto.contactPhone,
          contactEmail: createClientDto.contactEmail,
          address: createClientDto.address,
        },
      });
    } catch (error) {
      throw new Error('No se pudo crear el cliente');
    }
  }

  async findAllAlive() {
    try {
      return await this.prisma.customer.findMany({
        where: {
          isActive: true,
        },
      });
    } catch (error) {
      throw new Error('No se pudieron obtener los clientes activos');
    }
  }

  async findOne(id: string) {
    try {
      const cliente = await this.prisma.customer.findUnique({
        where: { id },
      });
      if (!cliente) {
        throw new NotFoundException('Cliente no encontrado');
      }
      return cliente;
    } catch (error) {
      throw new Error('No se pudo obtener el cliente');
    }
  }

  async update(id: string, updateClientDto: UpdateClientDto) {
    try {
      return await this.prisma.customer.update({
        where: { id },
        data: updateClientDto,
      });
    } catch (error) {
      throw new Error('No se pudo actualizar el cliente');
    }
  }

  async remove(id: string) {
    try {
      return await this.prisma.customer.delete({
        where: { id },
      });
    } catch (error) {
      throw new Error('No se pudo eliminar el cliente');
    }
  }

  async partialUpdate(id: string, updateClientDto: UpdateClientDto) {
    try {
      const existingClient = await this.findOne(id);
      if (!existingClient) {
        throw new NotFoundException('Cliente no encontrado');
      }
      
      const updatedClient = await this.prisma.customer.update({
        where: { id },
        data: updateClientDto,
      });

      return updatedClient;
    } catch (error) {
      throw new Error('No se pudo actualizar parcialmente el cliente');
    }
  }
}