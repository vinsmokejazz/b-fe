

import { useState } from 'react'
import { Button } from '../components/Button'
import { Card } from '../components/Card'
import { ContentModal } from '../components/ContentModal'
import { PlusIcon } from '../components/icons/PlusIcon'
import { ShareIcon } from '../components/icons/ShareIcon'
import { SideBar } from '../components/SideBar'

function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);


  return (
    <>
      <ContentModal open={modalOpen} onClose={() => setModalOpen(false)} />
      <div>
        <SideBar />
        <div className='p-4 min-h-screen ml-72 bg-gray-100  '>

          <div className='flex justify-end gap-4'>
            <Button onClick={() => { setModalOpen(true) }} text='Add Content' variant='primary' startIcon={<PlusIcon />}></Button>
            <Button text='Share brain' variant='secondary' startIcon={<ShareIcon />}></Button>
          </div>

          <div className='flex gap-6' >
            <Card type='youtube' link="https://www.youtube.com/watch?v=zqGW6x_5N0k" title='ANIMAL'></Card>
            <Card type='twitter' link='https://x.com/elonmusk/status/1812258574049157405' title='elon tweet'></Card>

          </div>
        </div>
      </div>



    </>
  )
}

export default Dashboard
