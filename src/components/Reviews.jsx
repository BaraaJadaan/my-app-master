import React from 'react'
import { CommentSection } from 'react-comments-section'
import 'react-comments-section/dist/index.css'
import { useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Reviews = () => {
  const data = []
  return (
    <Accordion style={{margin: '60px', backgroundColor:'#ffffff50', boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.2), 0 2px 10px 0 rgba(0, 0, 0, 0.19)',}}>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1a-content"
      id="panel1a-header"
    >
      <h1>Comments & Reviews</h1>
    </AccordionSummary>
    <AccordionDetails>
    <div>
      <CommentSection
       hrStyle={{ border: '0.5px solid teal' }}
       titleStyle= {{ font: '300 11px/1.4 Helvetica Neue', fontSize: '30px', fontWeight: 'bold' }}
      submitBtnStyle={{ border: '0px', backgroundColor: 'indigo' }}
      inputStyle={{ border: '1px solid rgb(208 208 208)' ,marginLeft: '20px', marginRight: '20px', borderRadius: '10px' }}
      formStyle={{ backgroundColor: '#ffffff50' }}
        currentUser={{
          currentUserId: '01',
          currentUserImg:
            'https://ui-avatars.com/api/name=Riya&background=random',
          currentUserProfile:
            'https://www.linkedin.com/in/riya-negi-8879631a9/',
          currentUserFullName: 'Baraa Jadaan'
        }}
        commentData={data}
        logIn={{
          loginLink: 'http://localhost:3000/',
          signupLink: 'http://localhost:3000/'
        }}
        onSubmitAction={(data): {
        } => console.log('check submit, ', data)}
        currentData={(data) => {
          console.log('curent data', data)
        }}
      />
    </div>
    </AccordionDetails>
  </Accordion>
    
  )
}

export default Reviews