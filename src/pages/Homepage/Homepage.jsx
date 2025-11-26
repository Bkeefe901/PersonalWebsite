import style from './Homepage.module.css';
import { motion } from 'framer-motion';

export default function Homepage() {

  return (
    <div className={style.homeDiv}>
      <h1>Hi there, welcome to my website!</h1>
      <section>
        <motion.div
          className={style.one}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 2
          }}
        >
        </motion.div>
        <motion.div
          className={style.two}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, x: [-400, 20] }}
          transition={{
            duration: 2
          }}
        >
        </motion.div>
        <motion.div
          className={style.three}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, x: [-800, 40] }}
          transition={{
            duration: 2
          }}
        >
        </motion.div>
        <motion.img
          src="/images/ProfilePic2.png"
          alt=""
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0, 0, 0.1, 0.6, 1], x: [60, 60] }}
          transition={{
            duration: 6
          }}
        />
      </section>
    </div>
  )
}