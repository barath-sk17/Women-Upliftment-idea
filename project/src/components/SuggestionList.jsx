import React, { useEffect, useState} from 'react'
import { getsuggestion, addsuggestion, editsuggestion, deletesuggestion } from '../services/ApiService'
import { SectionWrapper } from "../hoc";


import { fadeIn,textVariant } from '../utils/motion'
import { motion } from "framer-motion"

import { styles } from '../styles';
import AddSuggestion from './AddSuggestion';
import EditSuggestion from './EditSuggestion';

const SuggestionList = () => {

    const [suggestions, setSuggestions] = useState([])
    const [showAddSuggestionForm, setshowAddSuggestionForm] = useState(false)
    const [showEditSuggestionForm, setShowEditSuggestionForm] = useState(false)
    const [selectedEditData, setSelectedEditData] = useState()

    useEffect(() => {
        let mount = true
        getsuggestion()
        .then(res => {console.log("res from api",res)
          setSuggestions(res)
          return() => mount = false
        })
      },[])

      const handleAddSubmit = (e) =>{
        addsuggestion(e.target)
        .then(res =>{
            setSuggestions(res)
        })
      }

      const handleEditBtn = (suggestion) =>{
        setSelectedEditData(suggestion)
        setShowEditSuggestionForm(true)
        setshowAddSuggestionForm(false)
      }

      const handleEditSubmit  = (e, id) =>{
        editsuggestion(id, e.target)
        .then(res =>{
            setSuggestions(res)
        })
      }

      const handleDeleteBtn = (id) =>{
        deletesuggestion(id)
        .then(res =>{
            setSuggestions(suggestions.filter(s=> s.suggestion_id !== id))
        })
      }

      return(
        <>
    
          <div class="flex flex-col">
            
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} text-center`}>
                Share your thoughts to make a big difference
                </p>
                <h2 className={`${styles.sectionHeadText} text-center`}>
                App's Review
                </h2>
            </motion.div>
            <br/>
            <br/>
            <br/>
            <br/>
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div class="overflow-hidden">
                  <table class="table-auto">
                    <thead class="bg-black-100 p-8 rounded-2xl text-[22px]">
                      <tr>
                        <th scope="col" class="whitespace-nowrap px-6 py-4 font-medium">First Name</th>
                        <th scope="col" class="whitespace-nowrap px-6 py-4 font-medium">Last Name</th>
                        <th scope="col" class="whitespace-nowrap px-6 py-4 font-medium">Suggestion</th>
                        <th scope="col" class="whitespace-nowrap px-6 py-4 font-medium">Edit</th>
                        <th scope="col" class="whitespace-nowrap px-6 py-4 font-medium">Delete</th>
                      </tr>
                    </thead>
                    <tbody className="text-[18px]">
                    {suggestions.map(suggestion => {
                          return <tr key={suggestion.suggestion_id} class="bg-tertiary">
                            <td class="whitespace-nowrap px-6 py-4 font-medium">{suggestion.first_name}</td>
                            <td class="whitespace-nowrap px-6 py-4 font-medium">{suggestion.last_name}</td>
                            <td class="whitespace-nowrap px-6 py-4 font-medium">{suggestion.suggestion}</td>
                            
                            <td class="whitespace-nowrap px-6 py-4 font-medium"><button onClick={()=>handleEditBtn(suggestion)} class="bg-violet-500 hover:bg-violet-400 text-white font-bold py-2 px-4 border-b-4 border-violet-700 hover:border-violet-500 rounded text-[18px]">Edit</button></td>
                            <td class="whitespace-nowrap px-6 py-4 font-medium"><button onClick={()=>handleDeleteBtn(suggestion.suggestion_id)} class="bg-violet-500 hover:bg-violet-400 text-white font-bold py-2 px-4 border-b-4 border-violet-700 hover:border-violet-500 rounded text-[18px]">Delete</button></td>
                        </tr> 
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <br/>
      <br/>
      <button onClick={()=>setshowAddSuggestionForm(true)} class="bg-violet-500 hover:bg-violet-400 text-white font-bold py-2 px-4 border-b-4 border-violet-700 hover:border-violet-500 rounded text-[22px]">Share your thoughts</button>
      {showAddSuggestionForm && <AddSuggestion handleAddSubmit={handleAddSubmit}/>}
      {showEditSuggestionForm && <EditSuggestion handleEditSubmit={handleEditSubmit} selectedEditData = {selectedEditData}/>}
          <br/>
          <br/>
        </>
      )
}

export default SectionWrapper(SuggestionList,"suggestion")