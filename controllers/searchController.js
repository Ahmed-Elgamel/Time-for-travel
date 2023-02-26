
const searchView = (req, res) => {
    query = req.body.Search
    result = search(query)
    res.render('searchView.ejs', {});
}


const search = (query) => {
    let destinations = [
        {name: 'Inca Trail to Machu Picchu',type: 'hiking',link: 'inca'},
        {name: 'Annapurna Circuit ',type: 'hiking', link: 'annapurna'},
        {name: 'Paris',type: 'city', link: 'paris'},
        {name: 'Rome',type: 'city', link: 'rome'},
        {name: 'Bali Island',type: 'island', link: 'bali'},
        {name: 'Santorini Island',type: 'island', link: 'santorini'},
    ]
    result = []
    for(let i = 0; i < destinations.length; i++) {
        if (destinations[i].name.toLocaleLowerCase().trim().includes(query.toLocaleLowerCase().trim())){
            result.push(destinations[i])
        }
    }
    return result;
}
module.exports = searchView