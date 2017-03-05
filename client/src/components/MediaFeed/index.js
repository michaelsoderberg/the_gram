import React, { Component } from "react";
import "./styles.css";

const domainMap = {
  "gfycat.com": post => ({
    src: post.url.replace("gfycat.com", "giant.gfycat.com"),
    type: "Video"
  }),
  "fat.gfycat.com": post => ({ src: post.url, type: "Video" }),
  "i.redd.it": post => ({ src: post.url, type: "Image" }),
  "i.reddituploads.com": post => ({
    src: post.url.replace(/amp;/g, ""),
    type: "Image"
  }),
  "i.imgur.com": post => ({
    src: post.url.replace("gifv", "gif"),
    type: "Image"
  }),
  "imgur.com": post => ({ src: post.url + ".gif", type: "Image" }),
  default: post => ({ src: post.url, type: "Image" })
};

const parsePost = ({ data }) => {
  const domain = domainMap[data.domain] ? data.domain : "default";
  if (!domainMap[data.domain]) {
    console.log("Unknown domain", data.domain, data);
  }
  return { title: data.title, ...domainMap[domain](data) };
};

const setLoading = bool => state => ({ ...state, isLoading: bool });
const receivePosts = res => (state, props) => {
  const isValid = post => !post.data.url.includes("youtube");
  return { ...state, items: res.data.children.filter(isValid).map(parsePost) };
};

class MediaFeed extends Component {
  state = { isLoading: false, items: [] };
  componentWillMount() {
    this.fetch(this.props.src);
  }
  componentWillReceiveProps(next) {
    if (next.src !== this.props.src) {
      this.fetch(next.src);
    }
  }
  fetch(src) {
    this.setState(setLoading(true));
    fetch(src)
      .then(res => res.json())
      .then(res => {
        this.setState(receivePosts(res));
        this.setState(setLoading(false));
      });
  }
  render() {
    return (
      <div className="MediaFeed">
        {
          this.state.isLoading
            ? <pre>LADDAR...</pre>
            : this.props.children(this.state.items)
        }
      </div>
    );
  }
}

export default MediaFeed;

