import React, { Component } from 'react';
import Direactory from './DirectoryComponent';
import { CAMPSITES } from '../shared/campsites';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            campsites: CAMPSITES
        };
    }

    render() {
        return <Direactory campsites={this.state.campsites} />;
    }
}

export default Main;
