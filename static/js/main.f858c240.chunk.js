(this["webpackJsonpgstill.dev"]=this["webpackJsonpgstill.dev"]||[]).push([[0],{16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(1),i=a(8),s=a.n(i),o=a(2),l=function(e){var t=e.className;return Object(n.jsx)("svg",{className:"fill-current ".concat(t),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 12.7 12.7","aria-hidden":"true",children:Object(n.jsx)("path",{d:"M.98 7.6C2.6 6.2 4.58 2.66 6.38.04c1.81 2.61 3.79 6.14 5.41 7.54h-1.6C8.56 5.91 7.83 4 6.39 1.86 4.94 4 4.2 5.92 2.58 7.59zm0 .53h1.6c1.63 2.43 2.45 0 3.8 1.63 1.36-1.62 2.18.8 3.8-1.63h1.61c-1.35 1.35-1.89 2.16-4.1 2.05-.76.1-1.03.65-1.3 1.19-.28-.54-.55-1.08-1.36-1.19-2.16.1-2.7-.7-4.05-2.05zm3.67 3.55h3.47c.1.32.27.76.43.98H4.22c.16-.22.33-.66.43-.98z"})})};l.defaultProps={className:""};var c=l,d=function(e){var t=e.href,a=e.children,r=e.onClick,i=e.hidden;return Object(n.jsx)("a",{className:"font-bold text-4xl text-gray-100 md:text-5xl",href:t,onClick:r,tabIndex:i?-1:0,"aria-hidden":i,children:a})};d.defaultProps={onClick:function(){},hidden:!1};var h=function(e){var t=e.open,a=e.onNavigate;return Object(n.jsx)("nav",{className:"fixed bg-gray-700 text-gray-100 top-0 bottom-0 right-0 left-0 z-40 transform transition-transform duration-300 ease-in-out ".concat(t?"":"translate-x-full"),children:Object(n.jsxs)("ul",{className:"flex flex-col h-full justify-evenly items-center",children:[Object(n.jsx)("li",{children:Object(n.jsx)(d,{href:"#home",onClick:a,hidden:!t,children:"Home"})}),Object(n.jsx)("li",{children:Object(n.jsx)(d,{href:"#services",onClick:a,hidden:!t,children:"My services"})}),Object(n.jsx)("li",{children:Object(n.jsx)(d,{href:"#about",onClick:a,hidden:!t,children:"About me"})}),Object(n.jsx)("li",{children:Object(n.jsx)(d,{href:"#work",onClick:a,hidden:!t,children:"My work"})}),Object(n.jsx)("li",{children:Object(n.jsx)(d,{href:"#footer",onClick:a,hidden:!t,children:"Contact me"})})]})})};h.defaultProps={open:!1,onNavigate:function(){}};var p=function(e){var t=e.isHidden,a=e.transparent,i=Object(r.useState)(!1),s=Object(o.a)(i,2),l=s[0],d=s[1];return Object(n.jsxs)("header",{className:"flex justify-between fixed w-full z-40 transition-all duration-500 ease-in-out ".concat(t?"opacity-0":"opacity-100"," ").concat(a?"p-4":"p-2 bg-gray-800"),children:[Object(n.jsx)("div",{className:"logo",children:Object(n.jsx)(c,{className:"w-8 fill-current"})}),Object(n.jsx)("button",{className:"p-2 z-50 ".concat(l?"nav-open":""),"aria-label":"toggle navigation",onClick:function(){return d(!l)},type:"button",children:Object(n.jsx)("span",{className:"hamburger"})}),Object(n.jsx)(h,{open:l,onNavigate:function(){return d(!1)}})]})};p.defaultProps={isHidden:!1,transparent:!1};var u=p,m=a.p+"static/media/profile.83470126.jpg",g={gridTemplateAreas:'"img title" "img subtitle"',gridTemplateColumns:"min-content max-content"},b={gridColumn:"-1/1",gridRow:"2"},f={gridArea:"img",minWidth:"250px"},j=function(e){var t=e.endSplashMode,a=e.setNavbarGhost,i=Object(r.useRef)(),s=Object(r.useState)(!1),l=Object(o.a)(s,2),c=l[0],d=l[1],h=Object(r.useState)(!1),p=Object(o.a)(h,2),u=p[0],j=p[1],x=Object(r.useState)(!1),w=Object(o.a)(x,2),y=w[0],v=w[1],O=Object(r.useState)(!0),k=Object(o.a)(O,2),S=k[0],N=k[1];return Object(r.useEffect)((function(){""===window.location.hash?setTimeout((function(){t(),d(!0)}),1500):(N(!1),d(!0),t())}),[t]),Object(r.useEffect)((function(){var e=new IntersectionObserver((function(t){Object(o.a)(t,1)[0].isIntersecting&&(j(!0),setTimeout((function(){return v(!0)}),500),e.disconnect())}),{threshold:.9});i.current&&e.observe(i.current)}),[i]),Object(r.useEffect)((function(){var e=new IntersectionObserver((function(e){var t=Object(o.a)(e,1)[0];return a(t.isIntersecting)}));i.current&&e.observe(i.current)}),[i,a]),Object(n.jsx)("section",{id:"home",className:"".concat(c?"h-114 md:h-96":"h-screen"," flex items-center ").concat(S?"transition-all duration-700 ease-in-out":""),ref:i,children:Object(n.jsxs)("div",{className:"relative md:grid my-0 mx-auto gap-4 md:w-min py-20 px-8 font-display font-light -z-10",style:g,children:[Object(n.jsxs)("h1",{className:"text-5xl md:text-6xl mb-1 leading-none",children:["Hi, I'm ",Object(n.jsx)("strong",{className:"block font-semibold",children:"Graham Still."})]}),Object(n.jsx)("p",{className:"md:self-start text-right relative bg-gradient-to-r from-indigo-700 to-indigo-600 mb-4 py-2 px-4 leading-none text-4xl md:-left-6 shadow text-indigo-100 w-fit md:w-full-plus-6 transform scale-x-0 transition-all duration-500 ease-in-out origin-left ".concat(u?"scale-x-100":""),style:b,children:"computational linguist"}),Object(n.jsx)("img",{src:m,alt:"Graham Still",className:"shadow-lg relative z-10 h-64 w-64 object-contain transform scale-y-0 transition-all duration-500 ease-in-out origin-top ".concat(y?"scale-y-100":""),style:f})]})})},x=function(e){var t=e.title,a=e.children;return Object(n.jsxs)("div",{className:"max-w-screen-sm my-0 mx-auto md:ml-8 mt-6 md:mt-0 first:ml-0",children:[Object(n.jsx)("h3",{className:"text-2xl font-semibold font-display",children:t}),Object(n.jsx)("p",{className:"leading-relaxed",children:a})]})},w=function(){return Object(n.jsxs)("section",{className:"bg-image-water py-20 px-8 bg-gray-300 text-gray-800 text-center bg-cover",id:"services",children:[Object(n.jsx)("header",{children:Object(n.jsx)("h2",{className:"text-4xl font-semibold text-indigo-600 underline-after font-display font-semibold",children:"What I do"})}),Object(n.jsxs)("div",{className:"mb-16 md:flex max-w-screen-lg mx-auto",children:[Object(n.jsx)(x,{title:"Development",children:"I develop applications that incorporate natural language processing, as well as general full-stack web applications. My preferred languages are Ruby and Python, but I'm comfortable working in a variety of others."}),Object(n.jsx)(x,{title:"Education",children:"I've taught all ages, from kindergarten to seniors, about coding, computational thinking, and digital literacy. I've taught in-person in regions across Canada, including Manitoba, Ontario, and Nunavut, as well as in online settings."}),Object(n.jsx)(x,{title:"Linguistics",children:"I have a lifelong fascination with language. I've conducted research looking at Kapampangan, Dagaare, and the Algonquian family, with particular emphasis on syntax, phonology, and historical linguistics."})]}),Object(n.jsx)("a",{href:"#work",className:"inline-block py-2 px-10 bg-indigo-600 text-gray-100 uppercase tracking-wide font-semibold font-display transition-all duration-200 ease-in-out transform hover:scale-110",children:"My work"})]})},y=a.p+"static/media/about_image.15f411ca.jpg",v={gridColumn:"1 / -1",gridRow:2},O={gridArea:"img"},k=function(){var e=Object(r.useRef)(),t=window.innerWidth>=768,a=Object(r.useState)(!t),i=Object(o.a)(a,2),s=i[0],l=i[1],c=Object(r.useState)(!t),d=Object(o.a)(c,2),h=d[0],p=d[1];return Object(r.useEffect)((function(){var t=new IntersectionObserver((function(e){Object(o.a)(e,1)[0].isIntersecting&&(l(!0),setTimeout((function(){return p(!0)}),500),t.disconnect())}),{threshold:1});e.current&&t.observe(e.current)}),[e]),Object(n.jsxs)("section",{id:"about",ref:e,className:"max-w-screen-lg mx-auto py-20 px-8 md:grid gap-x-8",style:{gridTemplateColumns:"1fr 200px",gridTemplateAreas:'"title img" "subtitle img" "text img"'},children:[Object(n.jsx)("h2",{className:"text-4xl mb-2 font-semibold font-display",style:{gridArea:"title"},children:"Who I am"}),Object(n.jsx)("p",{className:"text-2xl bg-gradient-to-l from-indigo-700 to-indigo-600 mb-4 py-1 px-4 relative -left-4 pl-4 shadow font-display md:w-full-plus-8 transform md:scale-x-0 origin-left ".concat(s?"md:scale-x-100":""," transition-all duration-500 ease-in-out"),style:v,children:"Computational linguist in Winnipeg"}),Object(n.jsxs)("div",{className:"leading-relaxed",style:{gridArea:"text"},children:[Object(n.jsx)("p",{children:"I'm a combination between a university-taught and a self-taught coder; I picked up a lot of theory while in university, and I've devoted countless hours to improving my skills since. I enjoy making tools that improve quality of life, whether that be my own or someone else's. I'm also deeply invested in training others to be literate about the technology that surrounds us, at a level that's approachable from their current state of understanding."}),Object(n.jsx)("p",{className:"mt-4",children:"When I'm not coding (which, honestly, is pretty unusual), I enjoy watching movies about time travel, practicing card magic, and writing with fountain pens."})]}),Object(n.jsx)("img",{src:y,alt:"Graham Still",className:"block max-w-full shadow-lg relative z-10 mt-6 md:mt-0 object-cover transform md:scale-y-0 origin-top transition-all duration-500 ease-in-out h-96 ".concat(h?"md:scale-y-100":""),style:O})]})},S=a.p+"static/media/robot.64b154a2.svg",N=a.p+"static/media/pixels.43d9c84c.png",I=a.p+"static/media/alglang.b4e4c09f.svg",C=a.p+"static/media/logo.348400b5.png",A=a.p+"static/media/periodical.c511b819.svg",M=a.p+"static/media/tailwind.2f6f3e1c.svg",T={title:"Database of Algonquian Language Structures",imgSrc:I,links:{visit:"https://preview.alglang.net",source:"https://github.com/alglang/alglang"},description:"A project to provide basic information about the sounds and grammar of the Algonquian languages",technologies:["PHP","Laravel","HTML","CSS","JavaScript","Vue.js","Alpine.js","SQL","Tailwind"],body:Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("p",{children:["I started developing the Database of Algonquian Language Structures (a.k.a. ",Object(n.jsx)("strong",{children:"alglang.net"}),") with ",Object(n.jsx)("a",{href:"https://home.cc.umanitoba.ca/~oxfordwr/",target:"_blank",rel:"noopener noreferrer",children:"Dr. Will Oxford"})," during the last year of my undergraduate degree at the University of Manitoba. Research on Algonquian linguistics \u2014 that is, the study of the largest language family native to North America \u2014 is notoriously difficult to access, even for linguists. Much of the existing research is tucked away in printed sources in obscure libraries, and written in such a way as to be almost indecipherable to all but experts in (specifically) Algonquian linguistics. The goal for the database was to make this information accessible to anyone with a computer."]}),Object(n.jsxs)("p",{className:"mt-6",children:["A big part of the project was organizing the data about Algonquian linguistics in such a way that it could be stored in a ",Object(n.jsx)("strong",{children:"relational database"})," (a topic about which I presented along with Will Oxford at the 49",Object(n.jsx)("sup",{children:"th"})," Algonquian Conference). The schema I developed fits the Algonquian family very well, but I believe it to be flexible enough to accomodate many other language families with minimal changes."]}),Object(n.jsx)("p",{className:"mt-6",children:"This was my first full-stack web application, and I learned a lot about web development in general through the process of making it. It is written primarily in PHP (using Laravel as a framework), and uses Vue.js to provide client-side interactivity. It includes an interface to allow contributors to add more entries to the database without having to deal directly with the database. I'm currently in the process of overhauling the entire website with the benefit of more experience in developing and designing applications."})]})},P={title:"tailwind-scrollbar",imgSrc:M,links:{visit:"https://tailwind-scrollbar-example.adoxography.repl.co/",source:"https://github.com/adoxography/tailwind-scrollbar"},description:"A cross-browser plugin for styling scrollbars using Tailwind CSS",technologies:["JavaScript","CSS","Tailwind"],body:Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("p",{children:["I developed ",Object(n.jsx)("strong",{children:"tailwind-scrollbar"})," while working on a different project that used Tailwind CSS. Styling scrollbars turned out to be a much more in-depth endeavor than I had expected; Firefox and Webkit both have very different APIs for their scrollbars. After I got it working, I extracted the plugin into a standalone repo."]}),Object(n.jsx)("p",{className:"mt-6",children:"Since its original publishing, I've enhanced the plugin by adding tests, support for dark mode, and rounded variants."})]})},_={title:"Countdown",imgSrc:"https://github.com/adoxography/countdown/blob/master/assets/icon.png?raw=true",links:{source:"https://github.com/adoxography/countdown"},description:"A simple, unobtrusive timer app for MacOS that can float over fullscreen windows",technologies:["React","Electron","CSS","HTML","JavaScript"],body:Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("p",{children:['I developed Countdown more out of personal necessity than anything else; I was working as a teacher, and needed a timer to give my students a better sense of how much time remained in work periods. All of the existing timer apps I tried either wouldn\'t work alongside a fullscreen app in MacOS, or were chained to the top of the screen \u2014 either making them too small to be readable, or blocking important information in that region of the screen. Being an avid user of "floating" MacOS apps like ',Object(n.jsx)("a",{href:"https://www.alfredapp.com/",target:"_blank",rel:"noopener noreferrer",children:"Alfred"}),", I knew there had to be a way to achieve the sort of experience I was looking for."]}),Object(n.jsxs)("p",{className:"mt-6",children:["Objectively, the best implementation for this kind of app would be a native Swift app, but I since I don't know Swift and didn't have the time to go about learning it, I chose to write the app in React and embed it in Electron. It turns out that Electron has a convenient ",Object(n.jsx)("code",{children:"setVisibleOnAllWorkspaces"})," method which, along with a hanful of other required settings, enable an app to float over full screen apps!"]})]})},L={title:"Streamlined Genre",imgSrc:"https://cdn.pixabay.com/photo/2014/12/14/10/26/light-567757_1280.jpg",links:{source:"https://github.com/adoxography/streamlined-genre"},description:"My master's project, classifying genre of spoken audio samples",technologies:["Python","SVM","openSMILE","openXBOW","scikit-learn"],body:Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("p",{children:["This was my master's project in the CLMS program at the University of Washington, supervised by ",Object(n.jsx)("a",{href:"https://faculty.washington.edu/levow/",target:"_blank",rel:"noopener noreferrer",children:"Gina-Anne Levow"}),". The goal was to classify audio samples of speech by genre; for example, as a discussion, a prayer, a folktale, etc. It was specifically designed for so-called ",Object(n.jsx)("strong",{children:"low resource languages"}),"\u2014that is, languages which do not have much available data to train popular learning models like neural networks."]}),Object(n.jsxs)("p",{className:"mt-6",children:["I used ",Object(n.jsx)("code",{children:"openSMILE"})," to extract low-level features from the audio samples, and then compiled them into bags of audio words using ",Object(n.jsx)("code",{children:"openXBOW"}),". Since neural networks are typically very poor at handling low-resource languages, I chose to use a support vector machine (SVM) as my classifier. I also investigated the feasibility of data augmentation, which involved writing a custom frequency filter to mask random frequencies out of the training data."]})]})},E={title:"Pixel drawing",imgSrc:N,links:{visit:"https://adoxography.github.io/pixel-drawing/",source:"https://github.com/adoxography/pixel-drawing"},description:"A web app for teaching computational thinking with art",technologies:["JavaScript","Vue.js","HTML","CSS","Bulma"],body:Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("p",{children:["This application was designed to expand on a simple ",Object(n.jsx)("a",{href:"https://docs.google.com/document/d/1S__G3fasIgUhkeCkbC91TXHmhOF_MgwdKarz80bsvFE/edit",target:"_blank",rel:"noopener noreferrer",children:"unplugged activity"})," by ",Object(n.jsx)("a",{href:"https://canadaleraningcode.ca",target:"_blank",rel:"noopener noreferrer",children:"Canada Learning Code"}),". I was concerned that the unplugged version was too trivial: it presented very little challenge, and didn't result in a shareable final product. ",Object(n.jsx)("strong",{children:"Pixel drawing"})," builds the same learning outcomes (sequence, loops) into an interactive platform: using a simple domain-specific language (DSL), users can practice basic coding concepts to produce artwork. (Old video game characters, as well as Minecraft characters, work particularly well in this medium.)"]}),Object(n.jsxs)("p",{className:"pt-6",children:["In addition to effectively writing a simple programming language interpreter for this project, I also played around with JavaScript's ",Object(n.jsx)("code",{children:"localStorage"})," to save pieces. Overall, this project was a lot of fun to make, and I keep meaning to go back to it to polish it up a little more."]})]})},W={title:"Dagaare Grammar",imgSrc:"https://upload.wikimedia.org/wikipedia/commons/b/b8/She-avm.png",links:{source:"https://github.com/adoxography/dagaare-grammar"},description:"A grammar for the Dagaare (a language spoken in Ghana), expressed using the HPSG framework",technologies:["HPSG","LinGo Grammar Matrix","[incr tsdb()]","LKB","MRS"],body:Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("p",{children:["This project was part of a course on ",Object(n.jsx)("a",{href:"http://courses.washington.edu/ling567/",target:"_blank",rel:"noopener noreferrer",children:"Knowledge Engineering for NLP"}),", taught by ",Object(n.jsx)("a",{href:"http://faculty.washington.edu/ebender/",target:"_blank",rel:"noopener noreferrer",children:"Emily Bender"}),". Along with ",Object(n.jsx)("a",{href:"https://www.linkedin.com/in/dwennermarko/",target:"_blank",rel:"noopener noreferrer",children:"Drew Owens"}),", I engineered a grammar for ",Object(n.jsx)("a",{href:"https://glottolog.org/resource/languoid/id/sout2789",target:"_blank",rel:"noopener noreferrer",children:"Dagaare"}),", a Niger-Congo language spoken in Ghana. Despite being primarily a linguistics course, there were a lot of programming concepts involved: in particular, we effectively used a form of ",Object(n.jsx)("a",{href:"https://en.wikipedia.org/wiki/Test-driven_development",target:"_blank",rel:"noopener noreferrer",children:"Test-Driven Development"}),", via ",Object(n.jsx)("code",{children:"[incr tsdb()]"}),", to guide our progress."]}),Object(n.jsxs)("p",{className:"pt-6",children:["An advantage to using HPSG and MRS, like we did, is that sentences can be translated directly between grammars with a very high degree of accuracy. The culmination of this course was a day where the class wired our various grammars together, along with a ",Object(n.jsx)("a",{href:"http://www.delph-in.net/erg/",target:"_blank",rel:"noopener noreferrer",children:"grammar for English"}),", to translate sentences between the languages we'd studied."]})]})},B={title:"NEAM",imgSrc:"https://i.pinimg.com/150x150/cd/78/23/cd782352d4a7031c375f5faeed2f8ea7.jpg",links:{source:"https://github.com/Linguistics575/neam"},description:"Automated named entity markup on historical texts",technologies:["Java","Python","JPype","BeautifulSoup","Stanford Parser","Wikidata"],body:Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("p",{children:["I worked on NEAM along with ",Object(n.jsx)("a",{href:"https://www.linkedin.com/in/vanessawoldengaracine",target:"_blank",rel:"noopener noreferrer",children:"Sunny Woldenga-Racine"})," and ",Object(n.jsx)("a",{href:"https://www.linkedin.com/in/chrishaberland/",target:"_blank",rel:"noopener noreferrer",children:"Chris Haberland"})," as part of a special topics course at the University of Washington taught by ",Object(n.jsx)("a",{href:"https://nelc.washington.edu/people/sarah-ketchley",target:"_blank",rel:"noopener noreferrer",children:"Sarah Ketchley"}),". The goal of the course was to augment historical documents gathered by and for the ",Object(n.jsx)("a",{href:"http://www.emmabandrews.org/project/",target:"_blank",rel:"noopener noreferrer",children:"Emma B. Andrews Diary Project"}),". We leveraged the ",Object(n.jsx)("a",{href:"https://nlp.stanford.edu/software/CRF-NER.html",target:"_blank",rel:"noopener noreferrer",children:"Stanford Named Entity Recognizer"})," to tag named entities within Emma B. Andrews' journals for cross-referencing."]}),Object(n.jsxs)("p",{className:"mt-6",children:["Among my larger contributions to the project was the use of ",Object(n.jsx)("code",{children:"JPype"})," to bring the Stanford Parser into a Python setting. Our team as a whole was more comfortable with Python than Java, so this enabled us to work more cohesively on the project."]})]})},z={title:"gstill.dev",imgSrc:C,links:{source:"https://github.com/adoxography/gstill.dev"},description:"The site you're looking at right now!",technologies:["React","JavaScript","HTML","CSS","Tailwind"],body:Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("p",{children:["The layout for this site was unashamedly taken from ",Object(n.jsx)("a",{href:"https://www.kevinpowell.co/",target:"_blank",rel:"noopener noreferrer",children:"Kevin Powell"}),"'s excellent course, ",Object(n.jsx)("a",{href:"https://scrimba.com/learn/portfolio",target:"_blank",rel:"noopener noreferrer",children:Object(n.jsx)("strong",{children:"Build and deploy a portfolio on Digital Ocean"})}),". I've reimplemented it in React and Tailwind because\u2026well, I just thought it would be fun! Most of the interactivity is original, though I'll let you judge for yourself whether it's effective or not. I also chose to deploy it over Github Pages through the use of a Github Action, instead of deploying it on Digital Ocean."]}),Object(n.jsx)("p",{className:"mt-6",children:"I've had a lot of fun making this site, and I hope you enjoy reading it!"})]})},G={title:"Betty Bot",imgSrc:S,links:{visit:"https://ChatbotTemplate.gstill.repl.co",source:"https://repl.it/@GStill/ChatbotTemplate#bot.js"},description:"A starting template for exploring JavaScript in a chatbot setting",technologies:["JavaScript","HTML","CSS","BEM","Express.js"],body:Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("p",{children:["I wrote ",Object(n.jsx)("strong",{children:"Betty Bot"})," as a starter template for a JavaScript chatbot, based on an assignment I had in grad school. Learners simply need to complete three functions in ",Object(n.jsx)("code",{children:"bot.js"}),", and they'll immediately have a functioning chatbot. I leveraged the ability of ",Object(n.jsx)("code",{children:Object(n.jsx)("a",{href:"https://repl.it",target:"_blank",rel:"noopener noreferrer",children:"repl.it"})}),' to run persistent webservers to make the project even more extensible: using the chatbot they had already created, learners can treat their bot as a Web API for incorporation into, e.g., a discord bot. Chatbots can also be combined; using this same idea of a chatbot as a Web API, I created an example "',Object(n.jsx)("a",{href:"https://repl.it/@GStill/ConversationHost",target:"_blank",rel:"noopener noreferrer",children:"chatroom for chatbots"}),'."']}),Object(n.jsx)("p",{className:"mt-6",children:"Because the focus for this type of application is to learn JavaScript specifically, I wanted to prewrite all of the interface code, so that learners could have something that looks nice if they chose to share their project with others. To keep the code as accessible and hackable as possible, the interface is written in completely custom vanilla JavaScript and CSS."})]})},H=[T,P,_,L,{title:"Periodical",imgSrc:A,links:{visit:"https://periodical-demo.herokuapp.com/",source:"https://github.com/adoxography/periodical"},description:"A simple blogging platform designed to be blissfully simple to use",technologies:["PHP","Laravel","JavaScript","Alpine.js","SCSS","BEM","SQL"],body:Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("p",{children:[Object(n.jsx)("strong",{children:"Periodical"}),' came about after a lot of not-so-subtle hinting from a family member that he\'d like to start a blog. While there are lots of fantastic blogging platforms already out there, few really cater to the demographic of people who really wish they could have written their blog on a typewriter and sent it via snailmail to all of their personal contacts instead of putting it on the internet. Knowing that I was going to have to be the "tech support" for any blogging software my family member used, I decided that it would be easiest for me to maintain something that I had written and knew inside and out.']}),Object(n.jsxs)("p",{className:"mt-6",children:["The philosophy of Periodical is that it should be completely intuitive for ",Object(n.jsx)("em",{children:"anyone"}),' to use, regardless of their experience with technology. With that in mind, it eschews "advanced" features available on some blogs, like layout tools, in favour of a simple text editor approach. It also handles sign-in strictly via social OAuth providers like Google and Facebook, to avoid the perennial "I\'ve lost my password" dance of my older relatives.']})]})},G,z,E,W,B],R={gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))"},J=function(e){var t=e.value,a=e.onClick,r=t.imgSrc,i=t.title,s=t.description;return Object(n.jsx)("div",{className:"bg-indigo-600 overflow-hidden relative",children:Object(n.jsxs)("button",{type:"button",className:"contents group focus:z-10 cursor-pointer",onClick:function(){return a(t)},children:[Object(n.jsx)("img",{src:r,alt:i,width:"800",height:"800",className:"transform-all duration-300 ease-in-out transform group-hover:scale-150 group-hover:opacity-25 group-focus:scale-150 group-focus:opacity-25 min-w-full h-full object-cover bg-gray-400"}),Object(n.jsxs)("div",{className:"absolute p-6 z-30 top-0 bottom-0 left-0 right-0 justify-center items-center transform  group-hover:translate-y-0 group-focus:translate-y-0 transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 group-focus:opacity-100 text-gray-100",children:[Object(n.jsx)("p",{className:"font-semibold font-display text-4xl leading-none mb-4",children:i}),Object(n.jsx)("p",{className:"text-lg",children:s})]})]})})};J.defaultProps={onClick:function(){}};var F=function(e){var t=e.openModal,a=function(e){t(e)};return Object(n.jsxs)("section",{id:"work",className:"bg-gray-300 text-gray-800 text-center py-20 px-8",children:[Object(n.jsxs)("header",{className:"font-display font-semibold",children:[Object(n.jsx)("h2",{className:"text-4xl",children:"My work"}),Object(n.jsx)("p",{className:"text-2xl text-indigo-600 mb-8",children:"Some projects I've developed"})]}),Object(n.jsx)("div",{className:"portfolio grid",style:R,children:H.map((function(e){return Object(n.jsx)(J,{value:e,onClick:a},e.title)}))})]})},D=function(e){var t=e.endSplashMode,a=e.setNavbarGhost,r=e.openModal;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(j,{endSplashMode:t,setNavbarGhost:a}),Object(n.jsx)(w,{}),Object(n.jsx)(k,{}),Object(n.jsx)(F,{openModal:r})]})},q=a(4),V=a.n(q),U=a(7),K=a(9),X=function(e){var t=new URLSearchParams;return Array.of.apply(Array,Object(K.a)(new FormData(e))).forEach((function(e){var a=Object(o.a)(e,2),n=a[0],r=a[1];return t.append(n,r)})),t},Q=function(){var e=Object(U.a)(V.a.mark((function e(t,a){return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{method:"POST",headers:{Accept:"application/json"},body:a});case 2:if(e.sent.ok){e.next=5;break}throw new Error("Mail sending failed");case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),Y=function(){var e=Object(r.useState)(!1),t=Object(o.a)(e,2),a=t[0],i=t[1],s=Object(r.useState)(""),l=Object(o.a)(s,2),c=l[0],d=l[1],h=function(){var e=Object(U.a)(V.a.mark((function e(t){return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),t.persist(),i(!0),e.prev=3,e.next=6,Q("https://formcarry.com/s/s8LKiVs3g3xJ",X(t.target));case 6:t.target.reset(),d("Thanks! I'll get back to you as soon as I can!"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),d("Uh oh...looks like something went wrong. Maybe try contacting me on social media?");case 13:return e.prev=13,i(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[3,10,13,16]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)("form",{acceptCharset:"UTF-8",className:"max-w-screen-sm mx-auto px-4 text-xl",onSubmit:h,children:[Object(n.jsx)("div",{className:"text-left",children:Object(n.jsxs)("label",{htmlFor:"email",className:"text-xs uppercase tracking-wide text-gray-400",children:["Your email",Object(n.jsx)("input",{id:"email",type:"email",name:"email",disabled:a,required:!0,className:"block w-full p-2 text-gray-900 bg-gray-200 shadow-inner disabled:bg-gray-500"})]})}),Object(n.jsx)("div",{className:"text-left mt-4",children:Object(n.jsxs)("label",{htmlFor:"contact-message",className:"text-xs uppercase tracking-wide text-gray-400",children:["Your message",Object(n.jsx)("textarea",{id:"contact-message",name:"message",disabled:a,required:!0,className:"block w-full p-2 text-gray-900 h-40 bg-gray-200 shadow-inner disabled:bg-gray-500"})]})}),Object(n.jsx)("input",{type:"text",name:"_gotcha",className:"opacity-0","aria-hidden":!0,tabIndex:"-1"}),Object(n.jsx)("p",{className:"text-yellow-400 transition-transform duration-200 ease-in-out transform ".concat(""===c?"scale-y-0":"scale-y-100"),children:c}),Object(n.jsx)("div",{className:"flex justify-center mt-6",children:Object(n.jsx)("button",{className:"bg-indigo-600 text-gray-100 uppercase tracking-wide font-display py-2 px-8 mt-4 transition-transform duration-200 ease-in-out transform ".concat(a?"cursor-default":"hover:scale-110"),disabled:a,type:"submit",children:a?Object(n.jsxs)("svg",{className:"animate-spin fill-current w-8 h-8",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",viewBox:"0 0 16 16",children:[Object(n.jsx)("path",{d:"M3 8c0-.19.011-.378.032-.563l-2.89-.939A8.085 8.085 0 00.001 8c0 2.3.971 4.374 2.526 5.833l1.786-2.458A4.982 4.982 0 013.001 8zm10 0a4.978 4.978 0 01-1.312 3.375l1.786 2.458A7.975 7.975 0 0016 8c0-.513-.049-1.015-.141-1.502l-2.89.939c.021.185.032.373.032.563zM9 3.1a5.01 5.01 0 013.351 2.435l2.89-.939A8.01 8.01 0 009 .062V3.1zM3.649 5.535A5.007 5.007 0 017 3.1V.062A8.005 8.005 0 00.759 4.596l2.89.939zm6.422 7.017C9.44 12.84 8.739 13 8 13s-1.44-.16-2.071-.448L4.143 15.01C5.287 15.641 6.601 16 8 16s2.713-.359 3.857-.99l-1.786-2.458z"}),Object(n.jsx)("path",{fill:"rgba(0, 0, 0, 0)",d:"M0 0h16v16H0z"})]}):"Send"})})]})},Z=function(e){var t=e.name,a=e.href,r=e.cls;return Object(n.jsx)("a",{href:a,target:"_blank",rel:"noopener noreferrer",className:"p-2","aria-label":t,children:Object(n.jsx)("i",{className:"fab ".concat(r)})})},$=function(){return Object(n.jsxs)("footer",{id:"footer",className:"bg-gray-900 text-center pt-20 pb-10",children:[Object(n.jsx)("p",{className:"text-xl mb-8 text-gray-300",children:"Want to get ahold of me? Send me a message!"}),Object(n.jsx)(Y,{}),Object(n.jsxs)("ul",{className:"flex justify-center mt-16 text-2xl",children:[Object(n.jsx)("li",{className:"mx-2",children:Object(n.jsx)(Z,{name:"Github",href:"https://github.com/adoxography",cls:"fa-github"})}),Object(n.jsx)("li",{className:"mx-2",children:Object(n.jsx)(Z,{name:"LinkedIn",href:"https://www.linkedin.com/in/graham-still-a4ab141a2/",cls:"fa-linkedin"})})]})]})},ee=function(e){var t=e.children,a=e.target,r=e.href,i=e.className,s=e.type,o=void 0===s?"button":s;return Object(n.jsx)("a",{href:r,target:a,rel:"_blank"===a?"noopener noreferrer":null,className:"".concat("button"===o?"inline-block py-2 px-10 bg-indigo-600 text-gray-100 uppercase tracking-wide font-semibold font-display transition-all duration-200 ease-in-out transform hover:scale-110":"underline hover:opacity-75"," ").concat(i),children:t})};ee.defaultProps={className:"",type:"button"};var te=ee,ae={Laravel:"https://laravel.com",PHP:"https://php.net",Python:"https://python.org","Vue.js":"https://vuejs.org",React:"https://reacjs.org","Alpine.js":"https://github.com/alpinejs/alpine",Tailwind:"https://tailwindcss.com",Electron:"https://electronjs.org",openSMILE:"https://www.audeering.com/opensmile/",openXBOW:"https://github.com/openXBOW/openXBOW","scikit-learn":"https://scikit-learn.org/",Bulma:"https://bulma.io","Stanford Parser":"https://nlp.stanford.edu/software/lex-parser.shtml",Wikidata:"https://www.wikidata.org/",LKB:"http://moin.delph-in.net/LkbTop","[incr tsdb()]":"http://www.delph-in.net/itsdb/","LinGo Grammar Matrix":"http://matrix.ling.washington.edu/index.html",HPSG:"https://en.wikipedia.org/wiki/Head-driven_phrase_structure_grammar",Java:"https://java.com","Express.js":"https://expressjs.com",HTML:"https://developer.mozilla.org/en-US/docs/Web/HTML",CSS:"https://developer.mozilla.org/en-US/docs/Web/CSS",JavaScript:"https://developer.mozilla.org/en-US/docs/Web/JavaScript",BEM:"http://getbem.com/",JPype:"https://jpype.readthedocs.io/en/latest/",BeautifulSoup:"https://www.crummy.com/software/BeautifulSoup/bs4/doc/",MRS:"https://en.wikipedia.org/wiki/Minimal_recursion_semantics",SVM:"https://en.wikipedia.org/wiki/Support_vector_machine",SCSS:"https://sass-lang.com/"},ne={gridTemplateAreas:'"img title" "img tags"',gridTemplateColumns:"min-content auto",gridTemplateRows:"max-content"},re={gridColumn:"-1/1",gridRow:"1"},ie={gridArea:"img",minWidth:"250px"},se=function(e){var t=e.name;return{}.hasOwnProperty.call(ae,t)?Object(n.jsx)("a",{className:"block m-1 px-3 py-1 bg-indigo-200 text-gray-900 rounded-full",href:ae[t],target:"_blank",rel:"noopener noreferrer",children:t}):Object(n.jsx)("p",{className:"m-1 px-3 py-1 bg-indigo-200 rounded-full",children:t})},oe=function(){return Object(n.jsx)("div",{className:"absolute flex w-full bottom-0 justify-center mb-8",children:Object(n.jsx)("svg",{className:"animate-bounce w-8 h-8 text-indigo-600",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",children:Object(n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M19 9l-7 7-7-7"})})})},le=function(e){var t=e.links,a=e.onIntersectChange,i=Object(r.useRef)();return Object(r.useEffect)((function(){var e=new IntersectionObserver((function(e){var t=Object(o.a)(e,1)[0];a(!t.isIntersecting)}));i.current&&e.observe(i.current)}),[a]),Object(n.jsxs)("div",{ref:i,className:"w-full flex justify-center items-baseline",children:[t&&t.visit&&Object(n.jsx)(te,{href:t.visit,target:"_blank",className:"mb-4 mt-8",children:"Visit"}),t&&t.source&&Object(n.jsx)(te,{href:t.source,target:"_blank",type:t.visit?"link":"button",className:"mb-4 mt-8 ml-6 first:ml-0",children:"View source"})]})};le.defaultProps={onIntersectChange:function(){},links:{}};var ce=function(e){var t=e.hide,a=e.value,i=e.isOpen,s=Object(r.useState)(!1),l=Object(o.a)(s,2),c=l[0],d=l[1],h=a.imgSrc,p=a.links,u=a.title,m=a.technologies,g=a.body,b="#";p&&(b=p.visit?p.visit:p.source);var f=Object(r.useRef)(),j=Object(r.useRef)(),x=Object(r.useState)(!1),w=Object(o.a)(x,2),y=w[0],v=w[1];return Object(r.useEffect)((function(){i?(v(!0),f.current&&f.current.focus(),j.current&&(j.current.scrollTop=0,j.current.scrollLeft=0)):v(!1)}),[i,j,f]),Object(n.jsxs)("div",{className:"fixed top-0 left-0 right-0 bottom-0 p-4 md:p-12 transition-all duration-500 ease-in-out ".concat(i?"opacity-100 z-50":"opacity-0 -z-10"),"aria-hidden":!i,children:[Object(n.jsx)("div",{"aria-hidden":"true",className:"bg-gray-900 bg-opacity-75 absolute top-0 right-0 bottom-0 left-0",onClick:t}),Object(n.jsxs)("div",{className:"relative bg-gray-200 text-gray-900 h-full rounded-lg pt-12 pb-10 shadow-xl transform scale-0 transition-all duration-500 ease-in-out ".concat(y?"scale-100":""," max-w-screen-lg mx-auto"),role:"dialog","aria-labelledby":"modal-title",children:[Object(n.jsx)("button",{type:"button",className:"absolute top-0 right-0 m-4 text-xl px-2 z-50",onClick:t,ref:f,"aria-label":"Close",children:"X"}),Object(n.jsxs)("article",{className:"h-full overflow-y-auto px-4 md:px-8 lg:p-12",ref:j,children:[Object(n.jsxs)("header",{className:"md:grid w-fit mx-auto",style:ne,children:[Object(n.jsx)("img",{src:h,className:"w-48 h-48 mx-auto mb-4 shadow-lg relative z-10 h-64 bg-gray-100 object-cover",style:ie,alt:"".concat(u," logo")}),Object(n.jsx)("p",{className:"font-display text-3xl lg:text-4xl md:self-start relative md:-left-6 md:w-full-plus-6 md:mt-12 md:pr-6 bg-indigo-600 md:pl-72 shadow text-center md:text-left",style:re,children:Object(n.jsx)("a",{id:"modal-title",href:b,target:"_blank",rel:"noopener noreferrer",className:"text-indigo-100",children:u})}),Object(n.jsx)("ul",{className:"flex max-w-screen-sm flex-wrap self-start md:ml-2 mt-2 justify-center md:justify-start",children:m&&m.map((function(e){return Object(n.jsx)("li",{children:Object(n.jsx)(se,{name:e})},"".concat(u,"-").concat(e))}))})]}),Object(n.jsx)("div",{className:"leading-relaxed md:leading-loose text-lg mt-8",children:g}),Object(n.jsx)(le,{links:p,onIntersectChange:d})]}),c&&Object(n.jsx)(oe,{})]})]})};ce.defaultProps={hide:function(){},isOpen:!1};var de=ce,he=function(){var e=Object(r.useState)(!0),t=Object(o.a)(e,2),a=t[0],i=t[1],s=Object(r.useState)(!1),l=Object(o.a)(s,2),c=l[0],d=l[1],h=Object(r.useState)(!0),p=Object(o.a)(h,2),m=p[0],g=p[1],b=Object(r.useState)({}),f=Object(o.a)(b,2),j=f[0],x=f[1],w=Object(r.useState)(!1),y=Object(o.a)(w,2),v=y[0],O=y[1];return Object(n.jsxs)("div",{className:"scrollbar scrollbar-thumb-gray-600 scrollbar-track-gray-800 h-screen ".concat(c?"overflow-auto":"overflow-hidden"),style:{scrollBehavior:"smooth"},children:[Object(n.jsx)(u,{transparent:m,isHidden:a}),Object(n.jsx)(D,{endSplashMode:function(){i(!1),d(!0)},setNavbarGhost:g,openModal:function(e){O(!0),x(e)}}),Object(n.jsx)(de,{value:j,isOpen:v,hide:function(){return O(!1)}}),Object(n.jsx)($,{})]})};a(16);s.a.render(Object(n.jsx)(he,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.f858c240.chunk.js.map