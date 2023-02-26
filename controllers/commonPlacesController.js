function placeSaved (place, saved_places) {
    return saved_places.includes(place);
}

setButtonTitle = (place, places) => {
    let button_title;
    if(placeSaved(place, places))
        button_title = 'Added'
    else
        button_title = 'Add to Want-to-Go List'
    return button_title;
}
module.exports = setButtonTitle;