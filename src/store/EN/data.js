import {myPhoto} from "../../assets/photo/index"

export const dataEN = {
    personalData: {
        name: "Andrey Sudarev",
        title: "Full stack Developer",
        image: myPhoto,
        summary: "I've joined web development in 2020. And I've already applied my skills by creating applications for process optimization in retail logistics and sales department (IKEA). At the moment I'm focused on developing myself as a full stack developer.",
        contacts: {
            title: "Contacts",
            content: [
                {type: "email", value: "sudarev.andrey.i@gmail.com",},
                {type: "phone/whatsapp/skype/telegram", value: "+7 (967) 123 50 80",},
                {
                    type: "telegram",
                    value: "@mayday_406",
                    link: "https://t.me/mayday_406"
                },
                {
                    type: "location",
                    value: "Dzerzhinsky, Moscow Oblast",
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
        title: "Skills",
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
        title: "Soft Skills",
        content: [
            {
                type: "",
                points: [
                    "Industriousness",
                    "Perseverance",
                    "Responsibility",
                    "Attentiveness",
                    "Striving for development",
                    "Teamwork",
                    "Analytical mind",
                    "Discipline",
                ]
            },
        ]
    },
    about: {
        title: "About me",
        content: [
            {
                type: "web development",
                value: `I've been developing programming skills since 2017, joined web application development in 2020.
                And I've already applied my skills by creating applications for process optimization in retail logistics and sales department (IKEA).
                I don’t stop there, I’m constantly learning something new, expanding my horizons in web technologies.
                `
            },
            {
                type: "other",
                value:
                    `Experienced Linux/Windows user
                    vb.NET - I started programming with win forms
                    C# - practiced skills on small UNITY projects
                    PowerShell - server machine automation
                    Python - have some experience in writing parsers, clickers, telegram bots\n`
            },
        ]
    },
    sections: [
        {
            title: "Experience",
            content: [
                {
                    organization: "YurClick",
                    period: "April 2023 - August 2023",
                    webSite: "https://landing.yurclick.com/",
                    title: "Fullstack developer",
                    description: [
                        "SPA (React) development for the provision of legal services",
                        "Third-party services integration: internet acquiring, automatic verification and correction of contact data, sending letters/sms",
                        "Working with database (MySQL)",
                        "Refactoring, testing, code deployment",
                        "Backend development and optimization (php laravel)"
                    ],
                    stack: {
                        title: 'Stack',
                        points: ["TypeScript", "React","Redux RTK", "react-hook-form", "MUI", "PHP Laravel", "MySQL", "Git/GitLab"],
                    },
                    achievements: {
                        title: "Achievements",
                        points: [
                            "For greater involvement in the development process on the backend, got acquainted with the Laravel framework"
                        ]
                    }
                },
                {
                    organization: "Freelance",
                    period: "July 2023",
                    webSite: "https://github.com/S-404/stableApp",
                    title: "Developer",
                    description: [
                        "Application development for booking arenas in the stables",
                        "SPA (React) development with Feature-Sliced Design architecture",
                        "Http server development with Nodejs express",
                        "Working with database (postgresql) by using sequilize",
                        "Configure and maintain of web and SQL servers and environments",
                    ],
                    stack: {
                        title: 'Stack',
                        points: ["TypeScript", "React","Redux RTK", "MUI", "Nodejs express", "sequilize","PostgreSQL", "pm2", "Linux"],
                    },
                    achievements: {
                        title: "Achievements",
                        points: []
                    }
                },
                {
                    organization: "InState",
                    period: "May 2022 - April 2023",
                    webSite: "https://instate-pm.com/",
                    title: "Developer",
                    description: [
                        "Development and support of a low code platform for developing web applications",
                        "Development of platform tools",
                        "Implementation and expansion of functionality of widgets and modules",
                        "Optimization of existing widgets and modules",
                        "Development of applications on the platform",
                        "Working with the database (postgresql)",
                        "Estimating the timing of the implementation of individual functional requirements or blocks of requirements",
                        "Participation in the discussion of technical solutions for the implementation of the software functionality",
                        "Participation in projects for the implementation of company products",
                    ],
                    stack: {
                        title: 'Stack',
                        points: ["JS", "JQuery", "CSS","Bootstrap", "PostgreSQL", "Nodejs", "express", "Linux", "Git/GitLab"],
                    },
                    achievements: {
                        title: "Achievements",
                        points: [
                            "Beginner's mentor",
                            "Team leader on small projects"
                        ]
                    }
                },
                {
                    title: "Developer (civil contract)",
                    period: "September 2017 - May 2022",
                    organization: "IKEA",
                    description: [
                        "Development of web applications to optimize and automate the processes of a commercial team",
                        "Fullstack developing of web portal",
                        "Development of winforms apps",
                        "Database design (mssql)",
                        "Configure and maintain of web and SQL servers and environments",
                    ],
                    stack: {
                        title: 'Stack',
                        points: ["React", "Redux", "JS", "JQuery", "PHP", "CSS", "Nodejs", "MSSQL", "PowerShell", "Windows", "vb.NET", "MSAceess"]
                    },
                    achievements: {
                        title: "Achievements",
                        points: [
                            "My applications have been recognized as a good example for use in the country",
                            "Optimization of department processes - created and implemented applications that reduced the time spent on routines"
                        ]
                    }
                },
            ]
        },
        {
            title: "Education",
            content: [
                {
                    title: "State and municipal administration, Strategic management",
                    period: "Year of graduation: 2012",
                    organization: "Non-State Institution \"Professional Institute of Jurisprudence\"",
                    description: [],
                    achievements: {
                        title: "Achievements",
                        points: []
                    },
                }
            ]

        }
    ]
}

