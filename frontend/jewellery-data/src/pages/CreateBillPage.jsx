import { Container } from '@mui/material'
import BillForm from '../components/BillForm'

const CreateBillPage = () => {
    return (
        <Container maxWidth="md" sx={{ mt: 4 }}>
            <BillForm />
        </Container>
    )
}

export default CreateBillPage
