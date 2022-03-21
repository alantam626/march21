import { useState, useEffect } from 'react';
const imageUrl = "https://picsum.photos/310/100"

export default function Card() {
    const [apiData, setApiData] = useState('');

    async function fetchApiData() {
      const res = await fetch(imageUrl);
      const imageBlob = await res.blob();
      const imageObjectUrl = URL.createObjectURL(imageBlob);
      setApiData(imageObjectUrl);
  
    }
  
    useEffect(() => {
      fetchApiData();
    }, []);

    return (
        <div className='card'>
            <img src={apiData} alt="random picture"/>
            <hr></hr>
            <div>Title Picture</div>
            <div><i>Title Picture</i></div>
            <ul>
                <li>Author: Chuck Ringer</li>
                <li>ID: 1234</li>
                <li>URL: https://picsum.photos/300/100</li>
            </ul>
        </div>
    )
}