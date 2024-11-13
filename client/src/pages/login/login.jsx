import { Button, Container, Stack, TextField } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'
import { loadState, saveState } from '../../config/store'
import { useCreateUsers } from '../../service/mutation/useCreateUsers'
import { Link, useNavigate } from 'react-router-dom'

export const Login = () => {
  const { handleSubmit, register,reset } = useForm()
  const { mutate, isError } = useCreateUsers()
  const navigate = useNavigate();
  const user = loadState('userData');
  

  const submit = (data) => {
    mutate(data, {
      onSuccess: (data) => {
        navigate("/app")
      },
      onError:((err)=> {
        console.log(err);
        
      })
    });
    reset()

  };


  return (
    <Container>
      <Stack>
        <form  onSubmit={handleSubmit(submit)}>
          <Stack>
            <TextField variant='outlined' placeholder='email' {...register('email')}/>
            <TextField variant='outlined' placeholder='password' {...register('password')}/>
          </Stack>
          <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
            <Button variant='contained' type='submit'>send</Button>
            <Link to={'/register'}>
              <Button variant='contained'>Register</Button>
            </Link>
          </Stack>
        </form>
      </Stack>
    </Container>
  )
}
