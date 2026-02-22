import { Container, Grid } from '@mui/material'
import { useState } from 'react'
import API from '../services/api'
import BillCard from '../components/BillCard'
import { useEffect } from 'react'

const BillsListPage = () => {
    const [bills, setBills] = useState([])

    useEffect(() => {
        API.get("/bills").then(response => {
            console.log("response.data.response==>", response.data.response)
            setBills(response.data.response)
        })
    }, [])

    return (
        <Container sx={{ mt: 4 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <BillCard bills={bills} />
                </Grid>

            </Grid>
        </Container>
    )
}

export default BillsListPage
