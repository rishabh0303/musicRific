const appData = {
    appQuote: 'Find the best music for your soul',
    homeScreen: {
        commercial: {
            label: 'Commercial',
            id: '#commercial',
            isActive: true,
            items: [
                {
                    label: 'POP',
                    key: 'pop',
                    bgImage: ''
                },
                {
                    label: 'Urban',
                    key: 'urban',
                    bgImage: ''
                },
                {
                    label: 'World',
                    key: 'world',
                    bgImage: ''
                },
                {
                    label: 'Others',
                    key: 'others',
                    bgImage: ''
                },
                {
                    label: 'Cloud Rap',
                    bgImage: ''
                },
                {
                    label: 'Groove',
                    key: 'groove',
                    bgImage: ''
                },
                {
                    label: 'Electronica',
                    key: 'electronica',
                    bgImage: ''
                }
            ]
        },
        freelicense: {
            label: 'Free License',
            id: '#free-license',
            isActive: false,
            items: [
                {
                    label: 'English',
                    key: 'english',
                    bgImage: ''
                },
                {
                    label: 'Punjabi',
                    key: 'punjabi',
                    bgImage: ''
                },
                
                {
                    label: 'Hindi',
                    key: 'hindi',
                    bgImage: ''
                    
                }
                
            ]
        }
    }
}

module.exports = {
    appData
}
