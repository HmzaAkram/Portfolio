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

        ]
    },
    

        ]
    



export default function handler(req, res) {
    res.status(200).json(background)
}
