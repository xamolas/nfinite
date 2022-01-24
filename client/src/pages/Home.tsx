import axios from 'axios'
import { Component } from 'react'

class Home extends Component {
  state = {
    selectedFile: null as any
  }

  uploadFile = () => {
    let formData = new FormData()
    formData.append("file", this.state.selectedFile?.files[0])

    try {
      axios.post(
        "http://localhost:5000/upload",
        formData,
        { headers: { 'Content-Type': 'multipart/form-data' } })
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error.response)
        });
    } catch (error: any) {
      console.log(error)
      console.log(error.response.data)
    }
  }

  fileData = () => {
    if (this.state.selectedFile) {
      return (
        <div>
          <h2>File Details:</h2>
          <p>File Name: {this.state.selectedFile.name}</p>
          <p>File Type: {this.state.selectedFile.type}</p>
        </div>
      )
    }

    return (
      <div>
        <br />
        <h4>Choose before pressing the Upload button</h4>
      </div>
    )
  }


  render() {
    return (
      <div>
        <h1>
          Please select your CSV
        </h1>
        <div>
          <form method="post" encType="multipart/form-data">
            <input id="fileupload" type="file" name="fileupload" />
            <button id="upload-button" onClick={this.uploadFile}>Upload</button>
          </form>
        </div>
        {this.fileData()}
      </div>
    )
  }
}

export default Home