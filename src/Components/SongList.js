import React from 'react'
import {connect} from 'react-redux'
import {selectSong} from '../Actions'

class SongList extends React.Component{

    renderList(){
        return this.props.songs.map((song)=>{
            return(
                <div key={song.title}>
                    <div className="row">
                
            <div className="align-middle col-8" >{song.title}</div>
            <div className="ml-5"><button className="btn btn-outline-primary" onClick={()=>this.props.selectSong(song)}>Select</button></div>
                        </div>
                <hr/>
                </div>
            )

        })
    }
    

    render(){
       
    return <div>{this.renderList()}</div>
    }
}


//all the reducer data
const mapStateToProps=(state)=>{
    return {songs:state.songs}
}

export default connect(mapStateToProps,{
 selectSong:selectSong  
})(SongList);