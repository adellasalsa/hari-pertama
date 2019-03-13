import React, { Component } from 'react'
import './App.css'
import Nama from './component/Nama'
import Alamat from './component/Alamat'
import Ttl from './component/Ttl'
import Jeniskelamin from './component/Jeniskelamin'
import Sekolahasal from './component/Sekolahasal'
import Kelas from './component/Kelas'
import Programkeahlian from './component/Programkeahlian'
import Hobi from './component/Hobi'
import Namaayah from './component/Namaayah'
import Namaibu from './component/Namaibu'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Nama />
        <Alamat />
        <Ttl />
        <Jeniskelamin />
        <Sekolahasal />
        <Kelas />
        <Programkeahlian />
        <Hobi />
        <Namaayah />
        <Namaibu />
      </div>
    )
  }
}

export default App
