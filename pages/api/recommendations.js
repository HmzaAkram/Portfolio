// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const recommendationCard = [
  {
    id: 0,
    name: 'Mudassir Malik',
    image: "images/Mudassir.jfif",
    designation: 'React JS | NEXT JS | Node | Video Editor',
    view: "Hey everyone! I wanted to take a moment to recommend Hamza for any React.js opportunities. I had the pleasure of working with him on multiple projects where he showcased a strong understanding of React.js and Next.js concepts and delivered high-quality code. He consistently demonstrated a willingness to learn and grow, and his enthusiasm for tackling new challenges was contagious. Hamza is a reliable and dedicated team member who would be a great asset to any React.js team. Highly recommended! 👍! 🌟",
    linkednURL: "https://www.linkedin.com/"
  },
  {
    id: 1,
    name: 'Zaki Haider',
    image: "images/Zaki.jpeg",
    designation: 'JavaScript | Tailwind | Sass | Bootstrap | Python Developer',
    view: "I had the privilege of working alongside Hamza on multiple College projects, and I must say, his talent and work ethic truly stood out. Recently, we were both part of the dynamic team, where Hamza's professionalism and attention to detail shone brightly. I wholeheartedly endorse Hamza for any opportunity that calls for a highly skilled and dedicated individual.",
    linkednURL: "https://www.linkedin.com/"
  },
  {
    id: 2,
    name: 'Ehtisham Aktar',
    image: "images/Ehtisham.jpg",
    designation: 'Next Js | JavaScript | Tailwind | Sass | Bootstrap',
    view: "I wholeheartedly recommend Hamza as a talented React frontend developer with an incredible flair for UI/UX design. His proficiency in Node.js further enhances his capabilities, allowing him to build robust and scalable applications. Hamza's attention to detail, problem-solving skills, and dedication to delivering exceptional results make him a valuable addition to any development team.",
    linkednURL: "https://www.linkedin.com/"
  },
  {
    id: 3,
    name: 'Muhammad Afan',
    image: "images/Afan.jpeg",
    designation: 'MERN Stack Developer at Productbox',
    view: "I highly recommend Hamza Akram for web frontend development positions. Their expertise in ReactJS and Next.js, combined with their professionalism and dedication, make them an invaluable asset to any team.",
    linkednURL: "https://www.linkedin.com/in/"
  },
]
export default function handler(req, res) {
  res.status(200).json(recommendationCard)
}
