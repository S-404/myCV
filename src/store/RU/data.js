import {myPhoto} from "../../assets/photo/index"

export const dataRU = {
    personalData: {
        name: "Андрей Сударев",
        title: "Full stack Developer",
        image: myPhoto,
        summary: "Я занимаюсь веб-разработкой с 2020 года. И уже применил свои навыки, создавая приложения для оптимизации процессов в логистике розничных продаж и отдела продаж (IKEA). На данный момент сфокусирован на развитии себя как full stack developer. ",
        contacts: {
            title: "Контакты",
            content: [
                {type: "email", value: "sudarev.andrey.i@gmail.com",},
                {type: "телефон/whatsapp/skype/telegram", value: "+7 (967) 123 50 80",},
                {
                    type: "местонахождение",
                    value: "МО Дзержинский",
                    link: "https://www.google.ru/maps/place/55%C2%B037'51.8%22N+37%C2%B050'57.9%22E/@55.6213453,37.8557238,13.41z/data=!4m6!3m5!1s0x0:0xdd0e7c60c23bbf9!7e2!8m2!3d55.6310442!4d37.8494089?hl=ru"
                },
                {type: "github", value: "github.com/S-404", link: "https://github.com/S-404"},
            ]
        }
    },
    skills: {
        title: "Навыки",
        content: [
            {
                type: "Frontend",
                points: [
                    "JavaScript(ES6+)",
                    "TypeScript",
                    "React",
                    "Redux, RTK, MobX",
                    "CSS, SASS, Bootstrap, MUI",
                    "HTML - BEM",
                    "JQuery",
                ]
            },
            {
                type: "Backend",
                points: [
                    "Nodejs (Express)",
                    "MySQL, MSSQL, PostgreSQL",
                    "PHP (Laravel)",
                ]
            },
        ]

    },
    softSkills: {
        title: "Гибкие Навыки",
        content: [
            {
                type: "",
                points: [
                    "Трудолюбие",
                    "Упорство",
                    "Ответственность",
                    "Внимательность",
                    "Стремление к развитию",
                    "Работа в коллективе",
                    "Аналитический склад ума",
                    "Дисциплинированность",
                ]
            },
        ]
    },
    about: {
        title: "Обо мне",
        content: [
            {
                type: "web разработка",
                value: "Развиваю навыки программирования с 2017 года, на разработку веб приложений перешёл в 2020 году."
            },
            {
                type: "frontend",
                value: "Есть опыт в использовании ReactJS, Redux, TypeScript, JQuery;\n" +
                    "Для вёрстки: HTML(BEM), CSS(SASS), MUI, Bootstrap;\n" +
                    "\n"+
                    "прототип приложения с личным кабинетом:\n"+
                    "<i>typescript / react / axios / redux thunk / bootstrap</i> \n"+
                    "<i>node.js / express / json-server</i> \n"+
                    "repo: <a target='_blank' href='https://github.com/S-404/lk-fullstack'>https://github.com/S-404/lk-fullstack</a> \n"+
                    "\n"+
                    "прототип приложения онлайн заказа в ресторане\n"+
                    "<i>react / redux toolkit / sass</i>\n"+
                    "repo: <a target='_blank' href='https://github.com/S-404/react-food'>https://github.com/S-404/react-food</a>  \n"+
                    "preview: <a target='_blank' href='https://s-404.github.io/react-food'>https://s-404.github.io/react-food</a>  \n"+
                    "\n"+
                    "классическая игра для тренировки памяти: \n"+
                    "<i>react / mobx / sass</i>\n"+
                    "repo: <a target='_blank' href='https://github.com/S-404/memory-game'>https://github.com/S-404/memory-game</a> \n"+
                    "preview: <a target='_blank' href='https://s-404.github.io/memory-game'>https://s-404.github.io/memory-game</a> \n"+
                    "\n"
            },
            {
                type: "backend",
                value: "Разработка и поддержка серверов Node.js (express REST), PHP;\n" +
                    "Опыт работы с базами данных SQL, администрирование (MSSQL, MySQL);\n" +
                    "\n"+
                    "прототип логин сервера с jwt:\n"+
                    "<i>node js / express / jwt / sequelize</i>\n"+
                    "repo: <a target='_blank' href='https://github.com/S-404/auth-server-express-mssql'>https://github.com/S-404/auth-server-express-mssql</a>  \n"+
                    "\n"+
                    "прототип сервера с авторизацией, jwt, командным управлением списком задач:\n"+
                    "<i>node js / express / jwt / sequelize</i>\n"+
                    "repo: <a target='_blank' href='https://github.com/S-404/blahaj-server'>https://github.com/S-404/blahaj-server</a>  \n"+
                    "\n"
            },
            {
                type: "прочие навыки",
                value:
                    'Опытный пользователь Linux / Windows \n'+
                    'vb.NET - начал свой путь программирования с разработки приложений win forms\n' +
                    'C# - практиковал навыки на небольших проектах на Unity \n' +
                    "PowerShell - автоматизация серверной машины скриптами \n" +
                    'Java - изучаю, интересно бэкенд направление\n' +
                    'Python - есть небольшой опыт написания парсеров, кликеров, телеграм-бота\n'
            },
        ]
    },
    sections: [
        {
            title: "Опыт",
            content: [
                {
                    organization: "ЮрКлик - ООО Юридический сервис \"ЮрКлик\"",
                    period: "Апрель 2023 - по настоящее время",
                    webSite: "https://landing.yurclick.com/",
                    title: "Фулстек-разработчик",
                    description: [
                        "Создание SPA-приложения (React)",
                        "Интеграция со сторонними сервисами",
                        "Работа с БД",
                        "Проведение рефакторинга, тестирования, деплоя кода",
                    ],
                    stack: {
                        title: 'Стек',
                        points: ["TypeScript", "React","Redux RTK", "MUI", "PHP Laravel", "MySQL", "Linux", "Git/GitLab"],
                    },
                    achievements: {
                        title: "Достижения",
                        points: []
                    }
                },
                {
                    organization: "Фриланс",
                    period: "Июль 2023",
                    webSite: "https://github.com/S-404/stableApp",
                    title: "Разработчик",
                    description: [
                        "Разработка приложения для бронирования манежей на конюшне",
                        "Создание SPA-приложения (React), придерживаясь ахитектуры Feature-Sliced Design",
                        "Разработка http сервера Nodejs express",
                        "Настройка взаимодействия с бд через sequelize",
                        "Настройка окружения, деплой кода",
                    ],
                    stack: {
                        title: 'Стек',
                        points: ["TypeScript", "React","Redux RTK", "MUI", "Nodejs express", "sequilize","PostgreSQL", "pm2", "Linux"],
                    },
                    achievements: {
                        title: "Достижения",
                        points: []
                    }
                },
                {
                    organization: "InState - ООО \"ИнСтейт\"",
                    period: "Май 2022 - Апрель 2023",
                    webSite: "https://instate-pm.com/",
                    title: "Разработчик",
                    description: [
                        "Оценивание сроков реализации отдельных функциональных требований или блоков требований",
                        "Участие в обсуждении технических решений по реализации функционала ПО",
                        "Разработка кода ПО",
                        "Исправление ошибок в коде ПО",
                    ],
                    stack: {
                        title: 'Стек',
                        points: ["JS", "JQuery", "CSS","Bootstrap", "PostgreSQL", "Nodejs", "Linux", "Git/GitLab"],
                    },
                    achievements: {
                        title: "Достижения",
                        points: [
                            "Наставник для новичков",
                            "Тимлид на небольших проектах"
                        ]
                    }
                },
                {
                    organization: "IKEA - ООО \"ИКЕА ДОМ\"",
                    period: "Ноябрь 2020 - Май 2022",
                    title: "Веб-разработчик (гпх)",
                    description: [
                        "Fullstack разработка web-портала, " +
                        "разработка web-приложений для оптимизации и автоматизации процессов коммерческой команды",
                        "Проектирование БД",
                        "Настройка и обслуживание web и SQL серверов и окружения",
                    ],
                    stack: {
                        title: 'Стек',
                        points: ["React", "Redux", "JS", "JQuery", "PHP", "CSS", "Nodejs", "MSSQL", "PowerShell", "Windows"]
                    },
                    achievements: {
                        title: "Достижения",
                        points: [
                            "Мои приложения в рамках компании были признаны как хорший пример для использования в стране"
                        ]
                    }
                },
                {
                    organization: "IKEA - ООО \"ИКЕА ДОМ\"",
                    period: "Сентябрь 2017 - Ноябрь 2020",
                    title: "vb.Net разработчик (гпх)",
                    description: [
                        "Fullstack разработка win form приложений, " +
                        "разработка win form приложений для оптимизации и автоматизации процессов коммерческой команды",
                        "Проектирование БД"
                    ],
                    stack: {
                        title: "Стек",
                        points: ["vb.Net", "MSSQL", "MSAccess", "PowerShell", "Windows"]
                    },
                    achievements: {
                        title: "Достижения",
                        points: []
                    }
                },
                {
                    organization: "IKEA - ООО \"ИКЕА ДОМ\"",
                    period: "Ноябрь 2011 - Май 2022",
                    title: "Логистика, специалист поддержки продаж и снабжения",
                    description: [
                        "Использование внутренних систем для анализа и поддерживания доступности стоков в магазине",
                        "Формирование отчетов для анализа ключевых показателей с целью их последующего улучшения",
                        "Организация и проведение инвентаризации товаров, расследование обнаруженных расхождений",
                        "Ведение внутреннего документооборота",
                        "Обработка внутренних транзакций",
                    ],
                    achievements: {
                        title: "Достижения",
                        points: [
                            "Применение своих навыков программирования для достижения бизнес целей, " +
                            "разрабатывая методы и инструменты для взаимодействия коммерческой команды.",
                            "Достижение роли Senior Specialist",
                            "Оптимизация процессов отдела - создание и внедрения приложений, " +
                            "сокративших затраты времени на ежедневные задачи отдела"
                        ]
                    }
                },

            ]
        },
        {
            title: "Образование",
            content: [
                {
                    organization: "НОУ ВПО Профессиональный Институт Юриспруденции",
                    period: "окончен 2012",
                    title: "Государственное и муниципальное управление, Стратегическое управление",
                    description: [],
                    achievements: {
                        title: "Достижения",
                        points: []
                    },
                }
            ]

        }
    ]
}

