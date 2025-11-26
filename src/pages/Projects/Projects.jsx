import style from './Projects.module.css';
import { motion } from 'framer-motion';
import { useState } from 'react';


// Components
// import ProjectCard from '../../components/ProjectCard/ProjectCard';


export default function Projects() {
    const [card, setCard] = useState('');

    function gardenClick(e) {
        e.stopPropagation();
        setCard('garden');
    }

    function todoClick(e) {
        e.stopPropagation();
        setCard('todo');
    }

    function bjClick(e) {
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
                    animate={{ height: card == 'garden' ? '70%' : '15%' }}
                >
                    <div className={style.descriptionDiv}>
                        <h1>Garden Tracker</h1>
                        <p>The Garden Tracker is a full stack web application that helps you track and care for your personal garden. It allows you to search through the database of plant information to find care tips on the plants in your garden. You can add plants directly from the search section or manually add plants to your garden dashboard. There it will show info on when you last watered and fertalized them, and give color-coded cues based on requirments of when you need to water or feed them next. It offers full Create, Read, Update and Delete functionality to the database. It was built using the MERN stack (MongoDB, Express, React and Node).</p>
                    </div>
                    <iframe src="https://gardentracker.onrender.com/" frameborder="0"></iframe>
                </motion.div>
                <motion.div
                    className={style.todoListCard}
                    onClick={todoClick}
                    animate={{ height: card == 'todo' ? '70%' : '15%' }}
                >
                    <div className={style.descriptionDiv}>
                        <h1>To-Do List</h1>
                        <p>The To Do List is a simple React application, built early on while learning react and the use of hooks such as useState and useReducer. It allows you to Create, Read, Update and Delete Items from a to-do list. It has no backend so the information is not kept on refresh.</p>
                    </div>
                    <iframe src="https://bradystodo.netlify.app/" frameborder="0"></iframe>
                </motion.div>
                <motion.div
                    className={style.blackjackCard}
                    onClick={bjClick}
                    animate={{ height: card == 'bj' ? '70%' : '15%' }}
                >
                    <div className={style.descriptionDiv}>
                        <h1>Blackjack</h1>
                        <p>The Blackjack app is a simple react application that connects to The Deck of Cards API to create a simple Blackjack game. It makes use of various hooks to manage state in order to keep track of the players and dealers hands.</p>
                    </div>
                    <iframe src="https://blackjackreactapp.netlify.app/" frameborder="0"></iframe>
                </motion.div>
            </div>

        </div>
    )
}