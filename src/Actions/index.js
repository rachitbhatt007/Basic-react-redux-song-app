//action creator which react an action
export const selectSong = (song) =>{
    return{
        type : 'Song_Selected',
        payload : song
    };
};

 