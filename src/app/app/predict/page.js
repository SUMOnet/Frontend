"use client"
import React from 'react'
import { useState  } from 'react';
import Menu from "@/components/menu/menu";
import Protid from "@/components/uniprotıd/protıd";
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
          {selectedForm === 'proteinSequence' && <FormB />}
          {selectedForm === 'FastaFile' && <FormC />}
        </div>
        
        <div>
        <Protid/>
        </div>
      </div>

    );
}

export default page