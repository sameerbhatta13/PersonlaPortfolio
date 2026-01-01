import { Code, Smartphone, Layout, Server, Layers, Box } from 'lucide-react';

const Services = () => {
    const services = [
        {
            id: 1,
            title: 'Web Design',
            description: 'Creating visually appealing and user-friendly web designs with modern aesthetics and intuitive navigation.',
            icon: Layout,
        },
        {
            id: 2,
            title: 'Frontend Development',
            description: 'Building responsive and interactive user interfaces using React.js with seamless animations and state management.',
            icon: Code,
        },
        {
            id: 3,
            title: 'Backend Development',
            description: 'Developing robust server-side logic with Node.js, Express, and MongoDB for scalable applications.',
            icon: Server,
        },
        {
            id: 4,
            title: 'Full Stack Development',
            description: 'End-to-end MERN stack solutions combining frontend excellence with powerful backend architecture.',
            icon: Layers,
        },
        {
            id: 5,
            title: 'React Native Apps',
            description: 'Cross-platform mobile applications for iOS and Android with native performance and beautiful UI.',
            icon: Smartphone,
        },
        {
            id: 6,
            title: 'Three.js & 3D Web',
            description: 'Immersive 3D experiences and interactive visualizations that bring your web projects to life.',
            icon: Box,
        },
    ];

    return (
        <section className="py-24 bg-background relative overflow-hidden" id="services">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16 animate-fade-up">
                    <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
                        What I Offer
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                        My <span className="gradient-text">Services</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        Comprehensive development solutions tailored to bring your digital vision to life
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            className="group relative bg-card border border-border rounded-2xl p-8 transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_40px_hsl(172_66%_50%/0.15)] animate-fade-up"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Service Number */}
                            <div className="absolute top-6 right-6 text-6xl font-bold text-border/50 group-hover:text-primary/20 transition-colors duration-500">
                                {String(service.id).padStart(2, '0')}
                            </div>

                            {/* Icon */}
                            <div className="relative z-10 w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                                <service.icon className="w-7 h-7 text-primary-foreground" />
                            </div>

                            {/* Content */}
                            <h3 className="relative z-10 text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                                {service.title}
                            </h3>
                            <p className="relative z-10 text-muted-foreground leading-relaxed">
                                {service.description}
                            </p>

                            {/* Hover indicator */}
                            <div className="mt-6 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="text-sm font-medium">Learn more</span>
                                <svg
                                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>

                            {/* Bottom gradient line */}
                            <div className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl overflow-hidden">
                                <div className="h-full w-0 group-hover:w-full gradient-bg transition-all duration-500" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
