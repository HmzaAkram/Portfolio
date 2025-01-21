const review = [
    {
        id: 0,
        clientName: 'Unknown',
        clientLocation: 'Unknown',
        clientSource: 'Unknown',
        clientReview: 'No review'
    },
    
]
export default function handler(req, res) {
    res.status(200).json(review)
}
