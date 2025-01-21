const expertise = [
    {
        id: 0,
        title: 'Laravel Developer',
        desc: 'I am a full-stack developer specializing in Laravel, skilled in building complete web applications that integrate robust back-end functionality with modern front-end features',
    },
    {
        id: 1,
        title: 'Github',
        desc: "GitHub is essential for version control and collaboration. Its intuitive interface and features like pull requests and issue tracking simplify the process. Continuous integration ensures up-to-date code. GitHub is vital to my success as a developer.",
    },
    {
        id: 2,
        title: 'Designing (UI/UX)',
        desc: 'I am proficient in using design software such as Figma, Adobe XD, and Adobe Illustrator. Through participating in hackathons and freelance work, I have gained practical experience in UI/UX design and graphic design. Designing is my passion, and it has allowed me to continue to develop my creative skills and grow in the field.',
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
