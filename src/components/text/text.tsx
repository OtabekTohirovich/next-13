import { TextType } from '@/interface'
import React, { FC } from 'react'
import style from './text.module.css'

const Text: FC<TextType> = ({title}) => {
  return (
    <div className={style.text}>{title}</div>
  )
}

export default Text