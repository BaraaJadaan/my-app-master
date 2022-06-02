import {useParams} from "react-router-dom";
import React from 'react'

export default function ProductPage() {
    const {id} = useParams()

  return (
    <div className="title">ProductPage - {id}</div>
  )
}
