import { Card, CardContent, Container, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'

const BillCard = ({ bills }) => {
    console.log("billCard==>", bills)

    return (
        <Container sx={{ mt: 4 }}>
            <Typography variant='h5'>Bills List</Typography>

            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Bill No</TableCell>
                            <TableCell>Customer Name</TableCell>
                            <TableCell>Mobile Number</TableCell>
                            <TableCell >Total Amount</TableCell>
                            <TableCell >Date</TableCell>
                            <TableCell>Items</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            {bills.map((bill) => {
                                return (
                                    <TableRow hover>
                                        {/* <TableCell>
                                            <IconButton
                                                size="small"
                                                onClick={() => {
                                                    setOpenRow(openRow === bill._id ? null : bill._id)
                                                }}>

                                            </IconButton>
                                        </TableCell> */}
                                        <TableRow key={bill.billNumber}>
                                            <TableCell>{bill.billNumber}</TableCell>
                                            <TableCell>{bill.customerName}</TableCell>
                                            <TableCell>{bill.mobileNumber}</TableCell>
                                            <TableCell>{bill.totalAmount}</TableCell>
                                            {/* <TableCell align='center'>{bill.date}</TableCell> */}
                                        </TableRow>
                                    </TableRow>
                                )
                            })}
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Container >

    )
}

export default BillCard



