import React, { useState } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import Searchbar from './components/Searchbar'
import Items from './components/Items'
import api from './Api'

export default function App() {

  const [items, setItems] = useState([])

  const fetchData = async (text) => {

    const channels = await api.get(`https://api.twitch.tv/helix/search/channels?query=${text}`)
    const data = channels.data.data

    setItems(data)
    console.log(data)
  }
  return (
    <div>
      <Searchbar fetchData={fetchData} />

        <Items items={items} />
      
    </div>
  );
}
