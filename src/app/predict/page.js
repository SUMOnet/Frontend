"use client"
import React from 'react'
import { useState  } from 'react';
import Menu from "@/components/menu/menu";
import Protid from "@/components/uniprotıd/protıd";
import ProtSequence from '@/components/protsequence/protsequence';
import FastaFile from '@/components/uploadFasta/uploadfasta';
import style from  './predict.css'
function page() {

    const [selectedForm, setSelectedForm] = useState(null);

    const handleSelectionChange = (formName) => {
      setSelectedForm(formName);
    };
  
    return (
      <div className='predict-container'>

          <Menu onSelection={handleSelectionChange} />
        <div className='menu'>
          {selectedForm === 'uniProtID' && <Protid />}
          {selectedForm === 'proteinSequence' && <ProtSequence/>}
          {selectedForm === 'FastaFile' && <FastaFile />}
        </div>
      </div>

    );
}

export default page