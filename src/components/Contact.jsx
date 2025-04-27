import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="my-10 text-center text-4xl"
      >
        Let's chop it up
      </motion.h2>

      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="my-4"
        >
          {CONTACT.address}
        </motion.p>

        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="my-4"
        >
          {CONTACT.phoneNo}
        </motion.p>

        <motion.a
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          href="#"
          className="border-b"
        >
          {CONTACT.email}
        </motion.a>
      </div>
    </div>
  );
};

export default Contact;