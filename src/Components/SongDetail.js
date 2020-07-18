import React from 'react'
import {connect} from 'react-redux'

const SongDetail =({song})=>{
   if(!song){
       return<div>Select a song</div>
   }
return(<div>
<h3>Detail for:</h3>
<p><h4>Title:</h4>{song.title}</p>
<p><h4>Duration:</h4>{song.duration}</p>
</div>)} 

const mapStateToProps=(state)=>{
    return {song:state.selectedSong}
}


export default connect(mapStateToProps)(SongDetail);