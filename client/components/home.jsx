import React from "react";

export const imageUrls = [
  'http://daynin.github.io/clojurescript-presentation/img/react-logo.png',
  'https://raw.githubusercontent.com/reactjs/redux/master/logo/logo.png'
];

export class Home extends React.Component {
  renderImage(imageUrl, key) {
    return (
        <img key={key} src={imageUrl} width="10%" height="10%"/>
    );
  }
  render() {
    return (
      <div>
        <h1>Hello <a href="https://github.com/electrode-io">Electrode</a></h1>
        <div> <p>Our beloved friends</p></div>
        <div className="images">
          {imageUrls.map((imageUrl, index) => this.renderImage(imageUrl, index))}
        </div>
      </div>
    );
  }
}