import {myPhoto} from "../../assets/photo/index";

export const dataRU = {
    personalData: {
        name: 'Андрей Сударев',
        title: 'Junior Frontend Developer',
        image: myPhoto,
        summary: 'Применяю свои навыки программирования для достижения бизнес целей, ' +
            'разрабатывая методы и инструменты для взаимодействия коммерческой команды.',
        contacts: {
            title: 'Контакты',
            content: [
            {type: 'email', value: 'sudarev.andrey.i@gmail.com',},
            {type: 'телефон/whatsapp/skype', value: '+7 (967) 123 50 80',},
            {
                type: 'местонахождение',
                value: 'МО Дзержинский',
                link: 'https://www.google.ru/maps/place/55%C2%B037\'51.8%22N+37%C2%B050\'57.9%22E/@55.6213453,37.8557238,13.41z/data=!4m6!3m5!1s0x0:0xdd0e7c60c23bbf9!7e2!8m2!3d55.6310442!4d37.8494089?hl=ru'
            },
            {type: 'github', value: 'github.com/S-404', link: 'https://github.com/S-404'},
        ]}
    },
    skills: {
        title: 'Навыки',
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
                type: 'Инструменты',
                points: ['Git/GitHub', 'npm']
            },
            {
                type: 'Прочее',
                points: ['PowerShell', 'PHP', 'vb.NET']
            },
        ]

    },
    about: {
        title: 'Обо мне',
        content: [
            {
                type: 'web разработка',
                value: 'На разработку веб приложений перешёл в 2020 году'
            },
            {
                type: 'frontend',
                value: 'JQuery (c 2020), React (с ноября 2021)'
            },
            {
                type: 'backend',
                value: 'PHP, Node.js, автоматизация серверной машины скриптами PowerShell, ' +
                    'администрирование SQL сервера (MSSQL)'
            },
            {
                type: 'прочее',
                value: 'Развиваю навыки программирования с 2017 года\n' +
                    'начинал с vb.NET (win forms)\n' +
                    'и c небольших проектов на С# в UNITY'
            },
        ]
    },
    sections: [
        {
            title: 'Опыт',
            content: [
                {
                    organization: 'IKEA',
                    period: 'Ноябрь 2020 - по настоящее время',
                    title: 'Веб-разработчик (гпх)',
                    description: [
                        'Fullstack разработка web-портала, ' +
                        'разработка web-приложений для оптимизации и автоматизации процессов коммерческой команды',
                        'Проектирование БД',
                        'Развёртывание, настройка и обслуживание web и SQL серверов и окружения',
                    ],
                    achievements: {
                        title: 'Достижения',
                        points: []
                    }
                },
                {
                    organization: 'IKEA',
                    period: 'Ноябрь 2011 - по настоящее время',
                    title: 'Логистика, специалист поддержки продаж и снабжения',
                    description: [
                        'Использование внутренних систем для анализа и поддерживания доступности стоков в магазине',
                        'Формирование отчетов для анализа ключевых показателей с целью их последующего улучшения',
                        'Организация и проведение инвентаризации товаров, расследование обнаруженных расхождений',
                        'Ведение внутреннего документооборота',
                        'Обработка внутренних транзакций',
                    ],
                    achievements: {
                        title: 'Достижения',
                        points: [
                            'Применяю свои навыки программирования для достижения бизнес целей, ' +
                            'разрабатывая методы и инструменты для взаимодействия коммерческой команды.',
                            'Достиг роли Senior Specialist',
                            'Оптимизация процессов отдела - создал и внедрил приложения, ' +
                            'сократившие затраты времени на ежедневные задачи отдела'
                        ]
                    }
                },

            ]
        },
        {
            title: 'Образование',
            content: [
                {
                    organization: 'НОУ ВПО Профессиональный Институт Юриспруденции',
                    period: 'окончен 2012',
                    title: 'Государственное и муниципальное управление, Стратегическое управление',
                    description: [],
                    achievements: {
                        title: 'Достижения',
                        points: []
                    },
                }
            ]

        }
    ]
}

