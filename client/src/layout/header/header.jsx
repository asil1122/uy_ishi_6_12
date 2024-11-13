import { Button, Container, Stack } from '@mui/material'
import React from 'react'
import { removeState } from '../../config/store'
import { useNavigate } from 'react-router-dom'

export const Header = () => {
  const navigate = useNavigate()

  const logout = () => {
    removeState('userData')
    navigate('/',{replace: true})
  }

  return (
    <Container>
    <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
      <h1>Header</h1>
      <Button variant='contained' onClick={() => logout()}>
        Log out
      </Button>
    </Stack>
    </Container>
  )
}
