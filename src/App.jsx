import QRCode from "qrcode";
import { useState } from "react";

const App = () => {
  const [url, setUrl] = useState("");
  const [qrcode, setQrcode] = useState("");

  const GenerateQr = () => {
    QRCode.toDataURL(
      url,
      {
        width: 800,
        margin: 1,
      },
      (err, url) => {
        if (err) return console.error(err);
        setQrcode(url);
      }
    );
  };

  return (
    <div className="app">
      <h1>QR Code Generator</h1>
      <input
        type="text"
        placeholder="Enter something.."
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <p></p>
      <button onClick={GenerateQr}>Generate</button>
      {qrcode && (
        <>
          <img src={qrcode} />
          <a href={qrcode} download="qrcode.png">
            Download
          </a>
        </>
      )}
    </div>
  );
};

export default App;
