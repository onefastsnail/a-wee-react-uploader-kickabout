import React from 'react';

class Countdown extends React.Component {

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
                Hello there!
            </div>
        );
    }
}

export default Countdown;