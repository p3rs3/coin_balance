import { Table } from 'antd';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';

export const CoinBalancesTable = () => {
    const { setIsShowModal } = useActions();
    const { coinBalances } = useTypedSelector(state => state.coinBalanceReducer);

    const columns = [
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Balance',
            dataIndex: 'balance',
            key: 'balance',
        },
    ];

    return (
        <Table dataSource={coinBalances} columns={columns} />
    )
}