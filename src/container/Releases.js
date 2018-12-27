import React, { Component } from 'react';
import {hashHistory} from 'react-router'

import ReleaseForm from '../ui/ReleaseForm';
import api from '../Api'

class Releases extends Component {

    constructor() {
        super();

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.loadReleases = this.loadReleases.bind(this);

        this.state = {
            releases: [],
            filteredReleases: []
        }
    }

    componentDidMount(){
        this.loadReleases()
    }  

    loadReleases(){
        api.loadReleases()
          .then((res) => {this.setState({
            releases: res.data
        })})
    }

    handleSubmit(e, {name, date, description}) {
        e.preventDefault();

        var myRelease = {
            releaseName: name,
            releaseDate: date,
            releaseDescription: description
        }

        api.saveRelease(myRelease)
        .then(() => {
            //this.setState({releases: state.releases.concat(myRelease)})
            this.loadReleases()
        })
    }

    handleRemove(id){
        var myReleases = this.state.releases;
        myReleases.splice(id, 1)

        api.deleteRelease(id)
        .then(() => {
            this.loadReleases()
        })
    }

    render() {
        return (
            <div className="container" style={{ paddingTop: '25px' }}>
                <ReleaseForm submitHandler={this.handleSubmit} />
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Release Name</th>
                            <th>Release Date</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.releases.map((release, index) => {
                            const onClickRemove = () => {
                                this.handleRemove(release.id);
                            }

                            const onClickCel = () => {
                                hashHistory.push('/release-description/'+release.id)
                            }

                            return (
                                <tr key={release.id}>
                                    <th scope="row">{index}</th>
                                    <td>{release.releaseName}</td>
                                    <td>{release.releaseDate}</td>
                                    <td><button style={{marginRight: '10px'}} type="button" className="btn btn-info btn-sm" onClick={onClickCel}>Description</button>
                                        <button type="button" className="btn btn-danger btn-sm" onClick={onClickRemove}>Remove</button></td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
            </div>
        );
    }
}

export default Releases

