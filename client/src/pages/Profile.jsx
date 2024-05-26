import React from 'react'
import { useParams } from 'react-router-dom'

export default function Profile() {
  const { profileID } = useParams();
  return (
    <div>{profileID}</div>
  )
}
