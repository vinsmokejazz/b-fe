

import { useEffect, useState } from 'react'
import { Button } from '../components/Button'
import { Card } from '../components/Card'
import { ContentModal } from '../components/ContentModal'
import { PlusIcon } from '../components/icons/PlusIcon'
import { ShareIcon } from '../components/icons/ShareIcon'
import { SideBar } from '../components/SideBar'
import { useContent } from '../hooks/useContent'
import axios from 'axios'
import { BACKEND_URL } from '../config'

function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const { contents, referesh } = useContent();

  useEffect(() => {
    referesh();
  }, [modalOpen])


  return (
    <>
      <ContentModal open={modalOpen} onClose={() => setModalOpen(false)} />
      <div>
        <SideBar />
        <div className='p-4 min-h-screen ml-72 bg-gray-100  '>

          <div className='flex justify-end gap-4'>
            <Button onClick={() => { setModalOpen(true) }} text='Add Content' variant='primary' startIcon={<PlusIcon />}></Button>
            
            <Button onClick={async () => {
              const response = await axios.post(`${BACKEND_URL}/api/v1/brain/share`, {
                share: true

              }, {
                headers: {
                  "Authorization": localStorage.getItem("token")
                }
              });
              const shareUrl = `http://localhost:5173/share/${response.data.hash}`;
              alert(shareUrl);


            }} text='Share brain' variant='secondary' startIcon={<ShareIcon />}></Button>
          </div>

          <div className='flex gap-6 flex-wrap' >
            {contents.map(({ type, link, title }) => <Card
              type={type}
              link={link}
              title={title}
            />
            )}


          </div>
        </div>
      </div>



    </>
  )
}

export default Dashboard
