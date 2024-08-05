

export const COLUMNS = [
    {   id:"pprd",
        Header: "PPRD License No.",
        Footer: "PPRD License No.",
        accessor: "stationDetailId.lienseNo",

    },
    {
        Header: "Vocno",
        Footer: "Vocno",
        accessor: "_id",
        Cell: ({ row }) => {
            if (row.original.stationDetailId) {
                const firstNameValue = row.original.stationDetailId['lienseNo'];
        const fullName = `${firstNameValue}/${row.original.vocono} `;
        return <span>{fullName}</span>;
            }
      },
    },
    {
        Header: "Sale Date time",
        Footer: "Sale Date time",
        accessor: "createAt",
        Cell: ({ value }) => {
            const date = new Date(value);
           const formattedDate = `${date.getDate()}-${date.toLocaleString('default', { month: 'short' })}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
            return formattedDate
        }
    },
    {
        Header: "Vehicle No",
        Footer: "Vehicle No",
        accessor:"carNo"
    },
    {
        Header: "Purpose of Use",
        Footer: "Purpose of Use",
        accessor:"vehicleType"
    },
    {
        Header: "Nozzle Number",
        Footer: "Nozzle Number",
        accessor:"nozzleNo"
    },
    {
        Header: "Fuel Type",
        Footer: "Fuel Type",
        accessor:"fuelType"
    },
    {   id: 'gallon',
        Header: "Sale Gallon",
        Footer: "Sale Gallon",
        accessor: "saleLiter",
        Cell: ({ value }) => {
                    if (value) {
            const gallons = value / 4.546; // 1 gallon = 3.78541 liters
            return gallons.toFixed(3);
            }
          
        }
    },
    {
        Header: "Sale Liter",
        Footer: "Sale Liter",
        accessor:"saleLiter"
    },
    {
        Header: "Sale Price",
        Footer: "Sale Price",
        accessor: "salePrice",
        Cell: ({ value }) => {
            const currency = value.toLocaleString(undefined, { maximumFractionDigits: 3 });
            return currency;
        }
    },
    {
        Header: "Total Price",
        Footer: "Total Price",
        accessor: "totalPrice",
        Cell: ({ value }) => {
            const currency = value.toLocaleString(undefined, { maximumFractionDigits: 3 });
            return currency;
        }
    },
    {
        Header: "Totalizer Liter",
        Footer: "Totalizer Liter",
        accessor:"totalizer_liter"
    },
    {
        Header: "Totalizer Amount",
        Footer: "Totalizer Amount",
        accessor:"totalizer_amount"
    }
]