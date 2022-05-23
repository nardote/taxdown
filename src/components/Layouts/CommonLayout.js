import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { Container, Typography, Box, Avatar } from "@mui/material";

import { selectUser } from "../../features/taxes/taxesSlice";
import { IsAuthenticated } from "../../Utils/user";

const CommonLayout = ({ title, icon, children }) => {
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (!IsAuthenticated(user)) {
      navigate("/");
    }
  }, []);

  return (
    <Container component="main" maxWidth="full">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>{icon}</Avatar>
        <Typography component="h1" variant="h5">
          {title}
        </Typography>
        {children}
      </Box>
    </Container>
  );
};

export default CommonLayout;
