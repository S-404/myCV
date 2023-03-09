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
                    type: "location",
                    value: "Dzerzhinsky, Moscow Oblast",
                    link: "https://www.google.ru/maps/place/55%C2%B037'51.8%22N+37%C2%B050'57.9%22E/@55.6213453,37.8557238,13.41z/data=!4m6!3m5!1s0x0:0xdd0e7c60c23bbf9!7e2!8m2!3d55.6310442!4d37.8494089?hl=ru"
                },
                {type: "github", value: "github.com/S-404", link: "https://github.com/S-404"},
            ]
        }
    },
    skills: {
        title: "Skills",
        content: [
            {
                type: "JavaScript(ES6+)",
                points: ["React", "Redux / MobX", "TypeScript", "Node", "JQuery"]
            },
            {
                type: "HTML",
                points: ["BEM"]
            },
            {
                type: "CSS",
                points: ["SASS", "Bootstrap"]
            },
            {
                type: "SQL",
                points: ["PostgreSQL", "MSSQL", "MySQL"]
            },
            {
                type: "Tools",
                points: ["Git/GitHub", "Npm", "Webpack", "Postman"]
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
                value: "I've been developing programming skills since 2017, joined web application development in 2020\n" +
                    "I'm determined to become a team developer"
            },
            {
                type: "frontend",
                value: "I've the skills to use ReactJS, Redux, TypeScript, JQuery;" +
                    "HTML(BEM), CSS(SASS), Bootstrap;\n"+
                    "\n"+
                    "app prototype with personal account:\n"+
                    "<i>typescript / react / axios / redux thunk / bootstrap</i> \n"+
                    "<i>node.js / express / json-server</i> \n"+
                    "repo: <a target='_blank' href='https://github.com/S-404/lk-fullstack'>https://github.com/S-404/lk-fullstack</a> \n"+
                    "\n"+
                    "app prototype of an online ordering in a restaurant\n"+
                    "<i>react / redux toolkit / sass</i>\n"+
                    "repo: <a target='_blank' href='https://github.com/S-404/react-food'>https://github.com/S-404/react-food</a>  \n"+
                    "preview: <a target='_blank' href='https://s-404.github.io/react-food'>https://s-404.github.io/react-food</a>  \n"+
                    "\n"+
                    "classic memory game: \n"+
                    "<i>react / mobx / sass</i>\n"+
                    "repo: <a target='_blank' href='https://github.com/S-404/memory-game'>https://github.com/S-404/memory-game</a> \n"+
                    "preview: <a target='_blank' href='https://s-404.github.io/memory-game'>https://s-404.github.io/memory-game</a> \n"+
                    "\n"
            },
            {
                type: "backend",
                value: "For backend I'm using Node.js(express REST), PHP (openserver), server machine automation with PowerShell scripts , " +
                    "SQL server administration (MSSQL)"+
                    "\n"+
                    "prototype login server with jwt:\n"+
                    "repo: <a target='_blank' href='https://github.com/S-404/auth-server-express-mssql'>https://github.com/S-404/auth-server-express-mssql</a>  \n"+
                    "\n"+
                    "prototype server with auth, task list management, jwt:\n"+
                    "repo: <a target='_blank' href='https://github.com/S-404/blahaj-server'>https://github.com/S-404/blahaj-server</a>  \n"+
                    "\n"
            },
            {
                type: "прочие навыки",
                value:
                    'Experienced Linux/Windows user \n'+
                    'vb.NET - I started programming with win forms\n' +
                    'C# - practiced skills on small UNITY projects" \n' +
                    "PowerShell - server machine automation\n" +
                    'Java - studying, interesting backend direction\n' +
                    'Python - have some experience in writing parsers, clickers, telegram bots\n'
            },
        ]
    },
    sections: [
        {
            title: "Experience",
            content: [
                {
                    organization: "InState",
                    period: "May 2022 - currently",
                    webSite: "https://instate-pm.com/",
                    title: "Developer",
                    description: [
                        "Estimating the timing of the implementation of individual functional requirements or blocks of requirements",
                        "Participation in the discussion of technical solutions for the implementation of the software functionality",
                        "Software code development / Debugging",
                    ],
                    stack: {
                        title: 'Stack',
                        points: ["JS", "JQuery", "CSS","Bootstrap", "PostgreSQL", "Nodejs", "Linux", "Git/GitLab"],
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
                    title: "Web Developer (civil contract)",
                    period: "November 2020 - May 2022",
                    organization: "IKEA",
                    description: [
                        "Fullstack developing of web portal, " +
                        "Development of web applications to optimize and automate the processes of a commercial team",
                        "Database design",
                        "Configure and maintain of web and SQL servers and environments",
                    ],
                    stack: {
                        title: 'Stack',
                        points: ["React", "Redux", "JS", "JQuery", "PHP", "CSS", "Nodejs", "MSSQL", "PowerShell", "Windows"]
                    },
                    achievements: {
                        title: "Achievements",
                        points: [
                            "My applications have been recognized as a good example for use in the country"
                        ]
                    }
                },
                {
                    title: "Logistics, supply support specialist",
                    period: "November 2011 - May 2022",
                    organization: "IKEA",
                    description: [
                        "Using internal systems to analyze and maintain store stock availability",
                        "Making reports for the analysis of key indicators with a view to their subsequent improvement",
                        "Organizing and conducting an inventory of goods, investigating discovered discrepancies",
                        "Maintaining internal document flow",
                        "Handling internal transactions",
                    ],
                    stack: {
                        title: "Stack",
                        points: ["vb.Net", "MSSQL", "MSAccess", "PowerShell", "Windows"]
                    },
                    achievements: {
                        title: "Achievements",
                        points: [
                            "Applying programming skills to achieve business goals " +
                            "by developing methods and tools for the interaction of a commercial team",
                            "Reached the role Senior Specialist",
                            "Optimization of department processes - " +
                            "created and implemented applications " +
                            "that reduced the time spent on routines",
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

