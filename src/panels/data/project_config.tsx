export interface ProjectConfig {
    title: string;
    desc: string;
    imagepath: string;
    techs: string;
    tags: Array<string>;
    github: string;
    website?: string;
}


export var MyProjects: ProjectConfig[] = [
    {
        title: 'BCIT SMART', 
        desc: 'A web card game inspired by Tabletop Simulator teaching clients about SMART Microgrids.', 
        imagepath: 'projects/smartpng.png',
        techs: 'HTML5, CSS3, JavaScript, React.js, MongoDB, Node.js, Express.js, Heroku, Material UI, Konva',
        tags: ['group', 'web', 'game'],
        github: 'https://github.com/SmartGameSandbox/GameSandBox',
        website: 'https://smartgamesandbox.herokuapp.com/'
    },
    {
        title: 'Aflo', 
        desc: 'A mobile travel app where users can create a budget-friendly vacation package including flights and hotels.', 
        imagepath: 'projects/aflo.png',
        techs: 'Java, Android, Firebase, Realtime Database',
        tags: ['group', 'mobile'],
        github: 'https://github.com/ahanani/Aflo'
    },
    {
        title: 'Worryless', 
        desc: 'A journaling web app where users can leave their worries behind for the day.', 
        imagepath: 'projects/WorryLess_Logo.png',
        techs: 'HTML5, CSS3, JavaScript, MongoDB, Node.js, Express.js, Heroku, Chart.js',
        tags: ['group', 'web'],
        github: 'https://github.com/HailinChenbcit/2800-202210-DTC02'
    },
    {
        title: 'Eggonomics', 
        desc: "A web app that facilitates the average person's grocery shopping experience.", 
        imagepath: 'projects/eggonomics.png',
        techs: 'HTML5, CSS3, JavaScript, Firebase, Node.js, Bootstrap',
        tags: ['group', 'web'],
        github: 'https://github.com/FonseLULW/Eggonomics',
        website: 'https://eggonomics-35c2b.firebaseapp.com/'
    }
]
