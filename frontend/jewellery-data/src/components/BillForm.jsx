import { Box, Button, Grid, MenuItem, Paper, TextField, Typography } from '@mui/material'
import API from '../services/api';
import { toast } from 'react-toastify';
import { useState } from 'react';

const BillForm = () => {
    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState({
        customerName: "",
        mobileNumber: "",
        address: "",
        discount: 0,
        items: [
            {
                productName: "",
                metalType: "Gold",
                weight: "",
                quantity: "",
                pricePerGram: ""

            }
        ]
    })

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === "mobileNumber") {
            if (value.length > 10 && (!/^\d+$/.test(value))) {
                toast.error("Mobile Number should be of 10 digits")
                return;
            }
        }

        setForm({
            ...form,
            [name]: value
        })
    }

    const handleItemChange = (index, event) => {
        const updatedItems = [...form.items];
        updatedItems[index][event.target.name] = event.target.value

        setForm({
            ...form,
            items: updatedItems
        })
    }

    const addItem = () => {
        setForm({
            ...form,
            items: [
                ...form.items,
                {
                    productName: "",
                    metalType: "Gold",
                    weight: "",
                    quantity: "",
                    pricePerGram: "",
                }
            ]
        })
    }

    const handleRemoveItem = (indexToRemove) => {
        if (form.items.length === 1) {
            return
        }

        const updatedItems = form.items.filter(
            (_item, index) => index !== indexToRemove
        )

        setForm({
            ...form,
            items: updatedItems
        })
    }

    const handleSubmit = async () => {
        try {
            setLoading(true)

            const response = await API.post("/bills", form)
            toast.success("Bill Created Successfully")

            setForm({
                customerName: "",
                mobileNumber: "",
                address: "",
                discount: 0,
                items: [
                    {
                        productName: "",
                        metalType: "Gold",
                        weight: "",
                        quantity: "",
                        pricePerGram: ""
                    }
                ]
            })
        } catch (error) {
            console.log('error from catch==>', error)
            toast.error("Error while creating bill")
        } finally {
            setLoading(false)
        }
    }

    return (
        <Paper sx={{ padding: 4 }}>
            <Typography variant='h5' gutterBottom>
                Create Bill
            </Typography>

            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <TextField label="Customer Name" name="customerName" onChange={handleChange} fullWidth />
                </Grid>
                <Grid item xs={6}>
                    <TextField label="Mobile Number" name="mobileNumber" onChange={handleChange} fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <TextField label="Address" name="address" onChange={handleChange} fullWidth />
                </Grid>

                {/* // Form Fields mapping will do  */}
                {form?.items?.map((_item, index) => {
                    return (
                        <Box key={index}>
                            <Grid item xs={3}>
                                <TextField fullWidth label="Product Name" name="productName" onChange={(event) => handleItemChange(index, event)} />
                            </Grid>
                            <Grid item xs={3}>
                                <TextField select fullWidth label="Metal Type" name="metalType" onChange={(event) => handleItemChange(index, event)} >
                                    <MenuItem value="Gold">Gold</MenuItem>
                                    <MenuItem value="Silver">Silver</MenuItem>
                                </TextField>
                            </Grid>
                            <Grid item xs={2}>
                                <TextField fullWidth label="Weight" name="weight" type='number' onChange={(event) => handleItemChange(index, event)} />
                            </Grid>
                            <Grid item xs={2}>
                                <TextField fullWidth label="Quantity" name="quantity" type='number' onChange={(event) => handleItemChange(index, event)} />
                            </Grid>
                            <Grid item xs={3}>
                                <TextField fullWidth label="Price Per Gram" name="pricePerGram" type='number' onChange={(event) => handleItemChange(index, event)} />
                            </Grid>

                            <Grid item xs={1} display="flex" alignItems="center">
                                <Button variant='outlined' color='error'
                                    onClick={() => handleRemoveItem(index)}
                                >
                                    Remove Item
                                </Button>
                            </Grid>
                        </Box>

                    )
                })}

                <Grid item xs={12}>
                    <Button variant='contained' color='primary' onClick={addItem}>
                        Add Item
                    </Button>
                </Grid>



                <Grid item xs={12}>
                    <TextField label="Discount" name="discount" type='number' onChange={handleChange} fullWidth />
                </Grid>

                <Grid item xs={12}>
                    <Button variant='contained' color='primary' onClick={handleSubmit}>
                        Submit Bill
                    </Button>
                </Grid>


            </Grid>
        </Paper >
    )
}

export default BillForm

