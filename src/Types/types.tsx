import DateTime from 'react-datetime';

export type ContractTemplate = {
    id: number;
    contract_name: string;
    unique_code: string;
    created_dt: DateTime;
    deleted_dt?: DateTime;
}