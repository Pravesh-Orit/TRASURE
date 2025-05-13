import React from "react";
import { useSelector } from "react-redux";
import CustomerOnboarding from "./customer/CustomerOnboarding";
import ProviderOnboarding from "./provider/ProviderOnboarding";
import { Box, Container, Paper, Typography } from "@mui/material";

const Onboarding = () => {
  const { user } = useSelector((state) => state.auth);

  if (!user) return null;

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "grey.50",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: { xs: 1, sm: 2 },
      }}
    >
      <Container maxWidth="sm" disableGutters>
        <Paper
          elevation={6}
          sx={{
            borderRadius: 3,
            p: { xs: 2, sm: 4 },
            mt: { xs: 2, sm: 6 },
            mb: { xs: 2, sm: 6 },
            boxShadow: 4,
          }}
        >
          <Typography
            variant="h4"
            align="center"
            fontWeight={700}
            sx={{
              mb: { xs: 3, sm: 4 },
              fontSize: { xs: "1.7rem", sm: "2.2rem" },
            }}
          >
            Onboarding
          </Typography>
          {user.role === "provider" ? (
            <ProviderOnboarding />
          ) : (
            <CustomerOnboarding />
          )}
        </Paper>
      </Container>
    </Box>
  );
};

export default Onboarding;
