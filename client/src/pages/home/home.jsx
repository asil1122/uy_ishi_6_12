import React from 'react'
import { useGetUsers } from './service/query/useGetUsers'
import { Container, Stack } from '@mui/material'
import { Form } from '../../components/form'
import { Card } from '../../components/card'

export const Home = () => {

  const { data, isLoading } = useGetUsers()


  return (
    <Container>
      <Stack>
        <Form />
        <Stack pt={'30px'}>
          {data?.map((item)=> (
            <Stack key={item.id}>
              <Card item={item}/>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Container>
  )
}
