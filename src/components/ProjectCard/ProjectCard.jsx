import style from './ProjectCard.module.css';

export default function ProjectCard({ className, children }) {
    
    return (
        <div className={className}>
            {children}
            <iframe src="https://gardentracker.onrender.com/" frameborder="5"></iframe>
        </div>
    )
}