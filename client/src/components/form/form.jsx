import { Button, Stack, TextField } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useCreateUsers } from '../../pages/home/service/mutation/useCreateUsersh'

export const Form = () => {
  const { handleSubmit, register, reset } = useForm();
  const { mutate } = useCreateUsers()

  const submit = (data) => {
    mutate(data)
    reset()
  }


  return (
    <Stack>
      <form onSubmit={handleSubmit(submit)}>
        <Stack>
          <TextField placeholder='Name' {...register('name')}/>
          <TextField placeholder='Number'{...register('number')}/>
        </Stack>
        <Button variant='contained' type='submit'>Send</Button>
      </form>
    </Stack>
  )
}
