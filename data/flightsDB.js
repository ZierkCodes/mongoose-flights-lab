


// const  = [
//     {}
// ]

let airlines = [
    {
        name: 'Southwest Airlines',
        planes: []
    }
]

let seat = {
    section: 'A',
    exit: true,
    row: 1
}

// let section = {
//     type: 'Economy',
//     rows: 11,
//     sections: {
//         A: {
//             seats: [
//                 {
//                     section: 'A',
//                     exit: true,
//                     row: 2
//                 }
//             ]
//         },
//         B: {
//             seats: [
//                 {
//                     section: 'B',
//                     exit: true,
//                     row: 2
//                 }
//             ]
//         },
//         C: {
//             seats: [
//                 {
//                     section: 'C',
//                     exit: true,
//                     row: 2
//                 }
//             ]
//         }
//     }
// }


let plane_chart = {
    sections: {
        first_class: {
            total_rows: 2,
            keys: ['A', 'C', 'isle', 'D', 'F'],
            rows: [
                [{
                    letter: 'A',
                    available: true,
                    exit: false
                }, {
                    letter: 'C',
                    available: true,
                    exit: false
                }, {
                    isle: true
                }, {
                    letter: 'D',
                    available: true,
                    exit: false
                }, {
                    letter: 'F',
                    available: true,
                    exit: false
                }],
                [{
                    letter: 'A',
                    available: true,
                    exit: false

                }, {
                    letter: 'C',
                    available: true,
                    exit: false

                }, {
                    isle: true
                }, {
                    letter: 'D',
                    available: true,
                    exit: false

                }, {
                    letter: 'F',
                    available: true,
                    exit: false
                }]
            ]
        },
        preferred: {
            total_rows: 6,
            keys: ['A', 'B', 'C', 'isle', 'D', 'E', 'F'],
            rows: [
                [{
                    letter: 'A',
                    available: true,
                    exit: true
                }, {
                    letter: 'B',
                    available: true,
                    exit: true
                }, {
                    letter: 'C',
                    available: true,
                    exit: true
                }, {
                    isle: true
                }, {
                    letter: 'D',
                    available: true,
                    exit: true
                }, {
                    letter: 'E',
                    available: true,
                    exit: true
                }, {
                    letter: 'F',
                    available: true,
                    exit: true
                }],
                [{
                    letter: 'A',
                    available: true,
                    exit: false
                }, {
                    letter: 'B',
                    available: true,
                    exit: false
                }, {
                    letter: 'C',
                    available: true,
                    exit: false
                }, {
                    isle: true
                }, {
                    letter: 'D',
                    available: true,
                    exit: false
                }, {
                    letter: 'E',
                    available: true,
                    exit: false
                }, {
                    letter: 'F',
                    available: true,
                    exit: false
                }],
                [{
                    letter: 'A',
                    available: true,
                    exit: false
                }, {
                    letter: 'B',
                    available: true,
                    exit: false
                }, {
                    letter: 'C',
                    available: true,
                    exit: false
                }, {
                    isle: true
                }, {
                    letter: 'D',
                    available: true,
                    exit: false
                }, {
                    letter: 'E',
                    available: true,
                    exit: false
                }, {
                    letter: 'F',
                    available: true,
                    exit: false
                }],
                [{
                    letter: 'A',
                    available: true,
                    exit: false
                }, {
                    letter: 'B',
                    available: true,
                    exit: false
                }, {
                    letter: 'C',
                    available: true,
                    exit: false
                }, {
                    isle: true
                }, {
                    letter: 'D',
                    available: true,
                    exit: false
                }, {
                    letter: 'E',
                    available: true,
                    exit: false
                }, {
                    letter: 'F',
                    available: true,
                    exit: false
                }],
                [{
                    letter: 'A',
                    available: true,
                    exit: false
                }, {
                    letter: 'B',
                    available: true,
                    exit: false
                }, {
                    letter: 'C',
                    available: true,
                    exit: false
                }, {
                    isle: true
                }, {
                    letter: 'D',
                    available: true,
                    exit: false
                }, {
                    letter: 'E',
                    available: true,
                    exit: false
                }, {
                    letter: 'F',
                    available: true,
                    exit: false
                }],
                [{
                    letter: 'A',
                    available: true,
                    exit: true
                }, {
                    letter: 'B',
                    available: true,
                    exit: true
                }, {
                    letter: 'C',
                    available: true,
                    exit: true
                }, {
                    isle: true
                }, {
                    letter: 'D',
                    available: true,
                    exit: true
                }, {
                    letter: 'E',
                    available: true,
                    exit: true
                }, {
                    letter: 'F',
                    available: true,
                    exit: true
                }]
            ]
        },
        economy: {
            total_rows: 14,
            keys: ['A', 'B', 'C', 'isle', 'D', 'E', 'F'],
            rows: [
                [{
                    letter: 'A',
                    available: true,
                    exit: false
                }, {
                    letter: 'B',
                    available: true,
                    exit: false
                }, {
                    letter: 'C',
                    available: true,
                    exit: false
                }, {
                    isle: true
                }, {
                    letter: 'D',
                    available: true,
                    exit: false
                }, {
                    letter: 'E',
                    available: true,
                    exit: false
                }, {
                    letter: 'F',
                    available: true,
                    exit: false
                }],
                [{
                    letter: 'A',
                    available: true,
                    exit: false
                }, {
                    letter: 'B',
                    available: true,
                    exit: false
                }, {
                    letter: 'C',
                    available: true,
                    exit: false
                }, {
                    isle: true
                }, {
                    letter: 'D',
                    available: true,
                    exit: false
                }, {
                    letter: 'E',
                    available: true,
                    exit: false
                }, {
                    letter: 'F',
                    available: true,
                    exit: false
                }],
                [{
                    letter: 'A',
                    available: true,
                    exit: false
                }, {
                    letter: 'B',
                    available: true,
                    exit: false
                }, {
                    letter: 'C',
                    available: true,
                    exit: false
                }, {
                    isle: true
                }, {
                    letter: 'D',
                    available: true,
                    exit: false
                }, {
                    letter: 'E',
                    available: true,
                    exit: false
                }, {
                    letter: 'F',
                    available: true,
                    exit: false
                }],
                [{
                    letter: 'A',
                    available: true,
                    exit: false
                }, {
                    letter: 'B',
                    available: true,
                    exit: false
                }, {
                    letter: 'C',
                    available: true,
                    exit: false
                }, {
                    isle: true
                }, {
                    letter: 'D',
                    available: true,
                    exit: false
                }, {
                    letter: 'E',
                    available: true,
                    exit: false
                }, {
                    letter: 'F',
                    available: true,
                    exit: false
                }],
                [{
                    letter: 'A',
                    available: true,
                    exit: false
                }, {
                    letter: 'B',
                    available: true,
                    exit: false
                }, {
                    letter: 'C',
                    available: true,
                    exit: false
                }, {
                    isle: true
                }, {
                    letter: 'D',
                    available: true,
                    exit: false
                }, {
                    letter: 'E',
                    available: true,
                    exit: false
                }, {
                    letter: 'F',
                    available: true,
                    exit: false
                }],
                [{
                    letter: 'A',
                    available: true,
                    exit: false
                }, {
                    letter: 'B',
                    available: true,
                    exit: false
                }, {
                    letter: 'C',
                    available: true,
                    exit: false
                }, {
                    isle: true
                }, {
                    letter: 'D',
                    available: true,
                    exit: false
                }, {
                    letter: 'E',
                    available: true,
                    exit: false
                }, {
                    letter: 'F',
                    available: true,
                    exit: false
                }],
                [{
                    letter: 'A',
                    available: true,
                    exit: false
                }, {
                    letter: 'B',
                    available: true,
                    exit: false
                }, {
                    letter: 'C',
                    available: true,
                    exit: false
                }, {
                    isle: true
                }, {
                    letter: 'D',
                    available: true,
                    exit: false
                }, {
                    letter: 'E',
                    available: true,
                    exit: false
                }, {
                    letter: 'F',
                    available: true,
                    exit: false
                }],
                [{
                    letter: 'A',
                    available: true,
                    exit: false
                }, {
                    letter: 'B',
                    available: true,
                    exit: false
                }, {
                    letter: 'C',
                    available: true,
                    exit: false
                }, {
                    isle: true
                }, {
                    letter: 'D',
                    available: true,
                    exit: false
                }, {
                    letter: 'E',
                    available: true,
                    exit: false
                }, {
                    letter: 'F',
                    available: true,
                    exit: false
                }],
                [{
                    letter: 'A',
                    available: true,
                    exit: false
                }, {
                    letter: 'B',
                    available: true,
                    exit: false
                }, {
                    letter: 'C',
                    available: true,
                    exit: false
                }, {
                    isle: true
                }, {
                    letter: 'D',
                    available: true,
                    exit: false
                }, {
                    letter: 'E',
                    available: true,
                    exit: false
                }, {
                    letter: 'F',
                    available: true,
                    exit: false
                }],
                [{
                    letter: 'A',
                    available: true,
                    exit: false
                }, {
                    letter: 'B',
                    available: true,
                    exit: false
                }, {
                    letter: 'C',
                    available: true,
                    exit: false
                }, {
                    isle: true
                }, {
                    letter: 'D',
                    available: true,
                    exit: false
                }, {
                    letter: 'E',
                    available: true,
                    exit: false
                }, {
                    letter: 'F',
                    available: true,
                    exit: false
                }],
                [{
                    letter: 'A',
                    available: true,
                    exit: false
                }, {
                    letter: 'B',
                    available: true,
                    exit: false
                }, {
                    letter: 'C',
                    available: true,
                    exit: false
                }, {
                    isle: true
                }, {
                    letter: 'D',
                    available: true,
                    exit: false
                }, {
                    letter: 'E',
                    available: true,
                    exit: false
                }, {
                    letter: 'F',
                    available: true,
                    exit: false
                }],
                [{
                    letter: 'A',
                    available: true,
                    exit: false
                }, {
                    letter: 'B',
                    available: true,
                    exit: false
                }, {
                    letter: 'C',
                    available: true,
                    exit: false
                }, {
                    isle: true
                }, {
                    letter: 'D',
                    available: true,
                    exit: false
                }, {
                    letter: 'E',
                    available: true,
                    exit: false
                }, {
                    letter: 'F',
                    available: true,
                    exit: false
                }],
                [{
                    letter: 'A',
                    available: true,
                    exit: false
                }, {
                    letter: 'B',
                    available: true,
                    exit: false
                }, {
                    letter: 'C',
                    available: true,
                    exit: false
                }, {
                    isle: true
                }, {
                    letter: 'D',
                    available: true,
                    exit: false
                }, {
                    letter: 'E',
                    available: true,
                    exit: false
                }, {
                    letter: 'F',
                    available: true,
                    exit: false
                }],
                [{
                    letter: 'A',
                    available: true,
                    exit: true
                }, {
                    letter: 'B',
                    available: true,
                    exit: true
                }, {
                    letter: 'C',
                    available: true,
                    exit: true
                }, {
                    isle: true
                }, {
                    letter: 'D',
                    available: true,
                    exit: true
                }, {
                    letter: 'E',
                    available: true,
                    exit: true
                }, {
                    letter: 'F',
                    available: true,
                    exit: true
                }]
            ]
        }
    }
}





