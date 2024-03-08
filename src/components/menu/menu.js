'use client'
import { useState } from 'react';
import style from './menu.css'

function Menu() {
  const [set,setName] = useState('');
 
  function select (selected){
    setName(selected);
  }

  return (
    
    <div className='menu-container'>
        <div className='menu-list'>
            <ul className='list'>
                <li><button className={set === 'uniProtID' ? 'active':''} onClick={()=> setName('uniProtID')} >uniProtID</button></li>
                <li><button className={set === 'proteinSequence' ? 'active':''} onClick={()=> setName('proteinSequence')}> Protein Sequence</button></li>
                <li><button className={set === 'FastaFile' ? 'active':''} onClick={()=> setName('FastaFile')}>Upload Fasta File</button></li>
            </ul>
        </div>
    </div>
  )
}

export default Menu