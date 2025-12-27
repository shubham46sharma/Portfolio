import { useState } from 'react';
import type { FormEvent } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaPaperPlane, FaCheckCircle, FaTimes } from 'react-icons/fa';
import confetti from 'canvas-confetti';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      const response = await fetch("https://formspree.io/f/xnnzylkw", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setShowSuccess(true);
        form.reset();
        triggerConfetti();
      } else {
        alert("Oops! There was a problem submitting your form");
      }
    } catch (error) {
      alert("Oops! There was a problem submitting your form");
    } finally {
      setIsSubmitting(false);
    }
  };

  const triggerConfetti = () => {
    const duration = 3000;
    const end = Date.now() + duration;

    const colors = ['#1db954', '#ffffff'];

    (function frame() {
      const left = Date.now() > end;
      if (left) return;

      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors
      });

      requestAnimationFrame(frame);
    }());
  };

  return (
    <section id="contact" className="py-10 relative">
      <h2 className="text-2xl font-bold text-white mb-6">Connect</h2>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <p className="text-[var(--color-text-secondary)]">
             Feel free to reach out for collaborations or just a friendly hello.
          </p>
          
          <div className="flex flex-col gap-4">
             <a href="mailto:shubham11.cs@gmail.com" className="flex items-center gap-4 p-4 bg-[#282828] hover:bg-[#333] rounded-md transition-colors group">
                <div className="p-3 bg-[#121212] rounded-full text-[var(--color-primary)] group-hover:text-white transition-colors">
                   <FaEnvelope size={20} />
                </div>
                <div>
                   <h3 className="text-white font-bold text-sm">Email</h3>
                   <p className="text-[var(--color-text-secondary)] text-sm">shubham11.cs@gmail.com</p>
                </div>
             </a>

             <a href="https://www.linkedin.com/in/shubham46sharma/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-[#282828] hover:bg-[#333] rounded-md transition-colors group">
                <div className="p-3 bg-[#121212] rounded-full text-[#0077b5] group-hover:text-white transition-colors">
                   <FaLinkedin size={20} />
                </div>
                <div>
                   <h3 className="text-white font-bold text-sm">LinkedIn</h3>
                   <p className="text-[var(--color-text-secondary)] text-sm">Connect professionally</p>
                </div>
             </a>

             <a href="https://github.com/shubham46sharma" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-[#282828] hover:bg-[#333] rounded-md transition-colors group">
                <div className="p-3 bg-[#121212] rounded-full text-white">
                   <FaGithub size={20} />
                </div>
                <div>
                   <h3 className="text-white font-bold text-sm">GitHub</h3>
                   <p className="text-[var(--color-text-secondary)] text-sm">Check my code</p>
                </div>
             </a>
          </div>
        </div>

        <div className="bg-[#181818] p-6 rounded-lg shadow-lg relative overflow-hidden">
           <h3 className="text-white font-bold text-xl mb-4">Send a Message</h3>
           <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                 <label htmlFor="name" className="block text-sm font-medium text-[var(--color-text-secondary)] mb-1">Name</label>
                 <input type="text" id="name" name="name" required className="w-full bg-[#282828] text-white border border-transparent focus:border-[var(--color-primary)] rounded-md py-2 px-3 focus:outline-none transition-colors" placeholder="Your Name" />
              </div>
              <div>
                 <label htmlFor="email" className="block text-sm font-medium text-[var(--color-text-secondary)] mb-1">Email</label>
                 <input type="email" id="email" name="email" required className="w-full bg-[#282828] text-white border border-transparent focus:border-[var(--color-primary)] rounded-md py-2 px-3 focus:outline-none transition-colors" placeholder="your@email.com" />
              </div>
              <div>
                 <label htmlFor="message" className="block text-sm font-medium text-[var(--color-text-secondary)] mb-1">Message</label>
                 <textarea id="message" name="message" rows={4} required className="w-full bg-[#282828] text-white border border-transparent focus:border-[var(--color-primary)] rounded-md py-2 px-3 focus:outline-none transition-colors" placeholder="What's on your mind?"></textarea>
              </div>
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-black font-bold py-3 px-6 rounded-full transition-all hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                 {isSubmitting ? 'Sending...' : 'Send Message'} <FaPaperPlane size={14} />
              </button>
           </form>
        </div>
      </div>

      <AnimatePresence>
        {showSuccess && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-[#181818] p-8 rounded-xl shadow-2xl max-w-md w-full relative border border-[#333] text-center"
            >
              <button 
                onClick={() => setShowSuccess(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              >
                <FaTimes size={20} />
              </button>

              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-[var(--color-primary)]/20 rounded-full flex items-center justify-center">
                  <FaCheckCircle size={40} className="text-[var(--color-primary)]" />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
              <p className="text-[var(--color-text-secondary)] mb-6">
                Thanks for reaching out. I'll get back to you as soon as possible.
              </p>

              <button 
                onClick={() => setShowSuccess(false)}
                className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-black font-bold py-3 px-8 rounded-full transition-colors w-full"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
