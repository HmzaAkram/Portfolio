const expertise = [
    {
        id: 0,
        title: 'Laravel Developer',
        desc: 'I am a full-stack developer specializing in Laravel, skilled in building complete web applications that integrate robust back-end functionality with modern front-end features',
    },
    {
        id: 1,
        title: 'React JS Developer',
        desc: "React.js developer skilled in building dynamic, efficient, and responsive web applications. Expertise in JSX, components, hooks, state management, and integrating APIs for seamless user experiences.",
    },
    {
        id: 2,
        title: 'Github',
        desc: "GitHub is crucial for version control and team collaboration. Features like pull requests, issue tracking, and continuous integration streamline workflows, ensuring organized, up-to-date code for development success.",
    },
    {
        id: 3,
        title: 'Designing (UI/UX)',
        desc: 'I am skilled in Figma, Adobe XD, and Illustrator. Hackathons and freelance work have given me practical UI/UX and graphic design experience, fueling my passion for creativity.',
    },
    {
        id: 4,
        title: 'WordPress',
        desc: "WordPress is a versatile CMS powering over 40% of websites. Its flexibility, themes, plugins, and ease of use enable creating functional sites without coding expertise",
    },
    {
        id: 5,
        title: 'SQLServer Managment',
        desc: "SQL Server Management Studio(SSMS)streamlines database management with tools for queries, analysis, backups, tuning, and monitoring, offering an intuitive interface for efficient administration.",
    },
   
]

export default function handler(req, res) {
    res.status(200).json(expertise)
}
