import React, { useState, useEffect } from 'react'
import fire from '../../config/fire-config'
import { api } from '../../config/api'

const ReadSymbol = (props: any) => {
  const currentApi = api
  const activeUser = props.user
  const activeUid = props.uid
  const [symbols, setSymbols] = useState<any[]>([])
  const [loading, isLoading] = useState(true)

  useEffect(() => {
    isLoading(true)
    fire
      .firestore()
      .collection('users')
      .onSnapshot((snap: any) => {
        const tmp = snap.docs.map((doc: any) => ({
          id: doc.id,
          ...doc.data(),
        }))
        setSymbols(tmp)
        isLoading(false)
      })
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }
  return (
    <div
      style={{
        textAlign: 'left',
        display: 'flex',
        flexDirection: 'column',
        margin: '0 20%',
      }}
    >
      ActiveUser: {activeUser} <br />
      UID: {activeUid} <br />
      API: {currentApi}
      Symbol: {symbols}
    </div>
  )
}

export default ReadSymbol
