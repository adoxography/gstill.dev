const PROGRAMMING_LANGUAGE = 'Programming Languages';
const FRAMEWORK = 'Frameworks';
const PACKAGE = 'Packages';
const OTHER = 'Other';

export const technologies = {
  alpine: {
    name: 'Alpine.js',
    url: 'https://github.com/alpinejs/alpine',
    category: FRAMEWORK
  },
  aws: {
    name: 'AWS',
    url: 'https://aws.amazon.com',
    category: OTHER
  },
  beautifulSoup: {
    name: 'BeautifulSoup',
    url: 'https://www.crummy.com/software/BeautifulSoup/bs4/doc/',
    category: PACKAGE
  },
  bem: {
    name: 'BEM',
    url: 'http://getbem.com/',
    category: OTHER
  },
  bulma: {
    name: 'Bulma',
    url: 'https://bulma.io',
    category: FRAMEWORK
  },
  cSharp: {
    name: 'C#',
    url: 'https://docs.microsoft.com/en-us/dotnet/csharp/',
    category: PROGRAMMING_LANGUAGE
  },
  css: {
    name: 'CSS',
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    category: PROGRAMMING_LANGUAGE
  },
  electron: {
    name: 'Electron',
    url: 'https://electronjs.org',
    category: FRAMEWORK
  },
  express: {
    name: 'Express.js',
    url: 'https://expressjs.com',
    category: FRAMEWORK
  },
  googleAnalytics: {
    name: 'Google Analytics',
    url: 'https://analytics.google.com',
    category: OTHER
  },
  hpsg: {
    name: 'HPSG',
    url: 'https://en.wikipedia.org/wiki/Head-driven_phrase_structure_grammar',
    category: OTHER
  },
  html: {
    name: 'HTML',
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    category: PROGRAMMING_LANGUAGE
  },
  java: {
    name: 'Java',
    url: 'https://java.com',
    category: PROGRAMMING_LANGUAGE
  },
  jpype: {
    name: 'JPype',
    url: 'https://jpype.readthedocs.io/en/latest/',
    category: PACKAGE
  },
  js: {
    name: 'JavaScript',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    category: PROGRAMMING_LANGUAGE
  },
  laravel: {
    name: 'Laravel',
    url: 'https://laravel.com',
    category: FRAMEWORK
  },
  linGo: {
    name: 'LinGo Grammar Matrix',
    url: 'http://matrix.ling.washington.edu/index.html',
    category: OTHER
  },
  lkb: {
    name: 'LKB',
    url: 'http://moin.delph-in.net/LkbTop',
    category: OTHER
  },
  mrs: {
    name: 'MRS',
    url: 'https://en.wikipedia.org/wiki/Minimal_recursion_semantics',
    category: OTHER
  },
  openSmile: {
    name: 'openSMILE',
    url: 'https://www.audeering.com/opensmile/',
    category: PACKAGE
  },
  openXbow: {
    name: 'openXBOW',
    url: 'https://github.com/openXBOW/openXBOW',
    category: PACKAGE
  },
  php: {
    name: 'PHP',
    url: 'https://php.net',
    category: PROGRAMMING_LANGUAGE
  },
  python: {
    name: 'Python',
    url: 'https://python.org',
    category: PROGRAMMING_LANGUAGE
  },
  react: {
    name: 'React',
    url: 'https://reactjs.org',
    category: FRAMEWORK
  },
  scikitLearn: {
    name: 'scikit-learn',
    url: 'https://scikit-learn.org/',
    category: PACKAGE
  },
  scss: {
    name: 'SCSS',
    url: 'https://sass-lang.com/',
    category: PROGRAMMING_LANGUAGE
  },
  stanfordParser: {
    name: 'Stanford Parser',
    url: 'https://nlp.stanford.edu/software/lex-parser.shtml',
    category: PACKAGE
  },
  sql: {
    name: 'SQL',
    url: 'https://en.wikipedia.org/wiki/SQL',
    category: PROGRAMMING_LANGUAGE
  },
  svm: {
    name: 'SVM',
    url: 'https://en.wikipedia.org/wiki/Support_vector_machine',
    category: OTHER
  },
  tailwind: {
    name: 'Tailwind',
    url: 'https://tailwindcss.com',
    category: FRAMEWORK
  },
  tsdb: {
    name: '[incr tsdb()]',
    url: 'http://www.delph-in.net/itsdb/',
    category: OTHER
  },
  typescript: {
    name: 'TypeScript',
    url: 'https://typescriptlang.org',
    category: PROGRAMMING_LANGUAGE
  },
  unity: {
    name: 'Unity',
    url: 'https://unity.com',
    category: FRAMEWORK
  },
  vue: {
    name: 'Vue.js',
    url: 'https://vuejs.org',
    category: FRAMEWORK
  },
  wikidata: {
    name: 'Wikidata',
    url: 'https://www.wikidata.org/',
    category: OTHER
  }
};

const categoryList = [
  PROGRAMMING_LANGUAGE,
  FRAMEWORK,
  PACKAGE,
  OTHER
];

const techList = Object.values(technologies);

export const categories = Object.fromEntries(
  categoryList.map(category => [category, techList.filter(tech => tech.category === category)])
);
