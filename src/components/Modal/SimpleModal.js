import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { Field } from "formik";
import AppForm from "../app-form/AppForm";
import "../Product/Product.css";

function getModalStyle() {
  return {
    top: `${50}%`,
    left: `${50}%`,
    transform: `translate(-${50}%, -${50}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal({
  open,
  handleClose,
  initialValues,
  handleSubmit,
  response,
}) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  return (
    <div>
      <Modal open={open} onClose={() => handleClose()}>
        <AppForm initialValues={initialValues} handleSubmit={handleSubmit}>
          <div className="single_product">
            <div style={modalStyle} className={classes.paper}>
              <div class="name_fields">
                <label>Product Name</label>
                <Field name="productName" type="text" />
              </div>
              <div class="name_fields">
                <label>Product Description</label>
                <Field name="productDescription" type="text" />
              </div>
              <div class="name_fields">
                <label>Product Price</label>
                <Field name="productPrice" type="number" />
              </div>
              <div>
                <button style={{ padding: 5 }}>Add Product</button>
              </div>
              {response.data && (
                <p
                  style={{
                    margin: "10px 0",
                    color: "green",
                    fontSize: "1.2rem",
                  }}
                >
                  {response.data.message}
                </p>
              )}
            </div>
          </div>
        </AppForm>
      </Modal>
    </div>
  );
}
