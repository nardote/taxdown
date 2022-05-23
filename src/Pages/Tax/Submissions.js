import React from "react";
import { useSelector } from "react-redux";

import {
  List,
  ListItemButton,
  Typography,
  ListItemText,
  ListItemAvatar,
  Divider,
  Card,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

import { withRouter } from "../../components/HOC/withRouter";
import CommonLayout from "../../components/Layouts/CommonLayout";

const Submissions = ({ params: { id } }) => {
  const [{ submissions } = {}] = useSelector((state) => {
    return state.taxes.taxes.filter((tax) => {
      return tax.id === id;
    });
  });

  return (
    <CommonLayout icon={<AccountBalanceIcon />} title="Submissions">
      <Card sx={{ minWidth: "300px" }}>
        {!submissions && <Typography>Not found</Typography>}

        <List sx={{ width: "100%", bgcolor: "background.paper" }}>
          {submissions &&
            submissions.map((submission) => (
              <>
                <ListItemButton alignItems="flex-start" key={submission}>
                  <ListItemAvatar>
                    <AccountCircleIcon />
                  </ListItemAvatar>

                  <ListItemText
                    primary={`${submission.name} ${submission.surname}`}
                    secondary={
                      <>
                        <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          {submission.age}
                        </Typography>
                      </>
                    }
                  />
                </ListItemButton>
                <Divider variant="inset" component="li" />
              </>
            ))}
        </List>
      </Card>
    </CommonLayout>
  );
};

export default withRouter(Submissions);
