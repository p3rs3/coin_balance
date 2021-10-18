import { Button, Modal } from 'antd';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { CoinBalancesTable } from '../CoinBalancesTable/CoinBalancesTable';
import { CSVLink } from "react-csv";

export const CoinBalancesModal = () => {
    const { setIsShowModal } = useActions();
    const { isShowModal, selectedCoin, coinBalances } = useTypedSelector(state => state.coinBalanceReducer);

    const hideModal = () => {
        setIsShowModal(false);
    };

    return (
        <Modal 
            title={selectedCoin} 
            visible={isShowModal} 
            onCancel={hideModal} 
            footer={null}
            width='80%'
        >
            <CoinBalancesTable />
            <Button type="primary">
                <CSVLink 
                    data={coinBalances}
                    filename={`${selectedCoin}_balances_list.csv`}
                >
                    Get CSV
                </CSVLink>
            </Button>
        </Modal>
    )
}