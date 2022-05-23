import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  List,
  ListItemButton,
  Typography,
  ListItem,
  ListItemAvatar,
  Divider,
  Card,
  Button,
  Box,
} from "@mui/material";

import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

import { selectTaxes } from "../../features/taxes/taxesSlice";
import CommonLayout from "../../components/Layouts/CommonLayout";

const Taxes = () => {
  const taxes = useSelector(selectTaxes);

  return (
    <CommonLayout icon={<AccountBalanceIcon />} title="Taxes">
      <Card sx={{ minWidth: "300px" }}>
        <List sx={{ width: "100%", bgcolor: "background.paper" }}>
          {taxes.map((tax) => (
            <React.Fragment key={tax.id}>
              <ListItemButton alignItems="flex-start">
                <ListItemAvatar>
                  <AccountBalanceWalletIcon />
                </ListItemAvatar>

                <ListItem sx={{ display: "block" }}>
                  <>
                    <Typography
                      component="span"
                      variant="h5"
                      color="text.primary"
                      sx={{ display: "block" }}
                    >
                      {tax.name}
                    </Typography>
                    <Typography
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Year: {tax.year}
                    </Typography>
                    <Box>
                      <Button
                        component={Link}
                        to={`/tax/${tax.id}`}
                        variant="contained"
                      >
                        Add
                      </Button>

                      <Button
                        component={Link}
                        to={`/tax/${tax.id}/submissions`}
                      >
                        List submissions
                      </Button>
                    </Box>
                  </>
                </ListItem>
              </ListItemButton>
              <Divider variant="inset" />
            </React.Fragment>
          ))}
        </List>
      </Card>
    </CommonLayout>
  );
};

export default Taxes;
