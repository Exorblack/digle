import { AnimatePresence, motion } from "framer-motion";
import { MessageSquare, Send, Code, Palette, Globe, Loader, Megaphone } from "lucide-react";
import { useState } from "react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

export const Contacts = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="group relative px-8 py-4 font-medium bg-[#1a535c] text-[#fff] rounded-lg w-fit transition-all shadow-[3px_3px_0px_#000] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] cursor-pointer"
      >
        <div className="relative z-10 flex items-center gap-2">
          <MessageSquare className="w-5 h-5 group-hover:-rotate-12 transition-transform duration-300" />
          <span>Contact Us</span>
        </div>
      </button>
      <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
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
          className="group relative px-8 py-4 font-medium bg-[#ecf39e] text-[#000] rounded-lg w-fit transition-all shadow-[3px_3px_0px_#000] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] cursor-pointer"
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

interface open {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const formSchema = z.object({
  name: z.string().min(3, "Name is required"),
  email: z.string().email("Invalid email address"),
  projectname: z.string().min(3, "Project name is required"),
  message: z.string().min(10, "Message is required"),
  service: z.string().min(1, "Please select a service"),
});


const SpringModal = ({ isOpen, setIsOpen }:open) => {
const [loading, setLoading] = useState(false);  
type tty = z.infer<typeof formSchema>;
const {
  register,
  handleSubmit,
  setValue,
  watch,
  formState: { errors },
} = useForm<tty>({
  resolver: zodResolver(formSchema),
  defaultValues:{
    service:"",
  }
});
const selectedService = watch("service");

const onSubmit = async (data: tty) => {
  setLoading(true);
  const opt = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: data.name,
      email: data.email,
      projectname: data.projectname,
      message: data.message,
      service: data.service,
    }),
  };
  const res = await fetch("/api/send", opt);
  setLoading(false);
  if (res.ok) {
    toast.success(
      "Thank you for reaching out to us! We'll get back to you as soon as possible.",
      {
        duration: 6000,
      }
    );
  } else {
    toast.error("some thing went wronge", {
      duration: 6000,
    });
  }
};

  const services = [
    {
      id: "design",
      icon: <Palette className="w-5 h-5" />,
      label: "Web Design",
    },
    {
      id: "web",
      icon: <Code className="w-5 h-5" />,
      label: "Web Development",
    },
    {
      id: "Brand",
      icon: <Megaphone className="w-5 h-5" />,
      label: "Branding",
    },
    {
      id: "code",
      icon: <Globe className="w-5 h-5" />,
      label: "Custom Solutions",
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="bg-[#023047]/50 backdrop-blur-lg p-8 fixed inset-0 z-50 grid place-items-center"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-[#023047] text-[#8ECAE6] p-8 rounded-2xl w-full max-w-sm sm:max-w-lg shadow-2xl cursor-default relative"
          >
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-center mb-2 text-[#219EBC] ">
                Hello!👋
              </h3>
              <p className="text-center mb-6">
                Let&apos;s Play with Your Ideas and Turn it into Reality
              </p>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3">
                  Select Your Service
                </h4>
                <div className="grid grid-cols-4 gap-3">
                  {services.map((service) => (
                    <button
                      key={service.label}
                      onClick={() =>
                        setValue("service", service.label, {
                          shouldValidate: true,
                        })
                      }
                      className={`p-3 rounded-xl border transition-all cursor-pointer ${
                        selectedService === service.label
                          ? "border-[#219EBC] bg-[#219EBC]/10 text-white"
                          : "border-[#219EBC]/30 hover:border-[#219EBC]"
                      }`}
                    >
                      <div className="flex flex-col items-center gap-2 text-[0.5rem] md:text-sm">
                        {service.icon}
                        {service.label}
                      </div>
                    </button>
                  ))}
                </div>
                {errors.service && (
                  <span className="text-red-500 text-xs">
                    {errors.service.message}
                  </span>
                )}
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <input
                      {...register("name")}
                      type="text"
                      placeholder="Name"
                      className="w-full px-4 py-3 rounded-lg bg-[#023047] border border-[#219EBC]/30 focus:border-[#219EBC] focus:outline-hidden focus:ring-1 focus:ring-[#219EBC] placeholder:text-[#8ECAE6]/50 transition-colors"
                    />
                    {errors.name && (
                      <span className="text-red-500 text-xs">
                        {errors.name.message}
                      </span>
                    )}
                  </div>
                  <div>
                    <input
                      {...register("email")}
                      type="email"
                      placeholder="Email"
                      className="w-full px-4 py-3 rounded-lg bg-[#023047] border border-[#219EBC]/30 focus:border-[#219EBC] focus:outline-hidden focus:ring-1 focus:ring-[#219EBC] placeholder:text-[#8ECAE6]/50 transition-colors"
                    />
                    {errors.email && (
                      <span className="text-red-500 text-xs">
                        {errors.email.message}
                      </span>
                    )}
                  </div>
                </div>

                <div>
                  <input
                    {...register("projectname")}
                    type="text"
                    placeholder="Project Name"
                    className="w-full px-4 py-3 rounded-lg bg-[#023047] border border-[#219EBC]/30 focus:border-[#219EBC] focus:outline-hidden focus:ring-1 focus:ring-[#219EBC] placeholder:text-[#8ECAE6]/50 transition-colors"
                  />
                  {errors.projectname && (
                    <span className="text-red-500 text-xs">
                      {errors.projectname.message}
                    </span>
                  )}
                </div>

                <div>
                  <textarea
                    {...register("message")}
                    placeholder="Tell us about your project..."
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-[#023047] border border-[#219EBC]/30 focus:border-[#219EBC] focus:outline-hidden focus:ring-1 focus:ring-[#219EBC] placeholder:text-[#8ECAE6]/50 transition-colors resize-none"
                  />
                  {errors.message && (
                    <span className="text-red-500 text-xs">
                      {errors.message.message}
                    </span>
                  )}
                </div>

                <div className="flex gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="bg-transparent hover:bg-[#219EBC]/10 transition-colors text-[#fff] font-semibold w-1/3 py-3 rounded-lg border border-[#219EBC]/30 cursor-pointer"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="bg-[#219EBC] hover:opacity-90 transition-opacity text-[#fff] font-semibold w-2/3 py-3 rounded-lg flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {loading ? (
                      <Loader className="w-5 h-5 animate-spin" />
                    ) : (
                      <Send className="w-5 h-5" />
                    )}
                    {loading ? "Sending.." : "Submit"}
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
