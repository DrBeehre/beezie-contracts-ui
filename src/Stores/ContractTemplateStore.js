import React, { useState, useEffect } from "react";

const ContractTemplateStore = () => {
    const [contractTemplates, setContractTemplates] = useState(null);

    useEffect(async () => {
        const response = await fetch('https://localhost:5001/api/ContractTemplates');
        const jsonResponse = await response.json();

        //could do a try catch here for better error checking and loading

        const [item] = jsonResponse.results;
        setContractTemplates(item)
    }, []);

    return (
        <div>
            {contractTemplates && contractTemplates[0] && contractTemplates[0] !== null && <div>
                    {contractTemplates[0].contract_name}
                </div>}
        </div>
    );
}
export default ContractTemplateStore;