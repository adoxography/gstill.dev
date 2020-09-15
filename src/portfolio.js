import React from 'react';

import chatbotAvatar from './assets/images/robot.svg';
import pixelDrawing from './assets/images/pixels.png';
import alglangLogo from './assets/images/alglang.svg';

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
        Description coming soon
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
  description: 'A grammar for the Ghanaian language Dagaare, expressed using the HPSG framework',
  technologies: [
    'HPSG',
    'LinGo Grammar Matrix',
    '[incr tsdb()]',
    'LKB'
  ],
  body: (
    <>
      <p>
        Description coming soon
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
    'Stanford Parser',
    'Wikidata'
  ],
  body: (
    <>
      <p>
        Description coming soon
      </p>
    </>
  )
};

const portfolio = {
  title: 'gstill.dev',
  imgSrc: 'https://avatars2.githubusercontent.com/u/23176291?s=460&u=7ecb99c2e34345e19779cab4dfdff6c5787bed82&v=4',
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
        Description coming soon
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
    'Express.js'
  ],
  body: (
    <>
      <p>
        Description coming soon
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
