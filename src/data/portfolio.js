import React from 'react';

import chatbotAvatar from '../assets/images/robot.svg';
import pixelDrawing from '../assets/images/pixels.png';
import alglangLogo from '../assets/images/alglang.svg';
import gstillLogo from '../assets/images/logo.png';
import periodicalLogo from '../assets/images/periodical.svg';
import tailwindLogo from '../assets/images/tailwind.svg';
import kInARowLogo from '../assets/images/kinarow.svg';

import { technologies } from './technologies';

const alglang = {
  title: 'Database of Algonquian Language Structures',
  imgSrc: alglangLogo,
  links: {
    visit: 'https://preview.alglang.net',
    source: 'https://github.com/alglang/alglang'
  },
  description: 'Providing information about the grammar of the Algonquian languages',
  technologies: [
    technologies.php,
    technologies.laravel,
    technologies.html,
    technologies.css,
    technologies.js,
    technologies.vue,
    technologies.alpine,
    technologies.sql,
    technologies.tailwind
  ],
  body: (
    <>
      <p>
        I started developing the Database of Algonquian Language Structures
        (a.k.a. <strong>alglang.net</strong>)
        with <a href="https://home.cc.umanitoba.ca/~oxfordwr/" target="_blank" rel="noopener noreferrer">Dr. Will Oxford</a> during
        the last year of my undergraduate degree at the University of Manitoba. Research on
        Algonquian linguistics &mdash; that is, the study of the largest language family native to
        North America &mdash; is notoriously difficult to access, even for linguists. Much of the
        existing research is tucked away in printed sources in obscure libraries, and written in
        such a way as to be almost indecipherable to all but experts in (specifically) Algonquian
        linguistics. The goal for the database was to make this information accessible to anyone
        with a computer.
      </p>

      <p className="mt-6">
        A big part of the project was organizing the data about Algonquian linguistics in such a
        way that it could be stored in a <strong>relational database</strong> (a topic about which
        I presented along with Will Oxford at the 49<sup>th</sup> Algonquian Conference). The
        schema I developed fits the Algonquian family very well, but I believe it to be flexible
        enough to accomodate many other language families with minimal changes.
      </p>

      <p className="mt-6">
        This was my first full-stack web application, and I learned a lot about web development in
        general through the process of making it. It is written primarily in PHP (using Laravel as
        a framework), and uses Vue.js to provide client-side interactivity. It includes an
        interface to allow contributors to add more entries to the database without having to deal
        directly with the database. I&apos;m currently in the process of overhauling the entire
        website with the benefit of more experience in developing and designing applications.
      </p>
    </>
  )
};

const tailwindScrollbar = {
  title: 'tailwind-scrollbar',
  imgSrc: tailwindLogo,
  links: {
    visit: 'https://tailwind-scrollbar-example.adoxography.repl.co/',
    source: 'https://github.com/adoxography/tailwind-scrollbar'
  },
  description: 'A cross-browser plugin for styling scrollbars using Tailwind CSS',
  technologies: [
    technologies.js,
    technologies.css,
    technologies.tailwind
  ],
  body: (
    <>
      <p>
        I developed <strong>tailwind-scrollbar</strong> while working on a different project that
        used Tailwind CSS. Styling scrollbars turned out to be a much more in-depth endeavor than I
        had expected; Firefox and Webkit both have very different APIs for their scrollbars. After
        I got it working, I extracted the plugin into a standalone repo.
      </p>

      <p className="mt-6">
        Since its original publishing, I&apos;ve enhanced the plugin by adding tests, support for
        dark mode, and rounded variants.
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
    technologies.react,
    technologies.electron,
    technologies.css,
    technologies.html,
    technologies.js
  ],
  body: (
    <>
      <p>
        I developed Countdown more out of personal necessity than anything else; I was working as a
        teacher, and needed a timer to give my students a better sense of how much time remained in
        work periods. All of the existing timer apps I tried either wouldn&apos;t work alongside a
        fullscreen app in MacOS, or were chained to the top of the screen &mdash; either making
        them too small to be readable, or blocking important information in that region of the
        screen. Being an avid user of &quot;floating&quot; MacOS apps
        like <a href="https://www.alfredapp.com/" target="_blank" rel="noopener noreferrer">Alfred</a>
        , I knew there had to be a way to achieve the sort of experience I was looking for.
      </p>

      <p className="mt-6">
        Objectively, the best implementation for this kind of app would be a native Swift app, but
        I since I don&apos;t know Swift and didn&apos;t have the time to go about learning it, I
        chose to write the app in React and embed it in Electron. It turns out that Electron has a
        convenient <code>setVisibleOnAllWorkspaces</code> method which, along with a hanful of
        other required settings, enable an app to float over full screen apps!
      </p>
    </>
  )
};

