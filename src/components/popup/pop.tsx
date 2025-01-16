import { AnimatePresence, motion } from "framer-motion";
import { MessageSquare, Send, Code, Palette, Globe } from "lucide-react";
import { useState } from "react";


export const Contacts = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="grid place-content-center">
      <button
        onClick={() => setIsOpen(true)}
        className="group relative px-8 py-4 font-medium bg-[#219EBC] text-[#fff] rounded-lg w-fit transition-all shadow-[3px_3px_0px_#023047] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
      >
        <div className="relative z-10 flex items-center gap-2">
          <MessageSquare className="w-5 h-5 group-hover:-rotate-12 transition-transform duration-300" />
          <span>Contact Us</span>
        </div>
      </button>
      <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export const Conversation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="grid place-content-center">
      <motion.div
        initial={{ scale: 0.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <button
          onClick={() => setIsOpen(true)}
          className="group relative px-8 py-4 font-medium bg-[#219EBC] text-[#fff] rounded-lg w-fit transition-all shadow-[3px_3px_0px_#023047] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
        >
          <div className="relative z-10 flex items-center gap-2">
            <MessageSquare className="w-5 h-5 group-hover:-rotate-12 transition-transform duration-300" />
            <span>Start a Project</span>
          </div>
        </button>
      </motion.div>
      <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

const SpringModal = ({ isOpen, setIsOpen }: any) => {
  // const [selectedService, setSelectedService] = useState("");

  // const services = [
  //   {
  //     id: "web",
  //     icon: <Globe className="w-5 h-5" />,
  //     label: "Web Development",
  //   },
  //   {
  //     id: "design",
  //     icon: <Palette className="w-5 h-5" />,
  //     label: "UI/UX Design",
  //   },
  //   {
  //     id: "code",
  //     icon: <Code className="w-5 h-5" />,
  //     label: "Custom Solutions",
  //   },
  // ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="bg-[#023047]/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-[#023047] text-[#8ECAE6] p-8 rounded-2xl w-full max-w-lg shadow-2xl cursor-default relative"
          >
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-center mb-2 text-[#219EBC] ">
                Let's Chat!👋
              </h3>
              <p className="text-center mb-6">
                Transform your digital presence with our expertise
              </p>

            {/* <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3">
                  Select Your Service
                </h4>
                <div className="grid grid-cols-3 gap-3">
                  {services.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => setSelectedService(service.id)}
                      className={`p-3 rounded-xl border transition-all ${
                        selectedService === service.id
                          ? "border-[#219EBC] bg-[#219EBC]/10 text-white"
                          : "border-[#219EBC]/30 hover:border-[#219EBC]"
                      }`}
                    >
                      <div className="flex flex-col items-center gap-2 text-sm">
                        {service.icon}
                        {service.label}
                      </div>
                    </button>
                  ))}
                </div>
            </div> */}

              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-[#023047] border border-[#219EBC]/30 focus:border-[#219EBC] focus:outline-none focus:ring-1 focus:ring-[#219EBC] placeholder:text-[#8ECAE6]/50 transition-colors"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-[#023047] border border-[#219EBC]/30 focus:border-[#219EBC] focus:outline-none focus:ring-1 focus:ring-[#219EBC] placeholder:text-[#8ECAE6]/50 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <input
                    type="text"
                    name="project"
                    placeholder="Project Name"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-[#023047] border border-[#219EBC]/30 focus:border-[#219EBC] focus:outline-none focus:ring-1 focus:ring-[#219EBC] placeholder:text-[#8ECAE6]/50 transition-colors"
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    placeholder="Tell us about your project goals and requirements..."
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-[#023047] border border-[#219EBC]/30 focus:border-[#219EBC] focus:outline-none focus:ring-1 focus:ring-[#219EBC] placeholder:text-[#8ECAE6]/50 transition-colors"
                  />
                </div>

                <div className="flex gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="bg-transparent hover:bg-[#219EBC]/10 transition-colors text-[#fff] font-semibold w-1/3 py-3 rounded-lg border border-[#219EBC]/30"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-[#219EBC] hover:opacity-90 transition-opacity text-[#fff] font-semibold w-2/3 py-3 rounded-lg flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Conversation;
