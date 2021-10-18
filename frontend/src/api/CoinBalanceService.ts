import axios, { AxiosResponse } from "axios";
import { CoinBalanceModel } from "../models/CoinBalanceModel";
import { GetCoinBalanceDto } from "../dto/GetCoinBalanceDto";

export default class CoinBalanceService {
    static async getBalances(dto: GetCoinBalanceDto): Promise<AxiosResponse<CoinBalanceModel[]>> {
        return axios.post<CoinBalanceModel[]>('http://localhost:3000/api/coins', dto);
    }
}