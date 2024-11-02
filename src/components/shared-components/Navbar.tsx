import { BrainCircuitIcon } from 'lucide-react'
import { UserButton } from '@clerk/nextjs';

function Navbar() {
  return (
    <nav className='sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-x-neutral-700/80'>
      <div className='container px-4 mx-auto relative text-sm'>
        <div className='flex justify-between items-center'>
          <div className='flex items-center flex-shrink-0'>
            {/* From public folder */}
            <BrainCircuitIcon className='mr-2' />
            <span className='text-xl tracking-tight'>ClarityAI</span>
          </div>
          <div>
            <UserButton />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar