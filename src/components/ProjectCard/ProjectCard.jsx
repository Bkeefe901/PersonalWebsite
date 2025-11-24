import style from './ProjectCard.module.css';

export default function ProjectCard({ className, children }) {
    
    return (
        <div className={className}>
            {children}
            <iframe src="https://github.com/Bkeefe901" frameborder="0"></iframe>
        </div>
    )
}