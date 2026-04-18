import { Check, Code2, Cpu, Database, Layers, Server } from "lucide-react";

const AboutPage = () => {
    
    const TECH_STACK = [
  {
    name: "MongoDB",
    role: "Database",
    description: "NoSQL database used for storing product catalogs, user profiles, and order history with high scalability.",
    icon: <Database className="w-6 h-6" />,
    color: "text-green-600"
  },
  {
    name: "Express.js",
    role: "Backend Framework",
    description: "Minimalist web framework for Node.js, providing robust routing and middleware for our RESTful API.",
    icon: <Server className="w-6 h-6" />,
    color: "text-stone-700"
  },
  {
    name: "React",
    role: "Frontend Library",
    description: "Component-based architecture utilizing Hooks and Context API for a seamless, reactive user interface.",
    icon: <Code2 className="w-6 h-6" />,
    color: "text-blue-500"
  },
  {
    name: "Node.js",
    role: "Runtime Environment",
    description: "Asynchronous event-driven JavaScript runtime used to build efficient and scalable network applications.",
    icon: <Cpu className="w-6 h-6" />,
    color: "text-green-500"
  }
];
    return (
  <div className="bg-white">
    {/* About Hero */}
    <section className="bg-stone-50 py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-xs font-bold tracking-[0.3em] text-amber-800 uppercase mb-4">Our Technology</h2>
        <h1 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6">Built with MERN Stack</h1>
        <p className="text-lg text-stone-500 leading-relaxed font-light">
          This digital boutique is powered by a modern Full-Stack architecture designed for 
          unparalleled performance, security, and a fluid user experience.
        </p>
      </div>
    </section>

    {/* Stack Grid */}
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {TECH_STACK.map((tech, i) => (
          <div key={i} className="group p-8 border border-stone-100 rounded-2xl hover:border-amber-200 transition-all duration-300 hover:shadow-xl hover:shadow-stone-100/50">
            <div className={`${tech.color} mb-6 transition-transform group-hover:scale-110 duration-300`}>
              {tech.icon}
            </div>
            <h3 className="text-xl font-serif text-stone-900 mb-2">{tech.name}</h3>
            <p className="text-[10px] font-bold tracking-widest text-amber-800 uppercase mb-4">{tech.role}</p>
            <p className="text-sm text-stone-500 leading-relaxed">
              {tech.description}
            </p>
          </div>
        ))}
      </div>
    </section>

    {/* Additional Details */}
    <section className="bg-stone-900 py-20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-serif mb-6">Beyond the Core Stack</h2>
            <p className="text-stone-400 mb-8 leading-relaxed">
              To achieve the premium look and feel of our perfume catalog, we integrated high-performance 
              styling and utility libraries that ensure the site looks perfect on every device.
            </p>
            <div className="space-y-4">
              {[
                { title: "Tailwind CSS", desc: "Utility-first styling for a custom, responsive design." },
                { title: "Lucide React", desc: "Clean, consistent iconography for professional UI." },
                { title: "Framermotion", desc: "Silky smooth animations and page transitions." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="mt-1"><Check size={16} className="text-amber-500" /></div>
                  <div>
                    <h4 className="font-bold text-sm tracking-wide">{item.title}</h4>
                    <p className="text-xs text-stone-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-stone-800 rounded-2xl flex items-center justify-center p-12 border border-stone-700">
               <Layers className="w-full h-full text-stone-700 opacity-50" />
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="w-24 h-24 bg-stone-700/50 rounded-lg flex items-center justify-center border border-stone-600 font-serif text-xl">M</div>
                    <div className="w-24 h-24 bg-stone-700/50 rounded-lg flex items-center justify-center border border-stone-600 font-serif text-xl">E</div>
                    <div className="w-24 h-24 bg-stone-700/50 rounded-lg flex items-center justify-center border border-stone-600 font-serif text-xl">R</div>
                    <div className="w-24 h-24 bg-stone-700/50 rounded-lg flex items-center justify-center border border-stone-600 font-serif text-xl">N</div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);
}
export default AboutPage;