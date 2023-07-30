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
    },
    {
        title: 'Valhalla',
        desc: `A tower defense game where you play as a viking fighting against an alien invasion and Heejo, a 6' 10" alien boss.`, 
        imagepath: 'projects/valhalla.png',
        techs: 'Java, JavaFX, MySQL, FXGL, JDBC',
        tags: ['group', 'web'],
        github: 'https://github.com/FonseLULW/2522-202210-Term-Project-Valhalla'
    },
    {
        title: 'Scalar',
        desc: "An interactive 2D physics simulation showcasing gravity, object collision, momentum, and other physics concepts.", 
        imagepath: 'projects/scalar.png',
        techs: 'HTML5, CSS3, JavaScript, Sass / SCSS, p5.js, Express.js, Node.js',
        tags: ['solo', 'web', 'game'],
        github: 'https://github.com/FonseLULW/simulations',
        website: 'https://scalar-js.netlify.app/'
    },
    {
        title: 'Customer Churn Predictor',
        desc: "A binary prediction model built from a Kaggle dataset using machine learning and ensembles to predict if a customer will likely leave a service. ", 
        imagepath: 'projects/churn.png',
        techs: 'Python, Scikit-learn, Jupyter, Keras, Google Colab, Streamlit, Pandas, Numpy, Seaborn, Matplotlib',
        tags: ['solo', 'data'],
        github: 'https://github.com/FonseLULW/4949a2',
        website: 'https://fonselulw-4949a2-main-br6432.streamlit.app/'
    },
    {
        title: 'Spotify Genre Predictor',
        desc: "A multiclass prediction model built using a Kaggle dataset to predict a song's genre based on different Spotify indices.", 
        imagepath: 'projects/spotify.png',
        techs: 'Python, Scikit-learn, Google Colab, Pandas, Numpy, Seaborn, Matplotlib',
        tags: ['solo', 'data'],
        github: 'https://github.com/FonseLULW/spotifygenrepredictor'
    }
]
