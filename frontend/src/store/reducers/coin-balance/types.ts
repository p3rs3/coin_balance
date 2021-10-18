import { CoinBalanceModel } from "../../../models/CoinBalanceModel";

export interface CoinBalanceState {
    selectedCoin: CoinsEnum;
    isShowModal: boolean;
    coinBalances: CoinBalanceModel[];
}

export enum CoinsEnum {
    BITCOIN = 'bitcoin',
    ETHEREUM = 'ethereum',
    DOGECOIN = 'dogecoin',
}

export enum CoinBalanceActionEnum {
    SET_SELECTED_COIN = 'SET_SELECTED_COIN',
    SET_IS_SHOW_MODAL = 'SET_IS_SHOW_MODAL',
    SET_COIN_BALANCES = 'SET_COIN_BALANCES',
}

export interface SetSelectedCoinAction {
    type: CoinBalanceActionEnum.SET_SELECTED_COIN;
    payload: CoinsEnum;
}

export interface SetIsShowModalAction {
    type: CoinBalanceActionEnum.SET_IS_SHOW_MODAL;
    payload: boolean;
}

export interface SetCoinBalancesAction {
    type: CoinBalanceActionEnum.SET_COIN_BALANCES;
    payload: CoinBalanceModel[];
}

export type CoinBalanceAction = 
    SetSelectedCoinAction |
    SetIsShowModalAction |
    SetCoinBalancesAction
;