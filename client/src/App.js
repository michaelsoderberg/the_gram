import React, { Component, createElement } from "react";
import "./App.css";

import MediaFeed from "./components/MediaFeed";
import Image from "./components/Image";
import Video from "./components/Video";
import Select, { Option } from "./components/Select";
import LazyLoad from "react-lazyload";

const mediaTypes = { Video, Image };

const buildURL = opts =>
  `https://www.reddit.com/r/${opts.selected}/top/.json?t=month&limit=10`;

const setSelected = selected => state => ({ ...state, selected });

const renderMedia = (item, key) => (
  <LazyLoad key={key} height="100vh">
    {createElement(mediaTypes[item.type], item)}
  </LazyLoad>
);

class App extends Component {
  state = {
    selected: "NatureIsFuckingLit",
    options: [
      { value: "NatureIsFuckingLit", children: "NatureIsFuckingLit" },
      { value: "EarthPorn", children: "EarthPorn" },
      { value: "Gifs", children: "Gifs" },
      { value: "NatureGifs", children: "NatureGifs" },
      { value: "DamnNatureYouScary", children: "DamnNatureYouScary" },
    ]
  };
  setFeed = e => this.setState(setSelected(e.target.value));
  render() {
    const { selected, options } = this.state;
    return (
      <div className="App">
        <Select value={selected} onChange={this.setFeed}>
          {options.map(Option)}
        </Select>
        <MediaFeed src={buildURL({ selected })}>
          {media => media.map(renderMedia)}
        </MediaFeed>
      </div>
    );
  }
}

export default App;

