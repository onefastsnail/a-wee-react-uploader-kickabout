import React from 'react';
import Dropzone from 'react-dropzone'

class Uploader extends React.Component {

    constructor(props) {
        super(props);

        this.state = { files: [] }

        this.onDrop = this.onDrop.bind(this);
    }

    componentDidMount() { }

    onDrop(files) {
        this.setState({
            files
        });
    }

    render() {

        return (
            <div>
                <Dropzone
                    onDrop={this.onDrop}
                    accept=".jpeg,.png"
                >
                    <p>Drop it like it's hot </p>
                </Dropzone>
                <ul>
                    {
                        this.state.files.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
                    }
                </ul>
            </div>
        );
    }
}

export default Uploader;