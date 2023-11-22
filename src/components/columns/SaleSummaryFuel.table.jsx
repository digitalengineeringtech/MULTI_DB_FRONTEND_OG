

const calculateTotalLiter = (data) => {
    let totalLiter = 0;
    totalLiter += data.saleLiter;
};

export const COLUMNS = [
    {
    Header:"Type"
    },
    {
        Header: "Sale",
        columns: [
            {
                id: "liter",
                Header: "Liter",
                accessor: (row) => calculateTotalLiter(row)
            },
            {
                id: "gallon",
                Header:"Gallon"
            },
            {
                id: "amount",
                Header:"Amount"
            }
        
        ]
    }
]