import { ApiProperty } from "@nestjs/swagger";

export class CreateClientDto {
 @ApiProperty()
 customerName: string;
 @ApiProperty()
contactName: string;
 @ApiProperty()
 contactPhone: string;
 @ApiProperty()
 contactEmail: string;
 @ApiProperty()
 address: string;
 @ApiProperty({ default: true})
 isActive?: boolean; // Asegúrate de que isActive sea opcional
}