import {combineReducers} from 'redux'
const songsReducer = () => {
    return [
        { title: 'Carry On Wayward Son', duration: '5:24' },
        { title: 'Hammer to Fall', duration: '3:55' },
        { title: 'Manic Monday', duration: '3:04' },
        { title: 'Desert Rose', duration: '4:49' }
    ]
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') return action.payload;
    return selectedSong;
};

export default combineReducers({
    songs:songsReducer,
    selectedSong:selectedSongReducer
});