const streamlined = {
  title: 'Streamlined Genre',
  imgSrc: 'https://cdn.pixabay.com/photo/2014/12/14/10/26/light-567757_1280.jpg',
  links: {
    source: 'https://github.com/adoxography/streamlined-genre'
  },
  description: 'My master\'s project, classifying genre of spoken audio samples',
  technologies: [
    technologies.python,
    technologies.svm,
    technologies.openSmile,
    technologies.openXbow,
    technologies.scikitLearn
  ],
  body: (
    <>
      <p>
        This was my master&apos;s project in the CLMS program at the University of Washington,
        supervised by <a href="https://faculty.washington.edu/levow/" target="_blank" rel="noopener noreferrer">Gina-Anne Levow</a>
        . The goal was to classify audio samples of speech by genre; for example, as a discussion,
        a prayer, a folktale, etc. It was specifically designed for
        so-called <strong>low resource languages</strong>&mdash;that is, languages which do not
        have much available data to train popular learning models like neural networks.
      </p>

      <p className="mt-6">
        I used <code>openSMILE</code> to extract low-level features from the audio samples, and then
        compiled them into bags of audio words using <code>openXBOW</code>. Since neural networks
        are typically very poor at handling low-resource languages, I chose to use a support
        vector machine (SVM) as my classifier. I also investigated the feasibility of data
        augmentation, which involved writing a custom frequency filter to mask random frequencies
        out of the training data.
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
    technologies.js,
    technologies.vue,
    technologies.html,
    technologies.css,
    technologies.bulma
  ],
  body: (
    <>
      <p>
        This application was designed to expand on a simple <a href="https://docs.google.com/document/d/1S__G3fasIgUhkeCkbC91TXHmhOF_MgwdKarz80bsvFE/edit" target="_blank" rel="noopener noreferrer">unplugged activity</a> by <a href="https://canadaleraningcode.ca" target="_blank" rel="noopener noreferrer">Canada Learning Code</a>. I was concerned that the unplugged version was too trivial: it presented very little
        challenge, and didn&apos;t result in a shareable final
        product. <strong>Pixel drawing</strong> builds the same learning outcomes (sequence, loops)
        into an interactive platform: using a simple domain-specific language (DSL), users can
        practice basic coding concepts to produce artwork. (Old video game characters, as well as
        Minecraft characters, work particularly well in this medium.)
      </p>

      <p className="pt-6">
        In addition to effectively writing a simple programming language interpreter for this
        project, I also played around with JavaScript&apos;s <code>localStorage</code> to
        save pieces. Overall, this project was a lot of fun to make, and I keep meaning to go
        back to it to polish it up a little more.
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
    technologies.hpsg,
    technologies.linGo,
    technologies.tsdb,
    technologies.lkb,
    technologies.mrs
  ],
  body: (
    <>
      <p>
        This project was part of a course on <a href="http://courses.washington.edu/ling567/" target="_blank" rel="noopener noreferrer">Knowledge Engineering for NLP</a>,
        taught by <a href="http://faculty.washington.edu/ebender/" target="_blank" rel="noopener noreferrer">Emily Bender</a>.
        Along with <a href="https://www.linkedin.com/in/dwennermarko/" target="_blank" rel="noopener noreferrer">Drew Owens</a>,
        I engineered a grammar for <a href="https://glottolog.org/resource/languoid/id/sout2789" target="_blank" rel="noopener noreferrer">Dagaare</a>,
        a Niger-Congo language spoken in Ghana. Despite being primarily a linguistics course, there
        were a lot of programming concepts involved: in particular, we effectively used a form
        of <a href="https://en.wikipedia.org/wiki/Test-driven_development" target="_blank" rel="noopener noreferrer">Test-Driven Development</a>,
        via <code>[incr tsdb()]</code>, to guide our progress.
      </p>

      <p className="pt-6">
        An advantage to using HPSG and MRS, like we did, is that sentences can be translated
        directly between grammars with a very high degree of accuracy. The culmination of this
        course was a day where the class wired our various grammars together, along with
        a <a href="http://www.delph-in.net/erg/" target="_blank" rel="noopener noreferrer">grammar for English</a>,
        to translate sentences between the languages we&apos;d studied.
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
    technologies.java,
    technologies.python,
    technologies.jpype,
    technologies.beautifulSoup,
    technologies.stanfordParser,
    technologies.wikidata
  ],
  body: (
    <>
      <p>
        I worked on NEAM along with <a href="https://www.linkedin.com/in/vanessawoldengaracine" target="_blank" rel="noopener noreferrer">Sunny Woldenga-Racine</a> and <a href="https://www.linkedin.com/in/chrishaberland/" target="_blank" rel="noopener noreferrer">Chris Haberland</a> as
        part of a special topics course at the University of Washington taught by <a href="https://nelc.washington.edu/people/sarah-ketchley" target="_blank" rel="noopener noreferrer">Sarah Ketchley</a>.
        The goal of the course was to augment historical documents gathered by and for the <a href="http://www.emmabandrews.org/project/" target="_blank" rel="noopener noreferrer">Emma B. Andrews Diary Project</a>.
        We leveraged the <a href="https://nlp.stanford.edu/software/CRF-NER.html" target="_blank" rel="noopener noreferrer">Stanford Named Entity Recognizer</a> to
        tag named entities within Emma B. Andrews&apos; journals for cross-referencing.
      </p>

      <p className="mt-6">
        Among my larger contributions to the project was the use of <code>JPype</code> to
        bring the Stanford Parser into a Python setting. Our team as a whole was more
        comfortable with Python than Java, so this enabled us to work more cohesively on the
        project.
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
    technologies.react,
    technologies.js,
    technologies.html,
    technologies.css,
    technologies.tailwind
  ],
  body: (
    <>
      <p>
        The layout for this site was unashamedly taken from <a href="https://www.kevinpowell.co/" target="_blank" rel="noopener noreferrer">Kevin Powell</a>&apos;s
        excellent course, <a href="https://scrimba.com/learn/portfolio" target="_blank" rel="noopener noreferrer"><strong>Build and deploy a portfolio on Digital Ocean</strong></a>.
        I&apos;ve reimplemented it in React and Tailwind because&hellip;well, I just thought it
        would be fun! Most of the interactivity is original, though I&apos;ll let you judge for
        yourself whether it&apos;s effective or not. I also chose to deploy it over Github Pages
        through the use of a Github Action, instead of deploying it on Digital Ocean.
      </p>

      <p className="mt-6">
        I&apos;ve had a lot of fun making this site, and I hope you enjoy reading it!
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
    technologies.js,
    technologies.html,
    technologies.css,
    technologies.bem,
    technologies.express
  ],
  body: (
    <>
      <p>
        I wrote <strong>Betty Bot</strong> as a starter template for a JavaScript chatbot, based on
        an assignment I had in grad school. Learners simply need to complete three functions
        in <code>bot.js</code>, and they&apos;ll immediately have a functioning chatbot. I
        leveraged the ability of <code><a href="https://repl.it" target="_blank" rel="noopener noreferrer">repl.it</a></code> to
        run persistent webservers to make the project even more extensible: using the chatbot
        they had already created, learners can treat their bot as a Web API for incorporation into,
        e.g., a discord bot. Chatbots can also be combined; using this same idea of a chatbot as a
        Web API, I created an example &quot;<a href="https://repl.it/@GStill/ConversationHost" target="_blank" rel="noopener noreferrer">chatroom for chatbots</a>.&quot;
      </p>

      <p className="mt-6">
        Because the focus for this type of application is to learn JavaScript specifically, I
        wanted to prewrite all of the interface code, so that learners could have something that
        looks nice if they chose to share their project with others. To keep the code as accessible
        and hackable as possible, the interface is written in completely custom vanilla JavaScript
        and CSS.
      </p>
    </>
  )
};

