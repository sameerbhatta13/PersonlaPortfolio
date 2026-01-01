import { ExternalLink, Github, Layers } from 'lucide-react';

const projects = [
    {
        id: 1,
        name: 'ReactNative-CropDisease Detector',
        description: 'A mobile-based crop disease detection app that uses machine learning to identify plant diseases from images and provides treatment recommendations to farmers.',
        technologies: ['React Native', 'Node.js', 'MongoDB', 'Express', 'Fast Api'],
        image: '/plant.jpeg',
        github: 'https://github.com/sameerbhatta13/ReactNative-CropDisease',
        live: '#'
    },
    {
        id: 2,
        name: 'E-Commerce Platform',
        description: 'A full-stack e-commerce platform featuring product listings, cart and checkout flow, secure payments, and an admin dashboard for managing orders and inventory.',
        technologies: ['React', 'Redux', 'Node.js', 'Stripe'],
        image: '/ecommerceImg.png',
        github: 'https://github.com/sameerbhatta13',
        live: '#'
    },
    {
        id: 3,
        name: 'Image editor',
        description: 'A web-based image editing application that allows users to upload, crop, adjust, and preview images in real time using an interactive canvas interface.',
        technologies: ['Three.js', 'Firebase', 'JWT', 'React.js'],
        image: '/photifyimg.png',
        github: 'https://github.com/sameerbhatta13',
        live: '#'
    },
    {
        id: 4,
        name: 'Lead Management System',
        description: 'A CRM-based lead management system designed to track leads, manage customer data, and visualize sales performance through interactive dashboards and charts.',
        technologies: ['React', 'Express', 'PostgreSQL', 'Chart.js'],
        image: '/dashboard.png',
        github: 'https://github.com/sameerbhatta13',
        live: '#'
    },
];

const Projects = () => {
    return (
        <section className="relative py-24 bg-background overflow-hidden" id="projects">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16 animate-fadeUp">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                        <Layers className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-primary">My Work</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                        Featured <span className="text-gradient">Projects</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        A showcase some of my recent work, demonstrating expertise in full-stack development
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className="group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500 animate-fadeUp"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Project Image */}
                            <div className="relative h-56 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />

                                {/* Overlay Actions */}
                                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/60 backdrop-blur-sm">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 rounded-full bg-card border border-border hover:border-primary hover:text-primary transition-all duration-300 hover:scale-110"
                                    >
                                        <Github className="w-5 h-5" />
                                    </a>
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 rounded-full bg-card border border-border hover:border-primary hover:text-primary transition-all duration-300 hover:scale-110"
                                    >
                                        <ExternalLink className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>

                            {/* Project Info */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                                    {project.name}
                                </h3>
                                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                                    {project.description}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Glow Effect */}
                            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                <div className="absolute inset-0 rounded-2xl shadow-glow" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Button */}
                <div className="text-center mt-12 animate-fadeUp" style={{ animationDelay: '400ms' }}>
                    <a
                        href="https://github.com/sameerbhatta13"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold hover:shadow-glow transition-all duration-300 hover:scale-105"
                    >
                        <Github className="w-5 h-5" />
                        View All Projects
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
