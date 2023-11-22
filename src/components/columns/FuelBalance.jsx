
export const COLUMNS = [
        {
                Header: "Station",
                accessor: "stationId.name",
                
        },
        {
        Header: "Tank",
        accessor: "tankNo",
             Cell: ({ value }) => {
                    if (value) {
                        if (value === 1) {
                return "Tank 1"
                        }
                        if (value === 2) {
                return "Tank 2"
                        }
                        if (value === 3) {
                return "Tank 3"
                        }
                        if (value === 4) {
                return "Tank 4"
                        }
                        if (value === 5) {
                return "Tank 5"
                        }
                        if (value === 6) {
                return "Tank 6"
                        }
                        if (value === 7) {
                return "Tank 7"
                        }
                        if (value === 8) {
                return "Tank 8"
                        }
            }
          
        }
        
        },
    {
        Header: "Fuel Type",
        accessor:"fuelType"
    },
   
    {
        Header: "Capacity",
        accessor: "capacity",
    },
    {
        Header: "Opening",
        accessor: "opening",
        Cell: ({ value }) => {
            
                return value.toFixed(3)
        }
    },
    {
        Header: "Receive Volume (Li)",
        accessor: "fuelIn",
        Cell: ({ value }) => {
            
                return value.toFixed(3)
        }
        },
     {  id:"gallon",
        Header: "Receive Volume (Gallon)",
        accessor: "fuelIn",
        Cell: ({ value }) => {
              let gallon = value / 4.546;
                return gallon.toFixed(3)
        }
    },
    {
        Header: "Sale",
        accessor: "cash",
        Cell: ({ value }) => {
            
                return value.toFixed(3)
        }
    },
    // {
    //     Header: "Adjust Volume",
    //     accessor: "adjust_volume",
    //     Cell: ({ value }) => {
    //         if (!value) {
    //             return "00.00"
    //         }
    //     }
    // },
    // {
    //     Header: "Today Tank Balance",
    //     accessor: "balance",
    //     Cell: ({ value }) => {
            
    //             return value.toFixed(3)
    //     }
    // },
    {   id:"tank_balance",
        Header: "Balance",
        accessor: "balance",
        Cell: ({ value }) => {
            
                return value.toFixed(3)
        }
        
    }
]