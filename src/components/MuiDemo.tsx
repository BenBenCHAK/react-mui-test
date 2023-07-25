import { Stack, Button, Typography, IconButton, ButtonGroup } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import TimerIcon from '@mui/icons-material/Timer'

import { MuiChart } from './MuiChart'
import { useState } from 'react'

export const MuiDemo = () => {
    const [isRunning, setIsRunning] = useState(false)

    return (<>
        <Stack>
            <Typography variant='h1' gutterBottom>h1 Heading</Typography>
            <Typography variant='h2'>h2 Heading</Typography>
            <Typography variant='h5' gutterBottom>h5 Heading</Typography>
            <Typography variant='h6'>h6 Heading</Typography>
        </Stack>
        <Stack display={'block'} direction={'row'}>
            <ButtonGroup orientation={'vertical'} aria-label='alignment button group'>
                <Button variant='text' href='https://google.com'>GOOGLE</Button>
                <Button variant='contained' color='primary'>Contained</Button>
                <Button variant='contained' color='secondary'>Contained</Button>
                <Button variant='contained' color='error'>Contained</Button>
                <Button variant='outlined' color='warning'>Outlined</Button>
                <Button variant='outlined' color='info'>Outlined</Button>
                <Button variant='outlined' color='success'>Outlined</Button>
            </ButtonGroup>
        </Stack>
        <Stack display={'block'} spacing={2} direction={'row'} margin={2}>
            <Button variant='contained' size='small' startIcon={<SendIcon />}>hi</Button>
            <Button variant='contained' size='medium' disableElevation>hi<SendIcon />hi</Button>
            <Button variant='contained' size='large' endIcon={<SendIcon />} disableRipple>hi</Button>
            <IconButton aria-label='timer-on' onClick={() => {setIsRunning(!isRunning)}}><TimerIcon /></IconButton>
        </Stack>
        <MuiChart isRunning={isRunning} />
    </>)
}