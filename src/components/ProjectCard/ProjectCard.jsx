import style from './ProjectCard.module.css';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ProjectCard({ className, children }) {
    const [isBig, setIsBig] = useState(false);

    function handleClick(e){
        e.stopPropagation();
        setIsBig((prev) => !prev);
    }
    
    return (
        <motion.div 
            className={className}
            animate={{ height: isBig ? '70%' : '15%' }}  
            onClick={handleClick} 
        >
            {children}
            <iframe src="https://github.com/Bkeefe901" frameborder="0"></iframe>
        </motion.div>
    )
}