const periodical = {
  title: 'Periodical',
  imgSrc: periodicalLogo,
  links: {
    visit: 'https://periodical-demo.herokuapp.com/',
    source: 'https://github.com/adoxography/periodical'
  },
  description: 'A simple blogging platform designed to be blissfully simple to use',
  technologies: [
    technologies.php,
    technologies.laravel,
    technologies.js,
    technologies.alpine,
    technologies.scss,
    technologies.bem,
    technologies.sql
  ],
  body: (
    <>
      <p>
        <strong>Periodical</strong> came about after a lot of not-so-subtle hinting from a family
        member that he&apos;d like to start a blog. While there are lots of fantastic blogging
        platforms already out there, few really cater to the demographic of people who really wish
        they could have written their blog on a typewriter and sent it via snailmail to all of their
        personal contacts instead of putting it on the internet. Knowing that I was going to have to
        be the &quot;tech support&quot; for any blogging software my family member used, I decided
        that it would be easiest for me to maintain something that I had written and knew inside and
        out.
      </p>

      <p className="mt-6">
        The philosophy of Periodical is that it should be completely intuitive
        for <em>anyone</em> to use, regardless of their experience with technology. With that in
        mind, it eschews &quot;advanced&quot; features available on some blogs, like layout tools,
        in favour of a simple text editor approach. It also handles sign-in strictly via social
        OAuth providers like Google and Facebook, to avoid the perennial &quot;I&apos;ve lost my
        password&quot; dance of my older relatives.
      </p>
    </>
  )
};

