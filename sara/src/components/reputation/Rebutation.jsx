import { Stack } from '@mui/material'
import './rebutation.scss'
import RebutationCard from './RebutationCard'

const Rebutation = () => {
    return (
        <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
            sx={{ padding: "15px", margin: "10px" }}

        >
            <h1 className="heading">Our Reputation</h1>
            <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={2}
            >
                <RebutationCard />
                <RebutationCard />
                <RebutationCard />
            </Stack>
        </Stack>
    )
}

export default Rebutation