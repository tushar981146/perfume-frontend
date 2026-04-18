import { Clock, Mail, MapPin, MessageSquare, Phone, Send } from "lucide-react";
import { useState } from "react";

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-[#f9f7f4] py-20 px-4 text-center">
        <h2 className="text-xs font-bold tracking-[0.3em] text-amber-800 uppercase mb-4">Get In Touch</h2>
        <h1 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6">Contact Us</h1>
        <p className="text-stone-500 max-w-xl mx-auto">Have a question about our scents or need help with an order? Our team is here to provide personalized assistance.</p>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-12">
            <div>
              <h3 className="text-xl font-serif text-stone-900 mb-6">Contact Details</h3>
              <div className="space-y-6">
                {[
                  { icon: <Mail size={20} />, label: "Email Us", value: "tushar21522@gmail.com" },
                  { icon: <Phone size={20} />, label: "Call Us", value: "91+ 9811467193" },
                  { icon: <MapPin size={20} />, label: "Visit Us", value: "Delhi, India" },
                  { icon: <Clock size={20} />, label: "Hours", value: "Mon - Sat: 10am - 8pm" }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="p-3 bg-stone-50 text-amber-800 rounded-lg">{item.icon}</div>
                    <div>
                      <p className="text-[10px] font-bold tracking-widest text-stone-400 uppercase">{item.label}</p>
                      <p className="text-stone-800 font-medium">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 bg-amber-50 rounded-2xl">
              <MessageSquare className="text-amber-800 mb-4" size={24} />
              <h4 className="font-serif text-lg text-stone-900 mb-2">Live Concierge</h4>
              <p className="text-sm text-stone-600 leading-relaxed mb-4">Need help finding your signature scent? Chat with our master perfumers in real-time.</p>
              <button className="text-sm font-bold text-amber-800 tracking-widest hover:underline uppercase">Start Chat</button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-12 rounded-3xl border border-stone-100 shadow-xl shadow-stone-100/50">
              <h3 className="text-2xl font-serif text-stone-900 mb-8">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold tracking-widest text-stone-400 uppercase">First Name</label>
                    <input type="text" required className="w-full px-4 py-3 bg-stone-50 border border-transparent rounded-xl focus:bg-white focus:border-stone-200 focus:outline-none transition-all" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold tracking-widest text-stone-400 uppercase">Last Name</label>
                    <input type="text" required className="w-full px-4 py-3 bg-stone-50 border border-transparent rounded-xl focus:bg-white focus:border-stone-200 focus:outline-none transition-all" placeholder="Doe" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold tracking-widest text-stone-400 uppercase">Email Address</label>
                  <input type="email" required className="w-full px-4 py-3 bg-stone-50 border border-transparent rounded-xl focus:bg-white focus:border-stone-200 focus:outline-none transition-all" placeholder="john@example.com" />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold tracking-widest text-stone-400 uppercase">Message</label>
                  <textarea rows={5} required className="w-full px-4 py-3 bg-stone-50 border border-transparent rounded-xl focus:bg-white focus:border-stone-200 focus:outline-none transition-all resize-none" placeholder="How can we help you today?"></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={submitted}
                  className={`w-full py-4 rounded-xl flex items-center justify-center gap-2 font-bold tracking-widest uppercase transition-all ${submitted ? 'bg-green-600 text-white' : 'bg-stone-900 text-white hover:bg-black'}`}
                >
                  {submitted ? (
                    <><Check size={18} /> Message Sent</>
                  ) : (
                    <><Send size={18} /> Send Message</>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default ContactPage;