const umeGames = {
  title: 'ume.games',
  imgSrc: 'https://www.ume.games/fav-ume-32-32.png',
  links: {
    visit: 'https://ume.games'
  },
  description: 'Learn to use Unity - completely through the browser',
  technologies: [
    technologies.react,
    technologies.html,
    technologies.css,
    technologies.js,
    technologies.googleAnalytics,
    technologies.python,
    technologies.aws,
    technologies.unity,
    technologies.cSharp
  ],
  body: (
    <>
      <p>
        <strong>ume.games</strong> is an online community that enables kids to learn to use Unity
        through a web browser. High quality video lessons are provided to guide students through
        their journeys of becoming game designers and game developers.
      </p>

      <p className="mt-6">
        As the lead developer on ume.games, I implemented a complete redesign of its front end,
        and was responsible for hooking up its Google Analytics integrations. I also had an active
        role in designing and maintaining its back end services, and developed and maintained
        custom Unity plugins in C#. I designed and developed custom LiveOps solutions to ensure
        quality experiences for both students and instructors and set up CI/CD pipelines to
        streamline the developer experience.
      </p>

      <p className="mt-6">
        As a content developer and instructor, I created lesson plans and curricula for teaching
        coding through Unity using C# and Unity&apos;s visual scripting solution, Bolt, which were
        taught to students from 12 years of age to young adults. I actively instructed on the
        platform and trained new instructors to do the same.
      </p>
    </>
  )
};

const kInARow = {
  title: 'K-in-a-Row',
  imgSrc: kInARowLogo,
  links: {
    visit: 'https://adoxography.github.io/kinarow',
    source: 'https://github.com/adoxography/kinarow'
  },
  description: 'An implementation of an m, n, k-game that exposes an interface for user-created bot players',
  technologies: [
    technologies.html,
    technologies.css,
    technologies.js,
    technologies.bem,
    technologies.alpine,
    technologies.typescript
  ],
  body: (
    <>
      <p>
        A simple implementation of an m, n, k-game (the generalized version of Tic-Tac-Toe), where
        players are able to select any M, N, and K for their game. Move validation and winning and
        losing are handled through the interface.
      </p>

      <p className="mt-6">
        The twist to this project comes in its ability to communicate with a remote server which
        can act as a player - provided it exposes the correct API. Documentation on this API
        specification is given <a href="https://github.com/adoxography/kinarow/blob/main/README.md#creating-a-bot-player" target="_blank" rel="noopener noreferrer">in the project README</a>.
        I also created a reference implementation, called <a href="https://github.com/adoxography/kira" target="_blank" rel="noopener noreferrer"><strong>KIRA</strong></a>, in Typescript, which uses the <a href="https://en.wikipedia.org/wiki/Minimax" target="_blank" rel="noopener noreferrer">minimax</a> algorithm with <a href="https://en.wikipedia.org/wiki/Alpha%E2%80%93beta_pruning" target="_blank" rel="noopener noreferrer">alpha-beta pruning</a> to find optimal moves.
      </p>
    </>
  )
};

export default [
  umeGames,
  alglang,
  tailwindScrollbar,
  kInARow,
  countdown,
  streamlined,
  periodical,
  bettyBot,
  portfolio,
  pixels,
  dagaare,
  neam
];
