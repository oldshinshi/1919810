import logo from './logo.svg';
import './App.css';
import {QRCodeSVG} from 'qrcode.react';
import {QRCodeCanvas} from 'qrcode.react';
import { Counter } from './Counter';
import { Player, BigPlayButton } from 'video-react';
import FormikFormWithValidate from './formikFormWithValidate';

function App() {
  return (
    <body>
    <div className="App">
      <span>
      <h2>ChatGpt免費破解</h2>
      <QRCodeSVG 
        value={"https://www.youtube.com/watch?v=dMTy6C4UiQ4"}
        bgColor={"#FFFFFF"}
        fgColor={"#0000CC"}
      />
      <h2>Netflix免費破解</h2>
      <QRCodeCanvas 
        value={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}
        bgColor={"#FFFFFF"}
        fgColor={"#FF007F"}
      />
      <h2>Spotify免費破解</h2>
      <Player
        poster="https://play-lh.googleusercontent.com/IHoystBSDWqQJ705ZUYRK8Jb5trzQnem6FpWY2Z1dfbgCGITJSlJ5z0jRVQSeibycOw"
        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
      >
        <BigPlayButton position="center" />
        <ControlBar autoHide={true} autoHideTime={5000}/>
        <PlaybackRateMenuButton rates={[5, 3, 2, 1, 0.5, 0.1]} />
        <ReplayControl seconds={5} order={2.1} />
      </Player>
      </span>
      <br/><hr/>
      <Counter/>
      <br/><hr/>
      <FormikFormWithValidate></FormikFormWithValidate>
    </div>
    </body>
  );
}

export default App;
