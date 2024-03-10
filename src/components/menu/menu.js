'use client'
import { useState } from 'react';
import style from './menu.css';

function Menu({ onSelection }) {
  const [selectedForm, setSelectedForm] = useState('');

  function select(selected) {
    setSelectedForm(selected);
    onSelection(selected);
  }

  return (
    <div className='menu-container'>
      <div className='menu-list'>
        <ul className='list'>
          <li>
            <button
              className={selectedForm === 'uniProtID' ? 'active' : ''}
              onClick={() => select('uniProtID')}
            >
              uniProtID
            </button>
          </li>
          <li>
            <button
              className={selectedForm === 'proteinSequence' ? 'active' : ''}
              onClick={() => select('proteinSequence')}
            >
              Protein Sequence
            </button>
          </li>
          <li>
            <button
              className={selectedForm === 'FastaFile' ? 'active' : ''}
              onClick={() => select('FastaFile')}
            >
              Upload Fasta File
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
