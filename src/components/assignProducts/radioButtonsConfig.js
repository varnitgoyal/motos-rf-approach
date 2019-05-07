const radioButtonConfig = [
    {
        name: 'paymentMethod',
        key: 'radiobutton1',
        label: 'Direct Deposit',
  

    },

    {
        name: 'paymentMethod',
        key: 'radiobutton2',
        label: 'concur',
     

    },
    {
        name: 'paymentMethod',
        key: 'radiobutton3',
        label: 'payroll file',


    }
]

const DriverManagement=[
    {
        name: 'DriverManagement',
        key: 'radiobutton1',
        label: 'Self Service',
  

    },

    {
        name: 'DriverManagement',
        key: 'radiobutton2',
        label: 'HRIS Feed',
     

    },
    {
        name: 'DriverManagement',
        key: 'radiobutton2',
        label: 'Motus Api',
     

    },


]

const FixedPaymentSchedule=[
    {
        name: 'FPS',
        key: 'radiobutton1',
        label: 'Prior Month',
  

    },

    {
        name: 'FPS',
        key: 'radiobutton2',
        label: 'Current Month',
     

    },

]

const paymentFrequency=[
    {
        name:"paymentFrequency",
        key:"radiobutton",
        lable:"monthly  "
    }
]



export {
    radioButtonConfig,
    paymentFrequency,
    FixedPaymentSchedule,
    DriverManagement
}