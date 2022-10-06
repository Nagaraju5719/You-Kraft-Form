import React from "react";
import { useState } from "react";
import Header from "./Components/Header/Index";
import { Formik } from "formik";
import DataForm from "./Components/Form";
import DisplayData from "./Components/DisplayData";
import { Grid, Button } from "@mui/material";

import { INITIAL_FORM_STATE } from "./Data/FormData";
import { FORM_VALIDATION } from "./Validation/Validation";
import "./App.css";

const App = () => {
  const [formData, setFormData] = useState([]);
  const [button, setButton] = useState("Submit Form");

  return (
    <Grid
      direction={"column"}
      justifyContent="center"
      alignItems="center"
      container
      className="container"
    >
      <Grid item textAlign={"center"}>
        <Header />
      </Grid>
      <Grid item>
        <Formik
          initialValues={{ ...INITIAL_FORM_STATE }}
          validationSchema={FORM_VALIDATION}
          onSubmit={(values) => {
            setFormData([...formData, values]);
            setButton("Previous");
          }}
        >
          {button === "Previous" ? (
            <>
              <DisplayData data={formData} />
              <Button
                variant="contained"
                color="primary"
                onClick={() => setButton("Submit Form")}
              >
                Previous
              </Button>
            </>
          ) : (
            <DataForm button={button} />
          )}
        </Formik>
      </Grid>
    </Grid>
  );
};

export default App;
