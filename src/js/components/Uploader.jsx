import React from 'react';

class Uploader extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {}

    handleClick(item) {
        //console.log(item); // null
    }

    render() {

        return (
            <div>
                Hello there!! hahs
            </div>
        );
    }
}

export default Uploader;