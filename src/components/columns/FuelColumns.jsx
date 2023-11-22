
export const COLUMNS = [
    {
        Header: "Receive Date",
        Footer: "Receive Date",
        accessor: "receive_date",
       
    },
     {
        Header: "Station",
        Footer: "Station",
         accessor: "stationId.name",
    },
    {
        Header: "Fuel In Code",
        Footer: "Fuel In Code",
        accessor:"fuel_type"
    },
      {
        Header: "Driver",
        Footer: "Driver",
        accessor:"driver"
    },
     {
        Header: "Bowser No",
        Footer: "Bowser No",
        accessor:"bowser"
    },
    // {
    //     Header: "Tank Max Capacity (Gal/Liter)",
    //     Footer: "Tank Max Capacity (Gal/Liter)",
    //     accessor: "tankMaxCap",
    //     Cell: ({ value }) => {
    //         let liter = value;
    //         let gallon;

    //         if (liter) {
    //             gallon = liter / 4.546;
    //         }

    //         return `${gallon.toFixed(3)} / ${liter}`


    //     }
    // },
    // {
    //     Header: "StockDate time",
    //     Footer: "StockDate time",
    //     accessor: "stockTime",
    //       Cell: ({ value }) => {
    //         const date = new Date(value);
    //        const formattedDate = `${date.getDate()}-${date.toLocaleString('default', { month: 'short' })}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    //         return formattedDate
    //     }
    // },
    {
        Header: "Tank",
        Footer: "Tank",
        accessor:"tankNo"
    },
   
    {
        Header: "Tank Capacity",
        Footer: "Tank Capacity",
        accessor: "tankTemp",
        Cell: ({ value }) => {
            return "14580"
        }
    },
     {
        Header: "Receive Volume(Li)",
        Footer: "Receive Volume(Li)",
        accessor:'recive_balance'
        
    },
    {
        Header: "Balance",
        Footer: "Balance",
        accessor: "tank_balance",
               Cell: ({ value }) => {
            return value.toFixed(3)
        }
        
    },
   
     {  id:"gallon",
        Header: "Receive Volume(Gallon)",
        Footer: "Receive Volume(Gallon)",
         accessor: 'recive_balance',
             Cell: ({ value }) => {

               let gallon = value / 4.546;

            return gallon.toFixed(3)


        }
        
    }
]