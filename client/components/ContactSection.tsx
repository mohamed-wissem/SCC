import { useState } from "react";
import { MapPin, Mail, Phone, Printer } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const offices = [
    {
      country: "INA",
      flag: "🇮🇩",
      address: "99 Th Oellink Street 12 As",
      city: "Pekanbaru, (CA.) 12333",
    },
    {
      country: "ITALY",
      flag: "🇮🇹",
      address: "102 Th San Lezamo Street",
      city: "Venice, IT TA, (EUR) 12300",
    },
    {
      country: "USA",
      flag: "🇺🇸",
      address: "99 Th Morgan Street 12 As",
      city: "Pekanbaru, (CA.) 12333",
    },
    {
      country: "AUSTRALIA",
      flag: "🇦🇺",
      address: "102 Th Pearl Street Venice, IT",
      city: "TA, (AUS) 12300",
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700">
        <div className="absolute inset-0 bg-circuit-pattern opacity-5"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Form */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                How Can we <span className="text-gradient">Help</span> you?
              </h2>
              <p className="text-gray-100 leading-relaxed">
                Contact nascetur ridiculus mus mauris vitae ultricies leo
                integer malesuada. Duis ut diam quam nulla porttitor massa id
                neque. Mauris nunc congue nisi vitae suscipit tellus mauris nunc
                pulvinar sapien et ligula.
              </p>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-white focus:ring-2 focus:ring-white/20 transition-all duration-200 backdrop-blur-sm"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-white focus:ring-2 focus:ring-white/20 transition-all duration-200 backdrop-blur-sm"
                  placeholder="Enter subject"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Your message (optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-white focus:ring-2 focus:ring-white/20 transition-all duration-200 resize-none backdrop-blur-sm"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium text-lg transition-colors duration-200"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Right Side - Office Locations */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Our Offices
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {offices.map((office, index) => (
                  <div
                    key={index}
                    className="service-card p-6 rounded-xl group hover:tech-glow transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">{office.flag}</span>
                      <h4 className="text-lg font-bold text-white">
                        {office.country}
                      </h4>
                    </div>

                    <div className="space-y-2 text-gray-300 text-sm">
                      <p>{office.address}</p>
                      <p>{office.city}</p>
                    </div>

                    {/* Hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-scc-blue-500/5 to-tech-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <div className="service-card p-6 rounded-xl">
              <h4 className="text-lg font-bold text-white mb-4">
                Contact Information
              </h4>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin
                    size={16}
                    className="text-scc-blue-500 flex-shrink-0"
                  />
                  <span className="text-sm">
                    Address: Centre El Mesk - D 5, 1073 - Mont Plaisir - Tunis - Tunisie
                  </span>
                </div>

                <div className="flex items-center gap-3 text-gray-300">
                  <Mail size={16} className="text-scc-blue-500 flex-shrink-0" />
                  <span className="text-sm">E-mail: scc@scc-tunisie.com</span>
                </div>

                <div className="flex items-center gap-3 text-gray-300">
                  <Phone
                    size={16}
                    className="text-scc-blue-500 flex-shrink-0"
                  />
                  <span className="text-sm">Phone: +216 71 951 877</span>
                </div>

                <div className="flex items-center gap-3 text-gray-300">
                  <Printer
                    size={16}
                    className="text-scc-blue-500 flex-shrink-0"
                  />
                  <span className="text-sm">Fax: +216 71 561 858</span>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-br from-scc-blue-500 to-electric-blue p-8 rounded-2xl text-center tech-glow">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-3xl">👩‍💼</span>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">
                We Take Care of Your Technology Focus.
              </h3>

              <p className="text-white/90 mb-6">
                Leave your Detail in Touch within 24 Hours
              </p>

              <button className="btn-secondary text-white px-8 py-3 rounded-lg font-medium">
                Get Started Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-20 right-20 w-32 h-32 border border-scc-blue-500/20 rounded-full animate-pulse-glow"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 border border-tech-cyan/20 rounded-full animate-pulse-glow"></div>

      {/* Floating tech elements */}
      <div className="absolute top-40 left-10 w-4 h-4 bg-tech-cyan rounded-full animate-pulse-glow"></div>
      <div className="absolute bottom-40 right-10 w-3 h-3 bg-scc-blue-500 rounded-full animate-pulse-glow"></div>
    </section>
  );
};

export default ContactSection;
