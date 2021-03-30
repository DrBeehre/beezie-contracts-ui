import { FunctionComponent, useState, useEffect } from "react";
import { Clause } from './../Types/types'

function getClauses() {
    const fetchDataAsync = async () => {
        const response = await fetch('https://localhost:5001/api/Clauses');  

        await response.json();
    } 
    return fetchDataAsync();
};
