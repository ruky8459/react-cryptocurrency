  import React, {useState} from 'react'
  import { useParams } from 'react-router-dom'
  
  const CryptoDetails = () => {
    const { coinId } = useParams()
    return (
      <div>CryptoDetails{coinId}</div>
    )
  }
  
  export default CryptoDetails