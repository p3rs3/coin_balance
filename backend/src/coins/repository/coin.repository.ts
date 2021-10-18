import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { lastValueFrom } from "rxjs";
import { CoinsEnum } from "../coins.enum";
import { GetBalanceDto } from "../dto/get-balance.dto";

@Injectable()
export class CoinRepository {
    constructor(
        private readonly httpService: HttpService,
    ){}

    async getBalance(dto: GetBalanceDto) {
        switch (dto.coin.name) {
            case CoinsEnum.ETHERUM:
                return this.getEtherumCoinBalance(dto.addresses);
            case CoinsEnum.BITCOIN:
                return this.getBitcoinCoinBalance(dto.addresses);
            case CoinsEnum.DOGECOIN:
                return this.getDogecoinCoinBalance(dto.addresses);
            default:
                return {status: 'error'};
        }
    }

    private async getEtherumCoinBalance(addresses: string[]): Promise<object[]> {
        try {
            const balances = [];

            const responses = await Promise.all(
                addresses.map(address => {
                    return lastValueFrom(this.httpService.get(
                        `https://api.etherscan.io/api?module=account&action=balance&address=${address}bae&tag=latest&apikey=3R66BE7Z57CVMUIPWUCKH2Z99P3ZJ7N3EZ`
                    ));
                })
            );
            
            responses.forEach(response => {
                const requestPathMatch = response.request.path.match(/(?<=address=).*(?=bae)/);
                const coinAddress = requestPathMatch[0];

                if (coinAddress && response.data.result) {
                    balances.push({
                        address: coinAddress,
                        balance: response.data.result
                    });
                }
            });

            return balances;
        } catch(e) {
            console.log(e);
        }
    }

    private async getBitcoinCoinBalance(addresses: string[]): Promise<object[]> {
        try {
            const balances = [];

            const responses = await Promise.all(
                addresses.map(address => {
                    return lastValueFrom(this.httpService.get(
                        `https://blockchain.info/balance?active=${address}`
                    ));
                })
            );
            
            responses.forEach(response => {
                const requestPathMatch = response.request.path.match(/(?<=active=).*/);
                const coinAddress = requestPathMatch[0];

                if (coinAddress && response.data[coinAddress]) {
                    balances.push({
                        address: coinAddress,
                        balance: response.data[coinAddress]['final_balance']
                    });
                }
            });

            return balances;
        } catch(e) {
            console.log(e);
        }
    }

    private async getDogecoinCoinBalance(addresses: string[]): Promise<object[]> {
        try {
            const balances = [];

            const responses = await Promise.all(
                addresses.map(address => {
                    return lastValueFrom(this.httpService.get(
                        `https://dogechain.info/api/v1/address/balance/${address}`
                    ));
                })
            );
            
            responses.forEach(response => {
                const requestPathMatch = response.request.path.match(/(?<=balance\/).*/);
                const coinAddress = requestPathMatch[0];

                if (coinAddress && response.data.success === 1) {
                    balances.push({
                        address: coinAddress,
                        balance: response.data.balance
                    });
                }
            });

            return balances;
        } catch(e) {
            console.log(e);
        }
    }
}