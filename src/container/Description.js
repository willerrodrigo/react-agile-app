//Description of each release
import React, {Component} from 'react';

import api from '../Api'
//Functional component
export default class Releases extends Component {

    constructor(props){
        super(props);
        this.state = {
            release: {}
        }
    }

    componentDidMount(){
        api.loadReleaseById(this.props.params.id)
          .then((res) => {
            this.setState({ release: res.data})
        })
    }

    render(){
        return (
            <div class="card" style={{ marginTop: '15px' }}>
                <div class="card-header text-center">
                    {this.state.release.releaseName}
                </div>
                <div class="card-body">
                    <p class="card-text">{this.state.release.releaseDescription}</p>
                </div>
            </div>
        );
    }
}