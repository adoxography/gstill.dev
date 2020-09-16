import React from 'react';

import chatbotAvatar from './assets/images/robot.svg';
import pixelDrawing from './assets/images/pixels.png';
import alglangLogo from './assets/images/alglang.svg';
import gstillLogo from './assets/images/logo.png';

const alglang = {
  title: 'Database of Algonquian Language Structures',
  imgSrc: alglangLogo,
  links: {
    visit: 'https://preview.alglang.net',
    source: 'https://github.com/alglang/alglang'
  },
  description: 'A project to provide basic information about the sounds and grammar of the Algonquian languages',
  technologies: [
    'PHP',
    'Laravel',
    'HTML',
    'CSS',
    'JavaScript',
    'Vue.js',
    'Alpine.js',
    'SQL',
    'Tailwind'
  ],
  body: (
    <>
      <p>
        I started developing the Database of Algonquian Language Structures (a.k.a. <strong>alglang.net</strong>) with <a href="https://home.cc.umanitoba.ca/~oxfordwr/" target="_blank" rel="noopener noreferrer">Dr. Will Oxford</a> during the last year of my undergraduate degree at the University of Manitoba. Research on Algonquian linguistics &mdash; that is, the study of the largest language family native to North America &mdash; is notoriously difficult to access, even for linguists. Much of the existing research is tucked away in printed sources in obscure libraries, and written in such a way as to be almost indecipherable to all but experts in (specifically) Algonquian linguistics. The goal for the database was to make this information accessible to anyone with a computer.
      </p>

      <p className="mt-6">
        A big part of the project was organizing the data about Algonquian linguistics in such a way that it could be stored in a <strong>relational database</strong> (a topic about which I presented along with Will Oxford at the 49<sup>th</sup> Algonquian Conference). The schema I developed fits the Algonquian family very well, but I believe it to be flexible enough to accomodate many other language families with minimal changes.
      </p>

      <p className="mt-6">
        This was my first full-stack web application, and I learned a lot about web development in general through the process of making it. It is written primarily in PHP (using Laravel as a framework), and uses Vue.js to provide client-side interactivity. It includes an interface to allow contributors to add more entries to the database without having to deal directly with the database. I'm currently in the process of overhauling the entire website with the benefit of more experience in developing and desigigning applications.
      </p>
    </>
  )
};

const countdown = {
  title: 'Countdown',
  imgSrc: 'https://github.com/adoxography/countdown/blob/master/assets/icon.png?raw=true',
  links: {
    source: 'https://github.com/adoxography/countdown'
  },
  description: 'A simple, unobtrusive timer app for MacOS that can float over fullscreen windows',
  technologies: [
    'React',
    'Electron',
    'CSS',
    'HTML',
    'JavaScript'
  ],
  body: (
    <>
      <p>
        I developed Countdown more out of personal necessity than anything else; I was working as a teacher, and needed a timer to give my students a better sense of how much time remained in work periods. All of the existing timer apps I tried either wouldn't work alongside a fullscreen app in MacOS, or were chained to the top of the screen &mdash; either making them too small to be readable, or blocking important information in that region of the screen. Being an avid user of "floating" MacOS apps like <a href="https://www.alfredapp.com/" target="_blank" rel="noopener noreferrer">Alfred</a>, I knew there had to be a way to achieve the sort of experience I was looking for.
      </p>

      <p className="mt-6">
        Objectively, the best implementation for this kind of app would be a native Swift app, but I since I don't know Swift and didn't have the time to go about learning it, I chose to write the app in React and embed it in Electron. It turns out that Electron has a convenient <code>setVisibleOnAllWorkspaces</code> method which, along with a hanful of other required settings, enable an app to float over full screen apps!
      </p>
    </>
  )
}

const streamlined = {
  title: 'Streamlined Genre',
  imgSrc: 'https://cdn.pixabay.com/photo/2014/12/14/10/26/light-567757_1280.jpg',
  links: {
    source: 'https://github.com/adoxography/streamlined-genre'
  },
  description: 'My master\'s project, classifying genre of spoken audio samples',
  technologies: [
    'Python',
    'openSMILE',
    'openXBOW',
    'scikit-learn'
  ],
  body: (
    <>
      <p>
        Description coming soon
      </p>
    </>
  )
};

