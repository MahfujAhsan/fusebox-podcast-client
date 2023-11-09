import { PLAY_SONG_REQUEST, PAUSE_SONG_REQUEST, PAUSE_MASTER, PLAY_MASTER, SET_INITIAL_SONG } from "../Constants/SongConstant.jsx"

export const setInitialSong = (song) => async (dispatch) => {
    dispatch({ type: SET_INITIAL_SONG, payload: song });
}

export const playSong = (song) => async (dispatch) => {
    dispatch({type: PLAY_SONG_REQUEST, payload: song});
}

export const pauseSong = () => async (dispatch) => {
    dispatch({type: PAUSE_SONG_REQUEST});
}

export const pauseMaster = () => async (dispatch) => {
    dispatch({type: PAUSE_MASTER});
}

export const playMaster = () => async (dispatch) => {
    dispatch({type: PLAY_MASTER});
}