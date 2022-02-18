import { Box, Typography, Container, Paper, Divider } from '@mui/material'
import React from 'react'

function Footer() {
  return (
    <Box sx={{
      padding: 2,
      background: 'linear-gradient(90deg, rgb(253, 245, 207) 0%, rgb(250, 161, 102) 100%)',
    }}>
      <Container>
        <Paper elevation={24} sx={{
          padding: 2,
          background: 'linear-gradient(90deg, rgb(250, 161, 102) 0%, rgb(253, 245, 207) 100%)',
          display: 'flex',
          flexDirection: 'row',
          '@media (max-width:500px)': {
            flexDirection: 'column',
          }
        }} >
          <Typography variant="h4" component="h6" sx={{ flexGrow: 1, color: 'darkgreen' }}>
            SCSA
          </Typography>
          <Divider />
          <Typography variant="subtitle1" component="div" sx={{ flexGrow: 1, color: 'darkgreen' }}>
            near Gyan mandir,<br />
            Manik prabhu temple road<br />
            Raichur, Karnataka,584103,India<br />
          </Typography>
          <Divider />
          <Typography variant="subtitle1" component="div" sx={{ flexGrow: 1, color: 'darkgreen' }}>
            Phone: 08532 - 240286<br />
            Email: scsarcr@gmail.com<br />
            Fax: +91 8532-240707<br />
          </Typography>
        </Paper>
        <Typography variant="subtitle2" component="div" sx={{ mt: 2, flexGrow: 1, color: 'green' }}>
          © Copyright SCSA Pre-University College. All Rights Reserved<br />
          Designed by Shivalinga Reddy Beecha (shivuslr41@gmail.com)(+91 - 8217678321) 24x7
        </Typography>
      </Container>
    </Box>
  )
}

export default Footer