const pixels = {
  title: 'Pixel drawing',
  imgSrc: pixelDrawing,
  links: {
    visit: 'https://adoxography.github.io/pixel-drawing/',
    source: 'https://github.com/adoxography/pixel-drawing'
  },
  description: 'A web app for teaching computational thinking with art',
  technologies: [
    'JavaScript',
    'Vue.js',
    'HTML',
    'CSS',
    'Bulma'
  ],
  body: (
    <>
      <p>
        Description coming soon
      </p>
    </>
  )
};

const showdown = {
  title: 'Manitoba Showdown',
  imgSrc: 'https://github.com/adoxography/the-showdown/blob/master/logo.png?raw=true',
  links: {
    visit: 'https://manitobashowdown.ca/',
    source: 'https://github.com/adoxography/the-showdown'
  },
  description: 'Proof-of-concept for a social media-connected web app',
  technologies: [
    'React',
    'JavaScript',
    'HTML',
    'CSS',
    'Tailwind'
  ],
  body: (
    <>
      <p>
        This project is a proof-of-concept demonstration for a website that uses social media platforms as its back-end. The folks at the Manitoba Showdown were looking to create a site to augment their existing Instagram and YouTube presence. Instead of running its own database, this site uses the Instagram and YouTube APIs to populate its content.
      </p>
    </>
  )
};

const dagaare = {
  title: 'Dagaare Grammar',
  imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/She-avm.png',
  links: {
    source: 'https://github.com/adoxography/dagaare-grammar'
  },
  description: 'A grammar for the Dagaare (a language spoken in Ghana), expressed using the HPSG framework',
  technologies: [
    'HPSG',
    'LinGo Grammar Matrix',
    '[incr tsdb()]',
    'LKB',
    'MRS'
  ],
  body: (
    <>
      <p>
        This project was part of a course on <a href="http://courses.washington.edu/ling567/" target="_blank" rel="noopener noreferrer">Knowledge Engineering for NLP</a>, taught by <a href="http://faculty.washington.edu/ebender/" target="_blank" rel="noopener noreferrer">Emily Bender</a>. Along with <a href="https://www.linkedin.com/in/dwennermarko/" target="_blank" rel="noopener noreferrer">Drew Owens</a>, I engineered a grammar for <a href="https://glottolog.org/resource/languoid/id/sout2789" target="_blank" rel="noopener noreferrer">Dagaare</a>, a Niger-Congo language spoken in Ghana. Despite being primarily a linguistics course, there were a lot of programming concepts involved: in particular, we effectively used a form of <a href="https://en.wikipedia.org/wiki/Test-driven_development" target="_blank" rel="noopener noreferrer">Test-Driven Development</a>, via <code>[incr tsdb()]</code>, to guide our progress.
      </p>

      <p className="pt-6">
        An advantage to using HPSG and MRS, like we did, is that sentences can be translated directly between grammars with a very high degree of accuracy. The culmination of this course was a day where the class wired our various grammars together, along with a <a href="http://www.delph-in.net/erg/" target="_blank" rel="noopener noreferrer">grammar for English</a>, to translate sentences between the languages we'd studied.
      </p>
    </>
  )
};

