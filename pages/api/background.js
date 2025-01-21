const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'ISESoft Pakistan',
                degree: 'Microsoft Office',
                detail: "Microsoft Office Course Compeleted from UET Karachi.",
                year: '2022-2023'
            },
            {
                id: 1,
                title: 'Modern Touch English Grammar School',
                degree: 'SSC, Science Subjects',
                detail: "Completed SSC part 1 and part 2 in Science subjects from Modern Touch English Grammar School ,Karachi",
                year: '2013-2015'
            },
            {
                id: 2,
                title: 'National Vocational & Technical Training Commission (NAVTTC)',
                degree: 'SSC, Science Subjects',
                detail: "Completed SSC part 1 and part 2 in Science subjects from Modern Touch English Grammar School ,Karachi",
                year: '2013-2015'
            },
            {
                id: 3,
                title: 'Pakistan Freelancers Association(PAFLA)',
                degree: 'Google Soft Skills Program',
                detail: "Completed Google Soft Skills Program from Pakistan Freelancers Association",
                year: 'Nov 30/2024',
            },


        ]
    },
    {
        expCards: [
            {
                id: 0,
                title: 'Semester Project',
                role: 'Create FrontEnd',
                url: 'https://jensen-decors-iota.vercel.app/',
                desc: 'As a frontend developer,Just simple frontend.',
                year: '05/2024 - Present',
                location: 'Karachi, Pakistan'
            },
            {
                id: 1,
                title: 'Contest-Azm(Compitition)',
                role: 'Frontend Developer',
                url: 'https://soccer-verse-1kmvbu6x5-hmzaakrams-projects.vercel.app/',
                desc: 'As a frontend developer,Just simple frontend.',
                year: '08/2024 - Present',
                location: 'Karachi, Pakistan'
            },
            {
                id: 2,
                title: 'Techwiz 5(Compitition)',
                role: 'Web Application Developer',
                url: 'https://travel-w-eb-bodz.vercel.app/',
                desc: 'As an Web Application Developer, I learned how to do project at limited time.',
                year: '05/2024 - Present',
                location: 'Karachi, Pakistan'
            },

        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
