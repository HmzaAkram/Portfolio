const review = [
    {
        id: 1,
        clientName: 'JI Education',
        clientLocation: 'India',
        clientSource: 'Freelance',
        clientReview: 'Hamza delivered an exceptional platform for our educational needs. His technical skills and dedication to the project were evident from day one. Highly recommended! 5/5 Stars! 🌟'
    },
    {
        id: 2,
        clientName: 'Thaheem Brothers',
        clientLocation: 'Pakistan',
        clientSource: 'Freelance',
        clientReview: 'The logistics management system Hamza built for us has streamlined our operations significantly. He is a highly skilled developer who understands business requirements perfectly. Great job! 5/5 Stars! 🌟'
    },
    {
        id: 3,
        clientName: 'Al-Kareem Real Estate',
        clientLocation: 'Pakistan',
        clientSource: 'Freelance',
        clientReview: 'Working with Hamza was a pleasure. He created a beautiful and functional real estate portal that exceeded our expectations. Professional and talented! 5/5 Stars! 🌟'
    },
    {
        id: 4,
        clientName: 'US Client',
        clientLocation: 'United States',
        clientSource: 'Fiverr',
        clientReview: 'Amazing experience! Hamza created 6 high-quality logos for me in just 24 hours. His speed and creativity are top-notch. Highly recommended!'
    },
    {
        id: 5,
        clientName: 'AI Innovation Lab',
        clientLocation: 'India',
        clientSource: 'Freelance',
        clientReview: 'Hamza is a brilliant developer. He built a complex Generative AI project for us that works flawlessly. Very impressed with his knowledge in this field.'
    },
    {
        id: 6,
        clientName: 'Dr. Healthcare',
        clientLocation: 'Pakistan',
        clientSource: 'Freelance',
        clientReview: 'The healthcare application Hamza developed for my clinic is excellent. It has made patient management much easier. Professional and reliable developer!'
    },
]
export default function handler(req, res) {
    res.status(200).json(review)
}
