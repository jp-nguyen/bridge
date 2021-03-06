import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import { Typography, Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


export default function PeerResumeReview() 
{
    const [pageNumber, setPageNumber] = useState(1);
    const [numPages, setNumPages] = useState(null);

    function onDocumentLoadSuccess({numPages}) {
      console.log("David is wrong and should be ashamed.");
      setNumPages(numPages);
    }

    return (
      <div >
        <Typography component="h2" variant="h2" >Review Resume Below!</Typography>
        <Grid container spacing={3}container
  direction="row"
  justify="center"
  alignItems="stretch">
        <Grid item xs={3}>
          <Card >
          
            <Document
              file="dummy.pdf"
              
              onLoadSuccess={onDocumentLoadSuccess}
            >
              <Page pageNumber={pageNumber} />
            </Document>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card >
            <Typography component="H2" Variant="h2">Postion Requirements</Typography>
            <Typography>Insert Job listing credentials here</Typography>
          </Card>
        </Grid>
      </Grid>
      <p></p>
        <Button
            type="submit"
            size="medium"
            variant="contained"
            color="green"   
        >
            Ready!
        </Button>
        <p> </p>
        <Button
            type="submit"
            size="medium"
            variant="contained"
            color="red"  
        >
            Needs Work
        </Button>
        <p>Page {pageNumber} of {numPages}</p>
      </div>
    );
}