const contacts = [
  {
    name: 'Email',
    url: 'mailto:benjaminlpeck@gmail.com?subject=Full Stack Software Engineer',
    pic: '/icons/email.png',
    text: 'BenjaminLPeck@gmail.com'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/benjaminlpeck/',
    pic: '/icons/linkedin.png',
    text: 'in/benjaminlpeck'
  },
  {
    name: 'GitHub',
    url: 'https://github.com/benjaminobambino',
    pic: '/icons/github.png',
    text: 'github.com/benjaminobambino'
  }
];

const projects = [
  {
    name: 'Chore Chart',
    pic: '/project-pics/chore-chart.png',
    description:
      'Users can create an account, join an existing household or create their own, and keep track of chores for their whole household.',
    deployed: 'https://chorechart.netlify.app/',
    gitHub: 'https://github.com/benjaminobambino/chore-chart',
    techs:
      'Django || Python || PostgreSQL || React || JWT Auth || Axios || 3rd Party API || JavaScript || HTML || CSS || SQL || Insomnia || Postico || Djoser || Git'
  },
  {
    name: 'Creature Collab',
    pic: '/project-pics/creature-collab.png',
    description:
      'Group project full-stack app for mythical creatures to create, host, and attend events. Users can create a profile for their character (be it their gaming avatar, D&D persona, LARP alias, or another mythical creature) and discover events with like-minded characters. My contributions were the entire backend and the events-related components.',
    deployed: 'https://the-creature-collab.herokuapp.com/',
    gitHub: 'https://github.com/moomoomewmew/the-creature-collab',
    techs:
      'PostgreSQL || Express || React || Node || JWT Auth || Axios || JavaScript || HTML || CSS || Sequelize || Insomnia || Git'
  },
  // {
  //   name: 'Good Dad Bad Jokes',
  //   pic: '/project-pics/good-dad-bad-jokes.png',
  //   description:
  //     'Browser-based, full-stack MERN app that does exactly what a good dad should: tell bad jokes. Upon launch, users can immediately enjoy jokes being pulled from the back-end database. Users who sign up can "like" their favorite jokes and contribute their own jokes to the database.',
  //   deployed: 'https://herokuapp.com/',
  //   gitHub: 'https://github.com/benjaminobambino/good-dad-bad-jokes',
  //   techs:
  //     'MongoDB || Mongoose || Express || React || Node || Axios || JavaScript || HTML || CSS || Insomnia || Git'
  // },
  {
    name: 'Video Game DB',
    pic: '/project-pics/video-game-database.png',
    description:
      'Frontend Vue.js web app that makes Axios calls to the RAWG API and maps through genres and games based on search and browsing selections.',
    deployed: 'https://vue-rawg.vercel.app/',
    gitHub: 'https://github.com/benjaminobambino/u4_hw_vue_RAWG',
    techs:
      'Vue || Axios || 3rd Party API || JavaScript || HTML || CSS || Insomnia || Git'
  },
  {
    name: 'The Game of War',
    pic: '/project-pics/war.png',
    description:
      'The classic card game, "War," using HTML, CSS, and vanilla JavaScript to manipulate the DOM.',
    deployed: 'https://the-game-of-war.surge.sh/',
    gitHub: 'https://github.com/benjaminobambino/the-game-of-war',
    techs: 'JavaScript || HTML || CSS || Git'
  }
  // {
  //   name: 'Tic-Tac-Toe',
  //   pic: '/project-pics/tic-tac-toe.png',
  //   description:
  //     "My oldest portfolio piece, I built this tic-tac-toe after one week of class at General Assembly's full-time software engineering immersive boot camp. It's a fully functional tic-tac-toe with a running scoreboard, using vanilla JavaScript DOM manipulation.",
  //   deployed: 'https://blp-tic-tac-toe.surge.sh/',
  //   gitHub: 'https://github.com/benjaminobambino/u1_hw_tic_tac_toe',
  //   techs: 'JavaScript || HTML || CSS || Git'
  // }
];

const skills = [
  { name: 'JavaScript', pic: '/icons/javascriptbw.png' },
  { name: 'Python', pic: '/icons/pythonbw.png' },
  { name: 'React', pic: '/icons/reactbw.png' },
  { name: 'Vue', pic: '/icons/vuebw.png' },
  { name: 'HTML', pic: '/icons/html.png' },
  { name: 'Redux', pic: '/icons/redux.png' },
  { name: 'Django', pic: '/icons/django.png' },
  { name: 'SQL', pic: '/icons/sql.png' },
  { name: 'PostgreSQL', pic: '/icons/postgresql.png' },
  { name: 'Express', pic: '/icons/express-squared.png' },
  { name: 'Sequelize', pic: '/icons/sequelize-squared.png' },
  { name: 'MongoDB', pic: '/icons/mongodb-icon-12.png' },
  { name: 'Mongoose', pic: '/icons/mongoose.png' },
  { name: 'CSS', pic: '/icons/css.png' },
  { name: 'Node', pic: '/icons/nodebw.png' },
  { name: 'Git', pic: '/icons/git.png' },
  { name: 'GitHub', pic: '/icons/github.png' }
];

module.exports = {
  contacts,
  projects,
  skills
};
