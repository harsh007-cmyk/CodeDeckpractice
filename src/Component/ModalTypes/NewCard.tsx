import React, { useContext, useState } from 'react'
import { RiCloseFill } from 'react-icons/ri';
import { PlaygroundContext } from '../../context/PlaygroundContext';
import { CloseButton, ModalProps } from '../Modal'
import {Header} from '../Modal'
import Select from 'react-select';
import styled from 'styled-components';

const InputAndSelect=styled.div`
  display:grid;
  grid-template-columns:1fr 0.5fr;
  row-gap:1rem;
  column-gap:1rem;
  margin-top:1.2rem;
  align-items:center;
  input{
    flex-grow:1;
    height:2rem;
  }
  button{
    background:#241f21;
    height:2rem;
    color:white;
    padding:1 2rem;
  }
`
function NewCard({closeModal,identifier}:ModalProps) {
  const{folderId}=identifier;
  const [title,setTitle]=useState("");
  const{createNewPlaygound}=useContext(PlaygroundContext)!;
  const languageOptions=[
    {value:"c++",label:'C++'},
    {value:"java",label:'Java'},
    {value:"javascript",label:'Javascript'},
    {value:"python",label:'Python'},

  ]
  const [lang,setLang]=useState(languageOptions[0])
  function handleLang(langOption:any){
    setLang(langOption);
  }
  return (
    <div>
      <Header>
        <h2>Create New Playground</h2>
        <CloseButton onClick={()=>{
          closeModal();
        }}>
          <RiCloseFill/>
        </CloseButton>
      </Header>
      <InputAndSelect>
        <input type="text" value={title} onChange={
          (e)=>{
            setTitle(e.target.value);
          }
        } />
        <Select 
          options={languageOptions}
          value={lang}
          onChange={handleLang}
        />
        <button
          onClick={()=>{
            createNewPlaygound(folderId,title,lang.value);
          }}
        >
          Create New Playground
        </button>
      </InputAndSelect>
    </div>    
  )
}

export default NewCard