let planes = {
    boeing: {
        models: {
            B737_700: {
                sections: [
                    {
                        type: 'Economy',
                        rowCount: 11,
                        rows: [
                            {
                                A: null,
                                B: null,
                                C: null,
                                isle: true,
                                D: {
                                    available: true,
                                    exit: true,
                                    good: true,
                                },
                                E: {
                                    available: true,
                                    exit: true,
                                    good: true,
                                },
                                F: {
                                    available: true,
                                    exit: true,
                                    good: true,
                                }
                            },
                            {
                                A: {
                                    available: true,
                                    exit: true,
                                    good: true,
                                },
                                B: {
                                    available: true,
                                    exit: true,
                                    good: true,
                                },
                                C: {
                                    available: true,
                                    exit: true,
                                    good: true,
                                },
                                isle: true,
                                D: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                },
                                E: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                },
                                F: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                }
                            },
                            {
                                A: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                },
                                B: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                },
                                C: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                },
                                isle: true,
                                D: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                },
                                E: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                },
                                F: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                }
                            },
                            {
                                A: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                },
                                B: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                },
                                C: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                },
                                isle: true,
                                D: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                },
                                E: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                },
                                F: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                }
                            },
                            {
                                A: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                },
                                B: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                },
                                C: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                },
                                isle: true,
                                D: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                },
                                E: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                },
                                F: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                }
                            },
                            {
                                A: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                },
                                B: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                },
                                C: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                },
                                isle: true,
                                D: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                },
                                E: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                },
                                F: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                }
                            },
                            {
                                A: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                },
                                B: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                },
                                C: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                },
                                isle: true,
                                D: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                },
                                E: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                },
                                F: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                }
                            },
                            {
                                A: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                },
                                B: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                },
                                C: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                },
                                isle: true,
                                D: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                },
                                E: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                },
                                F: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                }
                            },
                            {
                                A: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                },
                                B: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                },
                                C: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                },
                                isle: true,
                                D: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                },
                                E: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                },
                                F: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                }
                            },
                            {
                                A: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                },
                                B: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                },
                                C: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                },
                                isle: true,
                                D: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                },
                                E: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                },
                                F: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                }
                            },
                            {
                                A: {
                                    available: true,
                                    exit: true,
                                    good: false,
                                },
                                B: {
                                    available: true,
                                    exit: true,
                                    good: false,
                                },
                                C: {
                                    available: true,
                                    exit: true,
                                    good: false,
                                },
                                isle: true,
                                D: {
                                    available: true,
                                    exit: true,
                                    good: false,
                                },
                                E: {
                                    available: true,
                                    exit: true,
                                    good: false,
                                },
                                F: {
                                    available: true,
                                    exit: true,
                                    good: false,
                                }
                            }
                    
                        ]
                    },
                    {
                        type: 'Economy',
                        rowCount: 13,
                        rows: [
                            {
                                A: {
                                    available: true,
                                    exit: false,
                                    good: true,
                                },
                                B: {
                                    available: true,
                                    exit: false,
                                    good: true,
                                },
                                C: {
                                    available: true,
                                    exit: false,
                                    good: true,
                                },
                                isle: true,
                                D: {
                                    available: true,
                                    exit: false,
                                    good: true,
                                },
                                E: {
                                    available: true,
                                    exit: false,
                                    good: true,
                                },
                                F: {
                                    available: true,
                                    exit: false,
                                    good: true,
                                }
                            },
                            {
                                A: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                },
                                B: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                },
                                C: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                },
                                isle: true,
                                D: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                },
                                E: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                },
                                F: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                }
                            },
                            {
                                A: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                },
                                B: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                },
                                C: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                },
                                isle: true,
                                D: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                },
                                E: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                },
                                F: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                }
                            },
                            {
                                A: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                },
                                B: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                },
                                C: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                },
                                isle: true,
                                D: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                },
                                E: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                },
                                F: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                }
                            },
                            {
                                A: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                },
                                B: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                },
                                C: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                },
                                isle: true,
                                D: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                },
                                E: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                },
                                F: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                }
                            },
                            {
                                A: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                },
                                B: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                },
                                C: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                },
                                isle: true,
                                D: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                },
                                E: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                },
                                F: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                }
                            },
                            {
                                A: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                },
                                B: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                },
                                C: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                },
                                isle: true,
                                D: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                },
                                E: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                },
                                F: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                }
                            },
                            {
                                A: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                },
                                B: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                },
                                C: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                },
                                isle: true,
                                D: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                },
                                E: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                },
                                F: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                }
                            },
                            {
                                A: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                },
                                B: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                },
                                C: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                },
                                isle: true,
                                D: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                },
                                E: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                },
                                F: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                }
                            },
                            {
                                A: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                },
                                B: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                },
                                C: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                },
                                isle: true,
                                D: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                },
                                E: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                },
                                F: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                }
                            },
                            {
                                A: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                },
                                B: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                },
                                C: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                },
                                isle: true,
                                D: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                },
                                E: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                },
                                F: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                }
                            },
                            {
                                A: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                },
                                B: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                },
                                C: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                },
                                isle: true,
                                D: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                },
                                E: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                },
                                F: {
                                    available: true,
                                    exit: false,
                                    good: false,
                                }
                            },
                            {
                                A: {
                                    available: true,
                                    exit: true,
                                    good: false,
                                },
                                B: {
                                    available: true,
                                    exit: true,
                                    good: false,
                                },
                                C: {
                                    available: true,
                                    exit: true,
                                    good: false,
                                },
                                isle: true,
                                D: {
                                    available: true,
                                    exit: true,
                                    good: false,
                                },
                                E: {
                                    available: true,
                                    exit: true,
                                    good: false,
                                },
                                F: {
                                    available: true,
                                    exit: true,
                                    good: false,
                                }
                            }
                        ]
                    }
                ]
            },
            B737_800: {
                sections: [
                    {
                        type: 'Economy',
                        rowCount: 13,
                        rows: []
                    },
                    {
                        type: 'Economy'
                    }
                ]
            },
            B737_MAX8: {

            }
        }
    },
    airbus: {
        models: {
            A319: {

            },
            A320: {

            }
        }
    },
    embraer: {
        models: {
            EMB_175: {

            }
        }
    }
}


let flightSchema = {
    firstClass: {
        seatKeys: ['A', 'isle', 'D', 'G', 'isle', 'K'],
        rows: 11
    },
    secondClass: {
        seatKeys: ['A', 'C', 'isle', 'D', 'E', 'F', 'G', 'isle', 'H', 'K'],
        rows: 53
    }
}