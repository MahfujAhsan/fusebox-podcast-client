import { PLAY_SONG_REQUEST, PAUSE_SONG_REQUEST, PLAY_MASTER, PAUSE_MASTER } from "../Constants/SongConstant.jsx"

export const songReducer = (state = { mainSong: {}, isPlaying: false }, action) => {
    switch (action.type) {
        case PLAY_SONG_REQUEST:
            return { ...state, mainSong: action.payload, isPlaying: true };
        case "SET_PLAYING":
            return { ...state, isPlaying: action.payload };
        default:
            return state;

    }
}