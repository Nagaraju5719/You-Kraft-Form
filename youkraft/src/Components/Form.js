import {  Form } from "formik";
import Textfield from "./FormsUI/Textfield/Index";
import Button from "./FormsUI/Button/Index";
import { Grid } from "@mui/material";

const DataForm=()=>{
    return(
        <Form>
        <Grid container spacing={2} p={"80px"} className={"borderStyle"}>
          <Grid item xs={12}>
            <Textfield name="Name" label="Name" />
          </Grid>
          <Grid item xs={12}>
            <Textfield name="Age" label="Age" />
          </Grid>
          <Grid item xs={12}>
            <Textfield name="Email" label="Email" />
          </Grid>
          <Grid item xs={12}>
            <Textfield name="phoneNumber" label="Phone Number" />
          </Grid>
        </Grid>
        <Button>Submit Form</Button>
      </Form>
    )
}

export default DataForm
