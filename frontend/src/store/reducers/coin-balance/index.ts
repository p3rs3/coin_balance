import { CoinBalanceAction, CoinBalanceActionEnum, CoinBalanceState, CoinsEnum } from "./types"
import { CoinBalanceModel } from "../../../models/CoinBalanceModel";

const initialState: CoinBalanceState = {
    selectedCoin: CoinsEnum.BITCOIN,
    isShowModal: false,
    coinBalances: [] as CoinBalanceModel[]
}

export default function coinBalanceReducer(state = initialState, action: CoinBalanceAction): CoinBalanceState {
    switch (action.type) {
        case CoinBalanceActionEnum.SET_SELECTED_COIN:
            return {...state, selectedCoin: action.payload}
        case CoinBalanceActionEnum.SET_IS_SHOW_MODAL:
            return {...state, isShowModal: action.payload}
        case CoinBalanceActionEnum.SET_COIN_BALANCES:
            return {...state, coinBalances: action.payload}
        default:
            return state;
    }
}