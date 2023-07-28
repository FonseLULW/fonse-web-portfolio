export interface ProjectConfig {
    title: string;
    subtitle: string;
    imagepath: string;
    tags: Array<string>;
}


export var MyProjects: ProjectConfig[] = [
    {
        title: 'BCIT SMART', 
        subtitle: 'Group project', 
        imagepath: 'projects/smartpng.png',
        tags: ['group', 'web', 'game']
    },
    {
        title: 'Aflo', 
        subtitle: 'Group project', 
        imagepath: 'projects/aflo.png',
        tags: ['group', 'mobile']
    },
    {
        title: 'Worryless', 
        subtitle: 'Group project', 
        imagepath: 'projects/WorryLess_Logo.png',
        tags: ['group', 'web']
    },
    {
        title: 'Eggonomics', 
        subtitle: 'Group project', 
        imagepath: 'projects/eggonomics.png',
        tags: ['group', 'web']
    }
]
