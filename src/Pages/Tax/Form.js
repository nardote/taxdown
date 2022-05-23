import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

import { Button, TextField, Box } from "@mui/material";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

import CommonLayout from "../../components/Layouts/CommonLayout";
import { withRouter } from "../../components/HOC/withRouter";
import { addSubmission } from "../../features/taxes/taxesSlice";

const Form = ({ params: { id }, navigate }) => {
  const [inputs, setInputs] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`/inputFields`);
      setInputs(data);
    })();
  }, [setInputs]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    await axios.post(`/taxes/${id}/form`, {
      firstName: "Fred",
      lastName: "Flintstone",
    });
    dispatch(addSubmission({ ...Object.fromEntries(data.entries()), id }));

    navigate("/taxes", { replace: true });
  };
  return (
    <CommonLayout icon={<AccountBalanceIcon />} title="Tax Form">
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        {inputs.map(({ id, label, placeholder, type, maxLength }) => (
          <TextField
            margin="normal"
            required
            fullWidth
            label={label}
            name={id}
            type={type}
            placeholder={placeholder}
            inputProps={maxLength && { maxLength: maxLength }}
            key={id}
          />
        ))}

        <Box>
          <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
            Submit
          </Button>
        </Box>
      </Box>
    </CommonLayout>
  );
};

export default withRouter(Form);
