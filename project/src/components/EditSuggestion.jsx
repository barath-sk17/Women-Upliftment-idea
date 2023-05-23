import React from 'react'
import { motion } from "framer-motion"

import { styles } from '../styles';


import { fadeIn,textVariant } from '../utils/motion'


export default function EditSuggestion({handleEditSubmit, selectedEditData}){
    return(
        <>
        <br/>
        <br/>
        <br/>
        <br/>
        <h2 className='text-white text-[32px] text-center font-medium'>like to Edit Your Suggestion :) Here you go!!</h2>
        <br/>
        <br/>
        <div className="bg-black-100 p-8 rounded-2xl flex items-center flex-wrap justify-around">
            <div>
                
                <br/>
                <br/>
                <form onSubmit={(e) =>handleEditSubmit(e, selectedEditData.suggestion_id)}>
                    <label className='flex flex-col'><span className='text-white font-medium mb-4 text-[22px]'>First Name</span>
                        <input defaultValue={selectedEditData.first_name} className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium' name="first_name" type="text" placeholder="Sam"></input>
                    </label>
                    <br/><br/>
                    <label className='flex flex-col'><span className='text-white font-medium mb-4 text-[22px]'>Last Name</span>
                        <input defaultValue={selectedEditData.last_name} className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium' name="last_name" type="text" placeholder="Curran"></input>
                    </label>
                    <br/><br/>
                    <label className='flex flex-col'><span className='text-white font-medium mb-4 text-[22px]'>Suggestion</span>
                    <textarea defaultValue={selectedEditData.suggestion} className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium' name="suggestion" placeholder="* just open your heart, don't stop for anyone" cols="50" rows="8"></textarea>
                    </label>
                    <br/><br/>
                    <button type="submit" class="bg-violet-500 hover:bg-violet-400 text-white font-bold py-2 px-4 border-b-4 border-violet-700 hover:border-violet-500 rounded text-[18px]">SAVE EDIT</button>
                    <br/><br/>
                </form>
            </div>
        </div>
        </>
    )
}
