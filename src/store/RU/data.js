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
                {type: "телефон", value: "+7 (967) 123 50 80"},
                {
                    type: "telegram", 
                    value: "@mayday_406", 
                    link: "https://t.me/mayday_406"
                },
                {
                    type: "местонахождение",
                    value: "МО Дзержинский",
                    link: "https://www.google.ru/maps/place/55%C2%B037'51.8%22N+37%C2%B050'57.9%22E/@55.6213453,37.8557238,13.41z/data=!4m6!3m5!1s0x0:0xdd0e7c60c23bbf9!7e2!8m2!3d55.6310442!4d37.8494089?hl=ru"
                },
                {
                    type: "github", 
                    value: "github.com/S-404", 
                    link: "https://github.com/S-404"
                },
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
                value: `Начал свой путь как разработчик в 2017 году, разрабатывая приложения на vb.NET (win forms).

                C 2020 года занимаюсь веб-разработкой и уже применил свои навыки, создавая приложения для оптимизации процессов в логистике розничных продаж и отдела продаж (IKEA).
                
                Не останавливаюсь на достигнутом, постоянно изучаю что-то новое, расширяя свой кругозор в веб технологиях`
            },
            {
                type: "прочие навыки",
                value:
                    `Опытный пользователь Linux / Windows
                    vb.NET - начал свой путь программирования с разработки приложений win forms
                    C# - практиковал навыки на небольших проектах на Unity
                    PowerShell - автоматизация серверной машины скриптами
                    Python - есть небольшой опыт написания парсеров, кликеров, телеграм-бота`
            },
        ]
    },
    sections: [
        {
            title: "Опыт",
            content: [
                {
                    organization: "ЮрКлик - ООО Юридический сервис \"ЮрКлик\"",
                    period: "Апрель 2023 - Август 2023",
                    webSite: "https://landing.yurclick.com/",
                    title: "Фулстек-разработчик",
                    description: [
                        "Разработка приложения для предоставления юридических услуг",
                        "Разработка и оптимизация SPA-приложения (react, redux, typescript)",
                        "Работа с БД (MySQL)",
                        "Интеграция сторонних сервисов (интернет-эквайринг, рассылка писем, автозаполнение контактных данных)",
                        "Разработка и оптимизация бэкенда (php laravel)",
                    ],
                    stack: {
                        title: 'Стек',
                        points: ["TypeScript", "React","Redux RTK", "react-hook-form", "MUI", "PHP Laravel", "MySQL", "Linux", "Git/GitLab"],
                    },
                    achievements: {
                        title: "Достижения",
                        points: [
                            "Для большего вовлечения в процесс разработки на бэкенде - изучил фреймворк laravel"
                        ]
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
                        "Настройка взаимодействия с бд (postgresql) через sequelize",
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
                        "Разработка и поддержка low code платформы для разработки веб-приложений",
                        "Развитие инструментов платформы",
                        "Реализация и расширение функционала виджетов и модулей",
                        "Оптимизация существующих виджетов и модулей",
                        "Разработка продуктов на платформе",
                        "Работа с БД (postgresql)",
                        "Оценивание сроков реализации отдельных функциональных требований или блоков требований",
                        "Участие в обсуждении технических решений по реализации функционала ПО",
                        "Участие в проектах внедрения продуктов компании",
                    ],
                    stack: {
                        title: 'Стек',
                        points: ["JS", "JQuery", "CSS","Bootstrap", "PostgreSQL", "Nodejs", "express", "Linux", "Git/GitLab"],
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
                    period: "Сентябрь 2017 - Май 2022",
                    title: "Разработчик (гпх)",
                    description: [
                        "Fullstack разработка приложений для оптимизации и автоматизации процессов коммерческой команды",
                        "Разработка web-портала",
                        "Разработка win form приложений",
                        "Проектирование БД (mssql)",
                        "Настройка и обслуживание web и SQL серверов и окружения",
                    ],
                    stack: {
                        title: 'Стек',
                        points: ["React", "Redux", "JS", "JQuery", "PHP", "CSS", "Nodejs", "MSSQL", "PowerShell", "Windows", "vb.NET", "MSAceess"]
                    },
                    achievements: {
                        title: "Достижения",
                        points: [
                            "Мои приложения были признаны как хороший пример внутри компании для использования в стране",
                            "Создал и внедрил приложения, сократившие затраты времени на ежедневные задачи отдела"
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

