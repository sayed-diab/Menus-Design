import { motion } from 'framer-motion';

export default function Logos() {
  return (
    <div className="p-5">
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="mt-5 p-5 bg-gray-200 rounded"
      ></motion.div>
    </div>
  );
}
