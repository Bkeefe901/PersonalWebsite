import style from './Contact.module.css';

export default function Contact() {

    return (
        <>
            <h1 className={style.title}>My Name is Brady Keefe</h1>
            <div className={style.contactMain}>
                <img src="/images/ProfilePic.png" alt="Profile Pic" />
                <article>
                    {/* <h1>My Name is Brady Keefe</h1> */}
                    <p>I've been passionate about technology for most of my life, but for years I explored another craft first—fine dining. In 2017, I moved from Denver to New York City to work in Michelin-starred kitchens and push myself creatively. It was an incredible experience, but after nearly a decade in the industry, I realized that my true passion had always been tech.
                    </p>

                    <p>
                        That realization pushed me to make a major pivot into software engineering. I recently graduated from the Per Scholas Software Engineering program, and I'm now fully committed to building a career in this field. I'm still early in my journey, but I'm learning every day, sharpening my skills, and continually pushing myself to grow.
                    </p>

                    <p> Below you’ll find links to connect with me or check out my work. Let’s build something great together. </p>
                    <ul>
                        <li><a href="https://www.linkedin.com/in/brady-keefe901/">LinkedIn</a></li>
                        <li><a href="https://github.com/Bkeefe901">Github</a></li>
                        <li><a href=""></a></li>
                        <li><a href=""></a></li>
                    </ul>
                </article>
            </div>
        </>
    )
}