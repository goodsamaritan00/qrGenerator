
import './App.css';

import { useState } from "react";
import { saveAs } from 'file-saver';

import { FiDownload } from 'react-icons/fi'

import { TwitterPicker } from 'react-color';

function App() {

const [url, setUrl] = useState('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
const [logoUrl, setLogoUrl] = useState('')
const [margin, setMargin] = useState(0)
const [primaryColor, setPrimaryColor] = useState('000000')
const [secondaryColor, setSecondaryColor] = useState('ffffff')

const [applyData, setApplyData] = useState([{
  url: url,
  logoUrl: logoUrl,
  margin: margin,
  pc: primaryColor,
  sc: secondaryColor
}])

// download qr code
const downloadQR = () => {
  saveAs(`https://quickchart.io/qr?text=${applyData[0]?.url}&size=200&margin=${applyData[0]?.margin}&dark=${applyData[0]?.pc}&light=${applyData[0]?.sc}`, 'qrCode.png')
} 

  return (
    <div>
      <div className='qrWrapper'>
        <h1>Generate Your Own QR Code!</h1>
        <form onSubmit={(e) => {
          e.preventDefault()
          setApplyData([{
            url: url,
            logoUrl: logoUrl,
            margin: margin,
            pc: primaryColor,
            sc: secondaryColor
          }])

          console.log(applyData[0]?.url)
        }}>
          <label>Generate Text or URL</label>
          <input onChange={(e) => setUrl(e.target.value)} type='text' />
          <label>Add Logo URL</label>
          <input onChange={(e) => setLogoUrl(e.target.value)} />
          <label>Margin</label>
          <select onChange={(e) => setMargin(e.target.value)}>
            <option>0</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
          <label>Primary Color</label>
          <TwitterPicker className='picker' color={primaryColor} onChange={(color) => {
            setPrimaryColor(color.hex.replace('#', ''))
            console.log(primaryColor)
          }} />
          <label>Secondary Color</label>
          <TwitterPicker className='picker' color={secondaryColor} onChange={(color) => {
            setSecondaryColor(color.hex.replace('#', ''))
            console.log(primaryColor)
          }} />
          <button>Generate!</button>
        </form>
        <div>
          <img src={`https://quickchart.io/qr?text=${applyData[0]?.url}&size=200&margin=${applyData[0]?.margin}&dark=${applyData[0]?.pc}&light=${applyData[0]?.sc}&centerImageUrl=${logoUrl}`} />
          <button onClick={() => downloadQR()}>Download <FiDownload /></button>        
        </div>
    </div>
    </div>
  );
}

export default App;
