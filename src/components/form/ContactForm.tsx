import { useForm, SubmitHandler } from "react-hook-form";
import {
  Box,
  Typography,
  TextField,
  Button,
  FormControlLabel,
  FormHelperText,
} from "@mui/material";

import { Form } from "../../misc/type";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Form>();

  const onSubmit: SubmitHandler<Form> = (formData) => {
    alert(`
    Hi, ${formData.username}, we received your feedback: \n
    ${formData.feedback}
  `);
    reset();
  };

  return (
    <Box
      sx={{
        mt: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h2" component="h2" sx={{ mb: 4, color: "red.900" }}>
        Share Your Feedback
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          display: "flex",
          flexDirection: "column",
          bgcolor: "white",
          width: "30vw",
        }}
      >
        <FormControlLabel
          control={
            <TextField
              {...register("username", {
                required: "Your name is required",
              })}
              label="Your name"
              variant="outlined"
              fullWidth
              autoComplete="name"
              margin="normal"
            />
          }
          labelPlacement="start"
          label={undefined}
        />
        {errors.username && (
          <FormHelperText sx={{ color: "error.main" }}>
            {errors.username.message}
          </FormHelperText>
        )}

        <FormControlLabel
          control={
            <TextField
              {...register("email", {
                required: "Your email is required",
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              })}
              label="Your Email"
              variant="outlined"
              fullWidth
              autoComplete="email"
              margin="normal"
            />
          }
          labelPlacement="start"
          label={undefined}
        />
        {errors.email && (
          <FormHelperText sx={{ color: "error.main" }}>
            {errors.email.message}
          </FormHelperText>
        )}

        <FormControlLabel
          control={
            <TextField
              {...register("phone")}
              label="Your phone number"
              type="tel"
              variant="outlined"
              fullWidth
              autoComplete="tel"
              margin="normal"
            />
          }
          labelPlacement="start"
          label={undefined}
        />

        <FormControlLabel
          control={
            <TextField
              {...register("feedback")}
              label="Your Feedback"
              variant="outlined"
              fullWidth
              multiline
              rows={5}
              margin="normal"
            />
          }
          labelPlacement="start"
          label={undefined}
        />

        <Button
          type="submit"
          variant="contained"
          sx={{ mt: 4, margin: "0 auto" }}
        >
          Send Feedback
        </Button>
      </Box>
    </Box>
  );
};

export default ContactForm;
