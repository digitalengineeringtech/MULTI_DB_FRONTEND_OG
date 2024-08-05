


export const GROUPED_COLUMNS = [
    {
        Header: "No",
        Footer: "No",
        accessor:"result[0].no"
    },
     {
        Header: "Sale Shop",
        Footer: "Sale Shop",
    },
    {
        Header: "Location",
        Footer: "Location",
    },
    {
        Header: "PPRD License No.",
        Footer: "PPRD License No.",
    },
     {
        Header: "Fuel Type",
        Footer: "Fuel Type",
    },
    {
        Header: "Cycle",
        Footer: "Cycle",
        columns: [
            {
                Header: "Two Wheel",
                Footer: "Two Wheel",
                columns: [
                    {
                        id:'two_wheel_count',
                        Header: "Count",
                        Footer: "Count",
                    },
                    {   
                        id:"two_wheel_gallon",
                        Header: "Gallon",
                        Footer:"Gallon"
                    }
                ]
            },
            {
                Header: "Three Wheel",
                Footer: "Three Wheel",
                columns: [
                    {   
                        id:"three_wheel_count",
                        Header: "Count",
                        Footer: "Count",
                    },
                    {   
                        id:"three_wheel_gallon",
                        Header: "Gallon",
                        Footer: "Gallon",
                    }
                ]
            }
        ]
    },
    {
        Header: "Car",
        Footer: "Car",
        columns: [{
            id:"car_count",
            Header: "Count",
            Footer: "Count",
        },
            {   
            id:'car_gallon',
            Header: "Gallon",
            Footer:"Gallon"  
        }]
    },
    {
        Header: "Bus",
        Footer: "Bus",
        columns: [{
            Header: "Bus City",
            Footer: "Bus City",
            columns: [
                {   
                    id:"bus_city_count",
                    Header: "Count",
                    Footer: "Count"
                }, {
                    id:'bus_city_gallon',
                    Header: "Gallon",
                    Footer:"Gallon"
                }
            ]
        }, {
            Header: "Bus High Way",
            Footer: "Bus High Way",
             columns: [
                 {   
                    id:'bus_high_count',
                    Header: "Count",
                    Footer: "Count"
                 }, {
                     id:"bus_high_gallon",
                    Header: "Gallon",
                    Footer:"Gallon"
                }
            ]
        }]
    },
    {
        Header: "Truck",
        Footer: "Truck",
        columns: [{
            Header: "Light Truck",
            Footer: "Light Truck",
            columns: [
                {
                    Header: "Light Truck City",
                    Footer: "Light Truck City",
                    columns: [
                        {   
                            id:'light_truck_city_count',
                            Header: "Count",
                            Footer:"Count"
                        }, {
                            id:"light_truck_city_gallon",
                            Header: "Gallon",
                            Footer:"Gallon"
                        }
                    ]
                },
                 {
                    Header: "Light Truck High Way",
                    Footer: "Light Truck High Way",
                      columns: [
                          {   
                            id:"light_truck_high_count",
                            Header: "Count",
                            Footer:"Count"
                          }, {
                            id:"light_truck_high_gallon",
                            Header: "Gallon",
                            Footer:"Gallon"
                        }
                    ]
                },
            ]
        },
        {
            Header: "Trailer",
            Footer: "Trailer",
              columns: [
                {
                    Header: "Trailer City",
                    Footer: "Trailer  City",
                    columns: [
                        {   id:"trailer_city_count",
                            Header: "Count",
                            Footer:"Count"
                        }, {
                            id:"trailer_city_gallon",
                            Header: "Gallon",
                            Footer:"Gallon"
                        }
                    ]
                },
                 {
                    Header: "Trailer  High Way",
                    Footer: "Trailer  High Way",
                      columns: [
                          {   
                            id:"trailer_high_count",
                            Header: "Count",
                            Footer:"Count"
                          }, {
                            id:"trailer_hight_gallon",
                            Header: "Gallon",
                            Footer:"Gallon"
                        }
                    ]
                },
            ]
        }
        ]
    },
    {
        Header: "Htawlargyi",
        Footer: "Htawlargyi",
        columns: [
            {
                Header: "HtawLargyi",
                Footer: "HtawLargyi",
                columns: [
                    {   
                        id:"htawlargyi_count",
                        Header: 'Count',
                        Footer:'Count'
                    },
                    {
                        id: "htawlargyi_gallon",
                        Header: "Gallon",
                        Footer:"Gallon"
                    }
                ]
            },
            {
                Header: "Tractor",
                Footer: "Tractor",
                  columns: [
                    {   
                        id:"tractor_count",
                        Header: 'Count',
                        Footer:'Count'
                    },
                    {
                        id: "tractor_gallon",
                        Header: "Gallon",
                        Footer:"Gallon"
                    }
                ]
            },
            {
                Header: "Small Tractor",
                Footer: "Small Tractor",
                  columns: [
                    {   
                        id:"small_tractor_count",
                        Header: 'Count',
                        Footer:'Count'
                    },
                    {
                        id: "small_tractor_gallon",
                        Header: "Gallon",
                        Footer:"Gallon"
                    }
                ]
            }
        ]
    }, {
        Header: "Heavy Machinery",
        Footer: "Heavy Machinery",
        columns: [{
            id: "heavy_machinery_count",
            Header: "Count",
            Footer:'Count'
        },
            {
                id: "heavy_machinery_gallon",
                Header: "Gallon",
                Footer:"Gallon"
        }]
    },
    {
        Header: "Commerical Vehicle",
        Footer: "Commerical Vehicle",
        columns: [{
            id: "commerical_vehicle_count",
            Header: 'Count',
            Footer:'Count'
        }, {
            id: "commerical_vehicle_gallon",
            Header: "Gallon",
            Footer:"Gallon"
        }]
    },
    {
        Header: "Phone Tower",
        Footer: "Phone Tower",
        columns: [
            {
                id: "phone_tower_count",
                Header: "Count",
                Footer:"Count"
            },
            {
                id: 'phone_tower_gallon',
                Header: "Gallon",
                Footer:"Gallon"
            },
        ]
    },
    {
        Header: 'With a bucket (gal)',
        Footer: "With a bucket (gal)",
        columns: [{
            Header: "Industrial Zone",
            Footer: "Industrial Zone",
            columns: [
                {
                    id: 'industrial_zone_count',
                    Header: "Count",
                    Footer:"Count"
                },
                {
                    id: 'industrial_zone_gallon',
                    Header: "Gallon",
                    Footer:"Gallon"
                }
            ]
        }, {
            Header: "Agriculture Machine",
            Footer:"Agriculture Machine",
             columns: [
                {
                    id: 'agriculture_machine_count',
                    Header: "Count",
                    Footer:"Count"
                },
                {
                    id: 'agriculture_machine_gallon',
                    Header: "Gallon",
                    Footer:"Gallon"
                }
            ]
            },
            {
                Header: "Generator (Home Use)",
                Footer: 'Generator (Home Use)',
                 columns: [
                {
                    id: 'generator_home_count',
                    Header: "Count",
                    Footer:"Count"
                },
                {
                    id: 'generator_home_gallon',
                    Header: "Gallon",
                    Footer:"Gallon"
                }
            ]
        }]
    }, {
        Header: "Daily Sale Summary (gal)",
        Footer:"Daily Sale Summary (gal)"
    },
    {
        Header: 'PPRD Daily Sale Summary (gal)',
        Footer:'PPRD Daily Sale Summary (gal)'
    },
    {
        Header: 'Difference Gallon',
        Footer:'Difference Gallon'
    }

        ]
   
