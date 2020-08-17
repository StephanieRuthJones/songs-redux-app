import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectSong } from '../actions'
class SongList extends Component {
    handleClick = song => {
        this.props.selectSong(song)
    }

    renderSongList = () => {
        return this.props.songs.map(song => {
            return <div className="item" key={song.title}>
                <div className="right floated content">
                    <button
                        className="ui button primary"
                        value={song}
                        onClick={() => this.handleClick(song)}
                    >Select</button>
                </div>
                <div className="content">{song.title}</div>
            </div>
        })
    }
    render() {
        return <div className="ui divided list">
            {this.renderSongList()}
        </div>
    }
}

const mapStateToProps = (state) => {
    console.log("state", state)
    return { songs: state.songs }
}

export default connect(mapStateToProps, {
    selectSong
})(SongList)