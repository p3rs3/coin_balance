import { Form, Input, Button, Select } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { CoinsEnum } from '../../store/reducers/coin-balance/types';
import ClientService from '../../api/CoinBalanceService';

export const CoinBalanceForm = () => {
    const { setSelectedCoin, setIsShowModal, setCoinBalances } = useActions();
    const { selectedCoin } = useTypedSelector(state => state.coinBalanceReducer);
    const { Option } = Select;

    const formSubmit = async (e: any) => {
        const addresses = e.addresses ? [...e.addresses, e.address] : [e.address];

        const dto = {
            coin: {
                name: selectedCoin
            },
            addresses: addresses
        };

        const response = await ClientService.getBalances(dto);
        const balances = response.data;
        setCoinBalances(balances);
        setIsShowModal(true);
    };

    const selectChange = (e: CoinsEnum) => {
        setSelectedCoin(e);
    }

    return (
        <Form name="form" onFinish={formSubmit} style={{width: '700px'}}>
            <Select defaultValue={CoinsEnum.BITCOIN} style={{width: '50%'}} onChange={selectChange}>
                <Option value={CoinsEnum.ETHEREUM}>Ethereum</Option>
                <Option value={CoinsEnum.DOGECOIN}>Dogecoin</Option>
                <Option value={CoinsEnum.BITCOIN}>Bitcoin</Option>
            </Select>
            <Form.Item
                name="address"
                rules={[{ required: true, message: 'Please input address' }]}
                style={{width: '50%'}}
            >
                <Input placeholder="coin address" />
            </Form.Item>
            <Form.List
                name="addresses"
            >
                {(fields, { add, remove }) => (
                    <>
                        {fields.map((field) => (
                            <>
                                <Form.Item
                                    key={field.key}
                                    style={{width: '50%'}}
                                >
                                    <Form.Item
                                        {...field}
                                        noStyle
                                        style={{width: '50%'}}
                                    >
                                        <Input placeholder="coin address" />
                                    </Form.Item>
                                    {fields.length >= 1 ? (
                                        <MinusCircleOutlined
                                            onClick={() => remove(field.name)}
                                        />
                                    ) : null}
                                </Form.Item>
                            </>
                        ))}
                        <Form.Item
                            style={{width: '50%'}}
                        >
                            <Button
                                type="dashed"
                                onClick={() => add()}
                                icon={<PlusOutlined />}
                            >
                                Add field
                            </Button>
                            <Button type="primary" htmlType="submit">
                                Get balance
                            </Button>
                        </Form.Item>
                    </>
                )}
            </Form.List>
        </Form>
    );
}