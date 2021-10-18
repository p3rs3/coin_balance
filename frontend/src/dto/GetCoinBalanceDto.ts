import { CoinsEnum } from '../store/reducers/coin-balance/types';

export interface GetCoinBalanceDto {
    coin: {
        name: CoinsEnum
    };
    addresses: string[];
}