import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { CoinController } from "./controllers/coin.controlle";
import { CoinRepository } from "./repository/coin.repository";
import { CoinService } from "./services/coin.service";

@Module({
    imports: [HttpModule],
    controllers: [CoinController],
    providers: [
        CoinService,
        CoinRepository
    ],
    exports: []
})
export class CoinModule {}