const neam = {
  title: 'NEAM',
  imgSrc: 'https://i.pinimg.com/150x150/cd/78/23/cd782352d4a7031c375f5faeed2f8ea7.jpg',
  links: {
    source: 'https://github.com/Linguistics575/neam'
  },
  description: 'Automated named entity markup on historical texts',
  technologies: [
    'Java',
    'Python',
    'JPype',
    'BeautifulSoup',
    'Stanford Parser',
    'Wikidata'
  ],
  body: (
    <>
      <p>
        I worked on NEAM along with <a href="https://www.linkedin.com/in/vanessawoldengaracine" target="_blank" rel="noopener noreferrer">Sunny Woldenga-Racine</a> and <a href="https://www.linkedin.com/in/chrishaberland/" target="_blank" rel="noopener noreferrer">Chris Haberland</a> as part of a special topics course at the University of Washington taught by <a href="https://nelc.washington.edu/people/sarah-ketchley" target="_blank" rel="noopener noreferrer">Sarah Ketchley</a>. The goal of the course was to augment historical documents gathered by and for the <a href="http://www.emmabandrews.org/project/" target="_blank" rel="noopener noreferrer">Emma B. Andrews Diary Project</a>. We leveraged the <a href="https://nlp.stanford.edu/software/CRF-NER.html" target="_blank" rel="noopener noreferrer">Stanford Named Entity Recognizer</a> to tag named entities within Emma B. Andrews' journals for cross-referencing.
      </p>

      <p className="mt-6">
        Among my larger contributions to the project was the use of <code>JPype</code> to bring the Stanford Parser into a Python setting. Our team as a whole was more comfortable with Python than Java, so this enabled us to work more cohesively on the project.
      </p>
    </>
  )
};

const portfolio = {
  title: 'gstill.dev',
  imgSrc: gstillLogo,
  links: {
    source: 'https://github.com/adoxography/gstill.dev'
  },
  description: 'The site you\'re looking at right now!',
  technologies: [
    'React',
    'JavaScript',
    'HTML',
    'CSS',
    'Tailwind'
  ],
  body: (
    <>
      <p>
        The layout for this site was unashamedly taken from <a href="https://www.kevinpowell.co/" target="_blank" rel="noopener noreferrer">Kevin Powell</a>'s excellent course, <a href="https://scrimba.com/learn/portfolio" target="_blank" rel="noopener noreferrer"><strong>Build and deploy a portfolio on Digital Ocean</strong></a>. I've reimplemented it in React and Tailwind because&hellip;well, I just thought it would be fun! Most of the interactivity is original, though I'll let you judge for yourself whether it's effective or not. I also chose to deploy it over Github Pages through the use of a Github Action, instead of deploying it on Digital Ocean.
      </p>

      <p className="mt-6">
        I've had a lot of fun making this site, and I hope you enjoy reading it!
      </p>
    </>
  )
};

const bettyBot = {
  title: 'Betty Bot',
  imgSrc: chatbotAvatar,
  links: {
    visit: 'https://ChatbotTemplate.gstill.repl.co',
    source: 'https://repl.it/@GStill/ChatbotTemplate#bot.js'
  },
  description: 'A starting template for exploring JavaScript in a chatbot setting',
  technologies: [
    'JavaScript',
    'HTML',
    'CSS',
    'BEM',
    'Express.js'
  ],
  body: (
    <>
      <p>
        I wrote <strong>Betty Bot</strong> as a starter template for a JavaScript chatbot, based on an assignment I had in grad school. Learners simply need to complete three functions in <code>bot.js</code>, and they'll immediately have a functioning chatbot. I leveraged the ability of <code><a href="https://repl.it" target="_blank" rel="noopener noreferrer">repl.it</a></code> to run persistent webservers to make the project even more extensible: using the chatbot they had already created, learners can treat their bot as a Web API for incorporation into, e.g., a discord bot. Chatbots can also be combined; using this same idea of a chatbot as a Web API, I created an example "<a href="https://repl.it/@GStill/ConversationHost" target="_blank" rel="noopener noreferrer">chatroom for chatbots</a>."
      </p>

      <p className="mt-6">
        Because the focus for this type of application is to learn JavaScript specifically, I wanted to prewrite all of the interface code, so that learners could have something that looks nice if they chose to share their project with others. To keep the code as accessible and hackable as possible, the interface is written in completely custom vanilla JavaScript and CSS.
      </p>
    </>
  )
};

export default [
  alglang,
  countdown,
  streamlined,
  pixels,
  showdown,
  dagaare,
  neam,
  portfolio,
  bettyBot
];
