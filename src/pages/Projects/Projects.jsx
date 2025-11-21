import style from './Projects.module.css';

// Components
import ProjectCard from '../../components/ProjectCard/ProjectCard';

export default function Projects() {


    return (
        <div className={style.projectsDiv}>
            <header className={style.header}>
                <h1>My Projects</h1>
            </header>
            <ProjectCard className={style.gardenCard}>
                <h1>Garden Tracker</h1>
            </ProjectCard>
            <ProjectCard className={style.todoListCard}>
                <h1>To Do List</h1>
            </ProjectCard>
            <ProjectCard className={style.blackjackCard}>
                <h1>BlackJack</h1>
            </ProjectCard>
            

        </div>
    )
}