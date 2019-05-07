const checkboxesConfig = [
    {
        name: 'fixedRate',
        key: 'checkBox1',
        label: 'Fixed and Variable Rate',
        component:"ExtraOptions",

    },

    {
        name: 'centMile',
        key: 'checkBox2',
        label: 'Cent Per Mile',
        component:"ExtraOptions"

    },
    {
        name: 'techOnly',
        key: 'checkBox3',
        label: 'Technology Only',
        component:"ExtraOptions"

    }
]
const extraOptionsCheckboxConfig = [
     {
        name: 'InsuranceDeclaration',
        key: 'checkBox2',
        label: 'Insurance Declaration'

    },
    {
        name: 'BVIF',
        key: 'checkBox3',
        label: 'Vehicle Information(BVIF)'
    },
    {
        name: 'MVR',
        key: 'checkBox4',
        label: 'Motor Vehicle Records(MVR)'
    },

]
export {
    checkboxesConfig,
    extraOptionsCheckboxConfig
}

// {
//     name:'fixedInsurance',
//         key:'checkBox2',
//     label:'Insurance Declaration'
//
// },
// {
//     name:'fixedVehicle',
//         key:'checkBox3',
//     label:'Vehicle Information(BVIF)'
// },
// {
//     name:'fixedMotor',
//         key:'checkBox4',
//     label:'Motor Vehicle Records(MVR)'
// },