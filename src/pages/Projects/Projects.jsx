import style from './Projects.module.css';
import { motion } from 'framer-motion';
import { useState } from 'react';


// Components
// import ProjectCard from '../../components/ProjectCard/ProjectCard';


export default function Projects() {
    const [card, setCard] = useState('');

    function gardenClick(e){
        e.stopPropagation();
        setCard('garden');
    }

    function todoClick(e){
        e.stopPropagation();
        setCard('todo');
    }

    function bjClick(e){
        e.stopPropagation();
        setCard('bj');
    }




    return (
        <div className={style.projectsDiv}>
            <header 
                className={style.header}
                onClick={() => setCard('')}
                >
                <h1>My Projects</h1>
            </header>
            <div 
                className={style.cardContainer}
                onClick={() => setCard('')}
                >
                <motion.div 
                    className={style.gardenCard}
                    onClick={gardenClick}
                    animate={{ height: card == 'garden' ? '70%' : '15%'}}
                    >
                    <h1>Garden Tracker</h1>
                    <iframe src="https://superbad.com/" frameborder="0"></iframe>
                </motion.div>
                <motion.div 
                    className={style.todoListCard}
                    onClick={todoClick}
                    animate={{ height: card == 'todo' ? '70%' : '15%'}}
                    >
                    <h1>To Do List</h1>
                    <iframe src="https://superbad.com/" frameborder="0"></iframe>
                </motion.div>
                <motion.div 
                    className={style.blackjackCard}
                    onClick={bjClick}
                    animate={{ height: card == 'bj' ? '70%' : '15%'}}
                    >
                    <h1>BlackJack</h1>
                    <iframe src="https://superbad.com/" frameborder="0"></iframe>
                </motion.div>
            </div>

        </div>
    )
}