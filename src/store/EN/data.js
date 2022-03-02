import {myPhoto} from "../../assets/photo/index";

export const dataEN = {
    personalData: {
        name: 'Andrey Sudarev',
        title: 'Frontend Developer',
        image: myPhoto,
        summary: 'I apply my programming skills to achieve business goals by developing methods and tools for the interaction of a commercial team',
        contacts: {
            title: 'Contacts',
            content: [
            {type: 'email', value: 'sudarev.andrey.i@gmail.com',},
            {type: 'phone/whatsapp/skype', value: '+7 (967) 123 50 80',},
            {
                type: 'location',
                value: 'Dzerzhinsky, Moscow Oblast',
                link: 'https://www.google.ru/maps/place/55%C2%B037\'51.8%22N+37%C2%B050\'57.9%22E/@55.6213453,37.8557238,13.41z/data=!4m6!3m5!1s0x0:0xdd0e7c60c23bbf9!7e2!8m2!3d55.6310442!4d37.8494089?hl=ru'
            },
            {type: 'github', value: 'github.com/S-404', link: 'https://github.com/S-404'},
        ]}
    },
    skills: {
        title: 'Skills',
        content: [
            {
                type: 'JavaScript(ES6+)',
                points: ['React', 'Redux', 'TypeScript', 'Node', 'JQuery']
            },
            {
                type: 'HTML',
                points: ['BEM']
            },
            {
                type: 'CSS',
                points: ['SASS']
            },
            {
                type: 'SQL',
                points: ['MSSQL', 'MySQL']
            },
            {
                type: 'Tools',
                points: ['Git/GitHub', 'npm']
            },
            {
                type: 'Others',
                points: ['PowerShell', 'PHP', 'vb.NET']
            },
        ]

    },
    about: {
        title: 'About me',
        content: [
            {
                type: 'web development',
                value: 'Joined web application development in 2020'
            },
            {
                type: 'frontend',
                value: 'JQuery, React'
            },
            {
                type: 'backend',
                value: 'PHP, Node.js, server machine automation with PowerShell scripts , ' +
                    'SQL server administration (MSSQL)'
            },
            {
                type: 'other',
                value: 'Developing programming skills since 2017\n' +
                    'started with vb.NET (win forms)\n' +
                    'and small С# UNITY projects'
            },
        ]
    },
    sections: [
        {
            title: 'Experience',
            content: [
                {
                    title: 'Web Developer (civil contract)',
                    period: 'November 2020 - currently',
                    organization: 'IKEA',
                    description: [
                        'Fullstack developing of web portal, ' +
                        'Development of web applications to optimize and automate the processes of a commercial team',
                        'Database design',
                        'Configure and maintain of web and SQL servers and environments',
                    ],
                    achievements: {
                        title: 'Achievements',
                        points: []
                    }
                },
                {
                    title: 'Logistics, supply support specialist',
                    period: 'November 2011 - currently',
                    organization: 'IKEA',
                    description: [
                        'Using internal systems to analyze and maintain store stock availability',
                        'Making reports for the analysis of key indicators with a view to their subsequent improvement',
                        'Organizing and conducting an inventory of goods, investigating discovered discrepancies',
                        'Maintaining internal document flow',
                        'Handling internal transactions',
                    ],
                    achievements: {
                        title: 'Achievements',
                        points: [
                            'I apply my programming skills to achieve business goals ' +
                            'by developing methods and tools for the interaction of a commercial team',
                            'Reached the role Senior Specialist',
                            'Optimization of department processes - ' +
                            'created and implemented applications ' +
                            'that reduced the time spent on routines',
                        ]
                    }
                },
            ]
        },
        {
            title: 'Education',
            content: [
                {
                    title: 'State and municipal administration, Strategic management',
                    period: 'Year of graduation: 2012',
                    organization: 'НОУ ВПО Профессиональный Институт Юриспруденции',
                    description: [],
                    achievements: {
                        title: 'Achievements',
                        points: []
                    },
                }
            ]

        }
    ]
}

