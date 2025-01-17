import React from "react";
import {
  Box,
  Typography,
  FormGroup,
  FormControlLabel,
  Button,
  Stack,
  Checkbox,
} from "@mui/material";
import Link from "next/link";

import CustomTextField from "@/app/(DashboardLayout)/components/forms/theme-elements/CustomTextField";
import { login } from "@/services/auth.service";
import BaseSnackbar from "@/components/snackbar/Base";
import CustomSnackbar from "@/components/snackbar/Custom";
import { AxiosError } from "axios";
import { ResponseApi } from "@/interfaces/api";
import { useRouter } from "next/navigation";
import routes from "@/utils/routes";
import { saveUserToken } from "@/services/localstorage.service";

interface loginType {
  title?: string;
  subtitle?: JSX.Element | JSX.Element[];
  subtext?: JSX.Element | JSX.Element[];
}

const AuthLogin = ({ title, subtitle, subtext }: loginType) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [snackbarMessage, setSnackbarMessage] = React.useState("");
  const [snackbarSeverity, setSnackbarSeverity] = React.useState<"error" | "warning" | "info" | "success">("info");

  const router = useRouter();


  const manageSnackBar = (open: boolean, message?: string, severity?: "error" | "warning" | "info" | "success") => {
    setOpenSnackbar(open);
    if (message) setSnackbarMessage(message);
    if (severity) setSnackbarSeverity(severity);
  }

  const handleSubmit = async () => {
    try {
      const userData = await login(email, password);
      manageSnackBar(true, "Sesión iniciada correctamente", "success");
      saveUserToken(userData.token);
      setTimeout(() => {
        router.push(routes.products);
      }, 1000);
    } catch (error) {
      if (error instanceof AxiosError) {
        const axiosError = error as AxiosError<ResponseApi<null>>;
        manageSnackBar(true, axiosError.response?.data.message || '', "error");
        console.error(axiosError);
      } else {
        manageSnackBar(true, "Ocurrió un error inesperado", "error");
        console.error(error);
      }
    }
  }


  return (
  <>
    {title ? (
      <Typography fontWeight="700" variant="h2" mb={1}>
        {title}
      </Typography>
    ) : null}

    {subtext}

    <Stack>
      <Box>
        <Typography
          variant="subtitle1"
          fontWeight={600}
          component="label"
          htmlFor="username"
          mb="5px"
        >
          Username
        </Typography>
        <CustomTextField variant="outlined" fullWidth value={email} onChange={(e:any) => setEmail(e.target.value)}  />
      </Box>
      <Box mt="25px">
        <Typography
          variant="subtitle1"
          fontWeight={600}
          component="label"
          htmlFor="password"
          mb="5px"
        >
          Password
        </Typography>
        <CustomTextField type="password" variant="outlined" fullWidth value={password} onChange={(e:any) => setPassword(e.target.value)} />
      </Box>
      <Stack
        justifyContent="space-between"
        direction="row"
        alignItems="center"
        my={2}
      >
        <FormGroup>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Remeber this Device"
          />
        </FormGroup>
        <Typography
          component={Link}
          href="/"
          fontWeight="500"
          sx={{
            textDecoration: "none",
            color: "primary.main",
          }}
        >
          Forgot Password ?
        </Typography>
      </Stack>
    </Stack>
    <Box>
      <Button
        color="primary"
        variant="contained"
        size="large"
        fullWidth
        type="submit"
        onClick={handleSubmit}
      >
        Sign In
      </Button>
    </Box>
    {subtitle}
    <CustomSnackbar 
      isOpen={openSnackbar}
      alertSeverity={snackbarSeverity}
      alertTitle={snackbarMessage}
      handleClose={() => manageSnackBar(false)}
      origin={{horizontal: 'center', vertical: 'top' }}
    />
  </>
  )
}

export default AuthLogin;
