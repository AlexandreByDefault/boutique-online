import React from 'react'

type Props = {}

const about = (props: Props) => {
  return (
    <div className='container'>
      <p>This Page was made with the FakeStopeAi for my portfolio</p>
      <style jsx>
        {
          `.container{
            height:90vh;
            text-align:center;
            display:flex;
            justify-content:center;
            align-items:center;
            margin:auto;
            padding:initial;
          }`
        }
      </style>
    </div>
  )
}

export default about
