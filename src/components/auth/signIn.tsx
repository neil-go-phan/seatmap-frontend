import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import Cookies from 'js-cookie'
import cryptoJS from 'crypto-js';
import { _VAR } from "src/constants/variable";
import {
  Title,
  Info,
  Line,
  Modal,
  InputCluster,
  Input,
  ErrorMessage,
  SubmitBtn,
  ErrorMessageFromSever,
} from "src/components/auth/style";

interface SignInFormProperty {
  username: string;
  password: string;
}

interface Props {
  handleSignInClose: () => void
}

const SignIn: React.FC<Props> = (props: Props) => {
  const [errorMessage, setErrorMessage] = useState({
    trigger: false,
    message: "",
  });
  const schema = yup.object().shape({
    username: yup
      .string()
      .required("Username must not be empty")
      .min(8, "Username must have 8-16 character")
      .max(16, "Username must have 8-16 character")
      .matches(
        _VAR.REGEX_USENAME_PASSWORD,
        "Username must not contain special character like @#$^..."
      ),
    password: yup
      .string()
      .required("Password must not be empty")
      .min(8, "Password must have 8-16 character")
      .max(16, "Password must have 8-16 character")
      .matches(
        _VAR.REGEX_USENAME_PASSWORD,
        "Password must not contain special character like @#$^..."
      ),
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignInFormProperty>({
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<SignInFormProperty> = async (data) => {
    let { username, password } = data;
    password = cryptoJS.SHA512(password).toString()
    try {
      const res = await axios.post(`${process.env.REACT_APP_BASE_URL}auth/sign-in`, {
        username,
        password,
      });
      Cookies.set('access_token', res.data.accessToken);
      Cookies.set('refresh_token', res.data.refreshToken);
      setErrorMessage({
        trigger: false,
        message: res.data.message,
      });
      props.handleSignInClose()
    } catch (error: any) {
      setErrorMessage({
        trigger: true,
        message: error.response.data.message,
      });
    }
    reset({ password: "" });
    
  };
  return (
    <Modal >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Title>Sign in</Title>
        <Line />
        <InputCluster>
          <Info> Username </Info>
          <Input
            {...register("username")}
            placeholder="Type your username"
            type="text"
            required
          />
          {errors.username && (
            <ErrorMessage>{errors.username.message}</ErrorMessage>
          )}
        </InputCluster>
        <InputCluster>
          <Info className="info"> Password </Info>
          <Input
            {...register("password")}
            placeholder="Type your password"
            type="password"
            required
          />
          {errors.password && (
            <ErrorMessage>{errors.password.message}</ErrorMessage>
          )}
        </InputCluster>

        {errorMessage.trigger && (
          <ErrorMessageFromSever>{errorMessage.message}</ErrorMessageFromSever>
        )}
        <SubmitBtn type="submit">Sign in</SubmitBtn>

      </form>
    </Modal>
  );
};

export default SignIn;
