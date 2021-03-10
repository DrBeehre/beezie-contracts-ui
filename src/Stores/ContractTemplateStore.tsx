import { FunctionComponent, useState, useEffect } from "react";
import { ContractTemplate } from './../Types/types'

const ContractTemplateStore:FunctionComponent = () => {
    const [contractTemplates, setContractTemplates] = useState<ContractTemplate[]>([]);

    useEffect(() => {
        const fetchDataAsync = async () => {
            const response = await fetch('https://localhost:5001/api/ContractTemplates');  

            setContractTemplates(await response.json());
        } 

        fetchDataAsync();
    }, []);

    return (
        <>
            {contractTemplates && contractTemplates.map(contractTemplate => {
                console.log(contractTemplate)
                return (
                    <div>
                        {contractTemplate.contract_name}
                        {console.log(contractTemplate)}
                    </div>
                )
            })}
        </>
    );
}
export default ContractTemplateStore;