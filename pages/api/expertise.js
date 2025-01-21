const expertise = [
    {
        id: 0,
        title: 'Laravel Developer',
        desc: 'I am a full-stack developer specializing in Laravel, skilled in building complete web applications that integrate robust back-end functionality with modern front-end features',
    },
    {
        id: 1,
        title: 'Github',
        desc: "GitHub is crucial for version control and team collaboration. Features like pull requests, issue tracking, and continuous integration streamline workflows, ensuring organized, up-to-date code for development success.",
    },
    {
        id: 2,
        title: 'Designing (UI/UX)',
        desc: 'I am skilled in Figma, Adobe XD, and Illustrator. Hackathons and freelance work have given me practical UI/UX and graphic design experience, fueling my passion for creativity.',
    },
    {
        id: 3,
        title: 'WordPress',
        desc: "WordPress is a powerful content management system (CMS) that powers over 40% of the web. Its flexibility and ease of use make it an ideal choice for blogs, business websites, and even e-commerce platforms. With thousands of themes and plugins, WordPress allows users to create fully customized and functional websites without extensive coding knowledge. Its open-source nature fosters an active community, constantly improving features and security.",
    },
   
]

export default function handler(req, res) {
    res.status(200).json(expertise)
}
