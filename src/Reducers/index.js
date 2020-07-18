import {combineReducers} from 'redux';

const songsReducer=()=>{
  return[
      {title:'no scrubs', duration:'4:05'},
      {title:'Demons',duration:'3:45'},
      {title:'All Star',duration:'2:15'},
      {title:'I want it that way',duration:'1:45'}
  ];  
};

const selectedSongReducer=(selectedSong = null,action)=>{
    if(action.type==='Song_Selected'){
        return action.payload;
    }
    return selectedSong
};


export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer

});