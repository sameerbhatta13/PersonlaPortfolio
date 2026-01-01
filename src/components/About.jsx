import React from 'react';
import developerImage from '../assets/sameerbhatta.jpg'
// import AboutImage from '../assets/sameerbhatta.jpg'



const skills = [
    { name: 'React.js', level: 85, icon: '⚛️' },
    { name: 'Node.js', level: 90, icon: '🟢' },
    { name: 'MongoDB', level: 85, icon: '🍃' },
    { name: 'TypeScript', level: 75, icon: '📘' },
    { name: 'Express.js', level: 88, icon: '🚀' },
];

const stats = [
    { value: '1+', label: 'Years Experience' },
    // { value: '3+', label: 'Projects Delivered' },
    // { value: '100%', label: 'Client Satisfaction' },
];

const About = () => {
    return (
        <section id="about" className="min-h-screen bg-background py-24">
            <div className="container mx-auto px-6 md:px-12 lg:px-20">
                {/* Section Header */}
                <div className="text-center mb-16 animate-fade-up">
                    <span className="text-primary font-medium text-sm tracking-widest uppercase mb-4 block">
                        Get to know me
                    </span>
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
                        About <span className="gradient-text">Me</span>
                    </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Image Section */}
                    <div className='bg-black'>
                        <div className="relative">
                            {/* Decorative elements */}
                            <div className="absolute -inset-4 gradient-bg rounded-2xl opacity-20 blur-xl" />
                            <div className="absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-primary rounded-tl-2xl" />
                            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-primary rounded-br-2xl" />

                            {/* Main image */}
                            <img
                                src={developerImage}
                                alt="Sameer Bhatta - Full Stack Developer"
                                className="relative w-full max-w-md mx-auto rounded-xl object-cover image-glow z-10"
                            />
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="space-y-8">
                        {/* Bio */}
                        <div className=''>
                            <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
                                Full Stack <span className="gradient-text">MERN Developer</span>
                            </h3>
                            <p >
                                I'm a passionate full-stack developer specializing in building exceptional
                                digital experiences. With expertise in the MERN stack, I craft scalable
                                web applications that combine clean code architecture with intuitive user
                                interfaces. I love turning complex problems into simple, beautiful solutions.
                            </p>
                        </div>

                        {/* Skills */}
                        <div >
                            <h4 className="font-display text-lg font-medium text-foreground">
                                Technical Expertise
                            </h4>
                            {skills.map((skill, index) => (
                                <div key={skill.name} className="group">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-foreground font-medium flex items-center gap-2">
                                            <span>{skill.icon}</span>
                                            {skill.name}
                                        </span>
                                        {/* <span className="text-primary font-semibold">{skill.level}%</span> */}
                                    </div>
                                    <div className="skill-bar">
                                        <div
                                            className="skill-bar-fill group-hover:shadow-[0_0_20px_hsl(172_66%_50%/0.5)]"
                                            style={{
                                                width: `${skill.level}%`,
                                                animationDelay: `${index * 0.1}s`
                                            }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Stats */}
                        <div>
                            {stats.map((stat) => (
                                <div key={stat.label} className="stat-card">
                                    <h4 className="font-display text-3xl font-bold gradient-text mb-1">
                                        {stat.value}
                                    </h4>
                                    <p className="text-muted-foreground text-sm">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default About;
