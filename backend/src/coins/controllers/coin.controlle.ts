import { Body, Controller, Post } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { GetBalanceDto } from "../dto/get-balance.dto";
import { CoinService } from "../services/coin.service";

@ApiTags('Coins')
@Controller('coins')
export class CoinController {
    constructor(private coinService: CoinService){}

    @ApiOperation({summary: 'Get balance'})
    @ApiResponse({status: 200})
    @Post()
    async getBalance(@Body() dto: GetBalanceDto) {
        return this.coinService.getBalance(dto);
    }
}