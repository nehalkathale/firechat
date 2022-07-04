import { Button } from '@material-ui/core'
import React from 'react'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { authentication } from '../Firebase'

function Signout() {
  return (
    <div>
        return (
        <div style={{
            display: 'flex', justifyContent: 'center', position: 'fixed', width: '100%', backgroundColor: '#FAFAFA', top: 0, borderBottom: 'solid 1px lightgray', zIndex: '10'
        }}>
            <Button style={{ padding: '20px', fontSize: '15px', borderRadius: '0', fontWeight: '600' }} onClick={() => authentication.signOut()}>Sign Out</Button>
        </div>
    )
    </div>
  )
}

export default Signout