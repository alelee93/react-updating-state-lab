// Code YouTubeDebugger Component Here
import React, {Component} from 'react'

export default class YouTubeDebugger extends Component {
    constructor(){
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                    resolution: '1080p'
                }
            }
        }
    }

    //update settings.bitrate state property to 12

    handleBitrate = () => {
       this.setState({
           settings: {
               ...this.state.settings, 
               bitrate: 12
           }
       })
    }

    //changes the settings.video.resolution state property to '720p'

    handleResolution = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {resolution: '720p'}
            }
        })
     }

    render(){
        return(
            <div>
            <button className={'bitrate'} onClick={this.handleBitrate}>  BITRATE BUTTON </button>
     
            <button className={'resolution'} onClick={this.handleResolution}>  RESOLUTION BUTTON </button>
            </div>

        )

    }

}