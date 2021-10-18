import { CoinBalanceModel } from "../../../models/CoinBalanceModel"
import { CoinBalanceActionEnum, CoinsEnum, SetCoinBalancesAction, SetIsShowModalAction, SetSelectedCoinAction } from "./types"

export const CoinBalanceActionCreators = {
    setSelectedCoin: (selectedCoin: CoinsEnum): SetSelectedCoinAction => {
        return {
            type: CoinBalanceActionEnum.SET_SELECTED_COIN,
            payload: selectedCoin,
        }
    },
    setIsShowModal: (status: boolean): SetIsShowModalAction => {
        return {
            type: CoinBalanceActionEnum.SET_IS_SHOW_MODAL,
            payload: status,
        }
    },
    setCoinBalances: (coinBalances: CoinBalanceModel[]): SetCoinBalancesAction => {
        return {
            type: CoinBalanceActionEnum.SET_COIN_BALANCES,
            payload: coinBalances,
        }
    },
}