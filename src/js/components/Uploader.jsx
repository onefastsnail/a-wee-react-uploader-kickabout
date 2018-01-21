import React from 'react';
import { post } from 'axios';
import Dropzone from 'react-dropzone'

class Uploader extends React.Component {

    constructor(props) {
        super(props);

        this.state = { files: [] }

        this.onDrop = this.onDrop.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.uploadFile = this.uploadFile.bind(this);
    }

    componentDidMount() { }

    onDrop(files) {
        this.setState({
            files
        });
    }

    uploadFile(){
        const formData = new FormData();

        this.state.files.map((file, index) => {
            formData.append('file'+index, file);
        });

        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };

        return post('http://wordpress.vm/upload.php', formData, config);
    }

    onSubmit(e) {
        e.preventDefault();

        this.uploadFile().then(function (res) {
            console.log(res.data);
        })
        .catch(function (err) {
            console.log(err);
        });
    }

    render() {

        let dropzoneRef;

        return (
            <div className="s-uploader">
            <form action="" method="post" onSubmit={this.onSubmit}>
                <button type="button" onClick={() => { dropzoneRef.open() }}>Open File Dialog</button>
                <Dropzone
                    onDrop={this.onDrop}
                    ref={(node) => { dropzoneRef = node; }}
                >
                    <p>Drop it like it's hot </p>
                </Dropzone>
                {this.state.files.map(f => <p key={f.name}>{f.name} - {f.size} bytes</p>)}
                <button type="submit">Upload</button>
                </form>
            </div>
        );
    }
}

export default Uploader;