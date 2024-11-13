import { Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { useDeleteUser } from '../../pages/home/service/mutation/useDeleteUser'
import { useEditUser } from '../../pages/home/service/mutation/useEditUser'

export const Card = ({item}) => {
  const { mutate: deleteUser } = useDeleteUser()
  const { mutate: mutateEdit } = useEditUser()

  const editUser = (id) => {
    const newName = prompt("Enter new name")
    const newNumber = prompt("Enter new number")

    if (newName && newNumber) {
      mutateEdit({
        id,
        data: { name: newName, number: newNumber },
      })
    }
  }


  return(
    <Stack  maxWidth={'500px'} border={'1px solid blue'} p={'30px'} borderRadius={'25px'} >
      <Stack border={'1px solid red'} p={'10px'} borderRadius={'15px'}>
        <Typography>{item.name}</Typography>
        <Typography>{item.number}</Typography>
      </Stack>
      <Stack mt={'20px'} direction={'row'} gap={'20px'} justifyContent={'center'} alignItems={'center'}>
        <Button onClick={() => deleteUser(item.id)} variant='contained'>delete</Button>
        <Button  onClick={() => editUser(item.id)} variant='contained'>edit</Button>
      </Stack>
    </Stack>
  )
}
