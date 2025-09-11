import React from 'react'
import Header from './Header'
import Footer from './Footer'

const TopHeaderAndFooter = ({children} : {children : React.ReactNode}) => {
  return (
    <div className='h-full'>
        <Header />
        {/* Main content area */}
        <main className="">
            {children}
        </main>
        <Footer />
    </div>
  )
}

export default TopHeaderAndFooter