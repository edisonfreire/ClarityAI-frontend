import React from 'react'
import Link from 'next/link'

// ***** Dashboard *****
// Basic functionality of dashboard
// Profile
// Settings
// Sign out
// Start new chat
// Chat history

// ***** Immediate tasks *****
// Get a minimum viable product
// Get a ai chat working
// Make it look visually appealing

function Dashboard() {
  return (
    <div>
      <h1 className='text-2xl'>Dashboard</h1>
      <Link href='/new-chat' className='text-blue-500'>Link to Start new chat</Link>
    </div>
  )
}

export default Dashboard