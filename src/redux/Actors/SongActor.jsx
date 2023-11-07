import { PLAY_SONG_REQUEST, PAUSE_SONG_REQUEST} from "../Constants/SongConstant.jsx"

export const playSong = (song) => async (dispatch) => {
    dispatch({type: PLAY_SONG_REQUEST, payload: song});
}

export const pauseSong = () => async (dispatch) => {
    dispatch({type: PAUSE_SONG_REQUEST});
}