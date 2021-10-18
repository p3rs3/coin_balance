import { Injectable, Logger } from "@nestjs/common";
import { GetBalanceDto } from "../dto/get-balance.dto";
import { CoinRepository } from "../repository/coin.repository";

@Injectable()
export class CoinService {
    private logger: Logger = new Logger(CoinService.name)

    constructor(
        private readonly coinRepository: CoinRepository,
    ){}

    async getBalance(dto: GetBalanceDto) {
        try {
            const context = JSON.stringify(dto, null, 2);
            this.logger.verbose(`Trying to get balance ${context}`);
            return await this.coinRepository.getBalance(dto);
        } catch (e) {
            this.logger.error(`Error on getBalance: ${e.message}`, e.trace);
            throw e;
        }
    }
}