import DateTime from 'react-datetime';

export type ContractTemplate = {
    id: number;
    contract_name: string;
    unique_code: string;
    created_dt: DateTime;
    deleted_dt?: DateTime;
}

export type Clause = {
    id: number;
    clause_text: string;
    unique_code: string
    parent_clause_id?: number;
    created_dt: DateTime;
    deleted_dt?: DateTime;
}