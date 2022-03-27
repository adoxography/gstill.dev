import PropTypes from 'prop-types';

const Service = ({ title, children }) => (
  <div className="max-w-screen-sm my-0 mx-auto md:ml-8 mt-6 md:mt-0 first:ml-0">
    <h3 className="text-2xl font-semibold font-display">{title}</h3>
    <p className="leading-relaxed">
      {children}
    </p>
  </div>
);

Service.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

const Services = () => (
  <section className="bg-image-water py-20 px-8 bg-gray-300 text-gray-800 text-center bg-cover" id="services">
    <header>
      <h2 className="text-4xl font-semibold text-indigo-600 underline-after font-display font-semibold">
        What I do
      </h2>
    </header>

    <div className="mb-16 md:flex max-w-screen-lg mx-auto">
      <Service title="Development">
        I develop applications that incorporate natural language processing, as well as general
        full-stack web applications. My preferred languages are Ruby and Python, but I&apos;m
        comfortable working in a variety of others.
      </Service>

      <Service title="Education">
        I&apos;ve taught all ages, from kindergarten to seniors, about coding, computational
        thinking, and digital literacy. I&apos;ve taught in-person in regions across Canada,
        including Manitoba, Ontario, and Nunavut, as well as in online settings.
      </Service>

      <Service title="Linguistics">
        I have a lifelong fascination with language. I&apos;ve conducted research looking at
        Kapampangan, Dagaare, and the Algonquian family, with particular emphasis on syntax,
        phonology, and historical linguistics.
      </Service>
    </div>

    <a href="#work" className="inline-block py-2 px-10 bg-indigo-600 text-gray-100 uppercase tracking-wide font-semibold font-display transition-all duration-200 ease-in-out transform hover:scale-110">
      My work
    </a>
  </section>
);

export default Services;
