import React, { useState, useEffect } from "react";
import DateTime from 'react-datetime';

const ContractTemplateStore = () => {
    const [contractTemplates, setContractTemplates] = useState([]);

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
                return contractTemplate.contract_name
            })}
        </>
    );
}
export default ContractTemplateStore;