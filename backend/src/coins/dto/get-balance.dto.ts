import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { Coin } from "../entities/coin.entity";

export class GetBalanceDto {
    @IsNotEmpty()
    @ApiProperty({example: {name: 'ethereum'}, description: 'coin'})
    coin: Coin;

    @IsNotEmpty()
    @ApiProperty({example: ['0xde0b295669a9fd93d5f28d9ec85e40f4cb697'], description: 'addresses'})
    addresses: string[]
}