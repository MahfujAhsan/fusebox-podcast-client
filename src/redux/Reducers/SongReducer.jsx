// import { PLAY_SONG_REQUEST, PAUSE_SONG_REQUEST, PLAY_MASTER, PAUSE_MASTER } from "../Constants/SongConstant.jsx"

// export const songReducer = (
//     state = { masterSong: {}, isPlaying: false },
//     action
// ) => {
//     switch (action.type) {
//         case PLAY_SONG_REQUEST:
//             return { ...state, masterSong: action.payload, isPlaying: true };
//         case PAUSE_SONG_REQUEST:
//             return { ...state, isPlaying: false };
//         case PLAY_MASTER:
//             return { ...state, isPlaying: true };
//         case PAUSE_MASTER:
//             return { ...state, isPlaying: false };
//         default:
//             return state;

//     }
// }

// SongReducer.jsx
import {
    SET_INITIAL_SONG,
    PLAY_SONG_REQUEST,
    PAUSE_SONG_REQUEST,
    PAUSE_MASTER,
    PLAY_MASTER,
} from "../Constants/SongConstant.jsx";

export const songReducer = (
    state = { masterSong: { mp3: null }, isPlaying: false, initialSong: null },
    action
) => {
    switch (action.type) {
        // case SET_INITIAL_SONG:
        //     return { ...state, initialSong: action.payload, masterSong: action.payload, isPlaying: false };
        case SET_INITIAL_SONG:
            return { ...state, masterSong: action.payload, isPlaying: false };
        case PLAY_SONG_REQUEST:
            return { ...state, masterSong: action.payload, isPlaying: true };
        case PAUSE_SONG_REQUEST:
            if (state.masterSong.mp3) {
                state.masterSong.mp3.pause();
            }
            return { ...state, isPlaying: false };
        case PLAY_MASTER:
            if (state.masterSong.mp3) {
                state.masterSong.mp3.play();
            }
            return { ...state, isPlaying: true };
        case PAUSE_MASTER:
            if (state.masterSong.mp3) {
                state.masterSong.mp3.pause();
            }
            return { ...state, isPlaying: false };
        default:
            return state;
    }
};