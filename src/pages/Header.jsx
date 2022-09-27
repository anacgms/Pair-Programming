import React from 'react'
import * as S from '../styles/HeaderStyle'

export default function Header() {
  return (
    <S.Container>
    <S.Contain>
      <h2>RC</h2>
      <ul>
        <li>About</li>
        <li>Recipes</li>
        <li>Subscribe</li>
      </ul>
    </S.Contain>
    <h1>Recipes</h1>
    </S.Container>
  )
}
