import {  ArrowBackOutlined } from "@mui/icons-material"
import "./watch.scss";

export default function Watch() {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      <video
        className="video"
        autoPlay
        progress
        controls
        src="https://cdn.pixabay.com/vimeo/515379581/robin-65801.mp4?width=640&hash=bfc5730e385bdcae9e573dd9b0b5c5046fbb252b"
      />
    </div>
  );
}
