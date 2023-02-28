import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import md5 from "md5";
import axios from "axios";
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

interface SignUpFormProperty {
  full_name: string;
  username: string;
  password: string;
  password_confirmation?: string;
}

interface Props {
  handleSignUpClose : ()=>void
}

const SignUp: React.FC<Props> = (props: Props) => {
  const [errorMessage, setErrorMessage] = useState({
    trigger: false,
    message: "",
  });
  const schema = yup.object().shape({
    full_name: yup
      .string()
      .required("Full name must not be empty")
      .min(8, "Full name must have 8-50 character")
      .max(50, "Full name must have 8-50 character")
      .matches(
        _VAR.REGEX_FULLNAME,
        "Full name must not contain special character like @#$^..."
      ),
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
    password_confirmation: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords not match"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormProperty>({
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<SignUpFormProperty> = async (data) => {
    let { username, password, full_name } = data;
    password = md5(password);
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BASE_URL}auth/sign-up`,
        {
          username,
          password,
          full_name,
        }
      );
      if (!res.data.success) {
        setErrorMessage({ trigger: true, message: res.data.message });
      } else {
        // router.push('/sign-up-success');
        setErrorMessage({ trigger: false, message: res.data.message });
      }
    } catch (error: any) {
      setErrorMessage({
        trigger: true,
        message: error.response.data.message,
      });
    }
    props.handleSignUpClose()
  };
  return (
    <Modal>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Title>Sign up</Title>
        <Line />

        <InputCluster>
          <Info> Full name </Info>
          <Input
            {...register("full_name")}
            placeholder="Type your name"
            type="text"
            required
          />
          {errors.full_name && (
            <ErrorMessage>{errors.full_name.message}</ErrorMessage>
          )}
        </InputCluster>

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
          <Info> Password </Info>
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

        <InputCluster>
          <Info> Comfirm password </Info>
          <Input
            {...register("password_confirmation")}
            placeholder="Type your password again"
            type="password"
            required
          />
          {errors.password_confirmation && (
            <ErrorMessage>{errors.password_confirmation.message}</ErrorMessage>
          )}
        </InputCluster>

        {errorMessage.trigger && (
          <ErrorMessageFromSever>{errorMessage.message}</ErrorMessageFromSever>
        )}
        <ErrorMessageFromSever>{errorMessage.message}</ErrorMessageFromSever>
        <SubmitBtn type="submit">Sign up</SubmitBtn>
      </form>
    </Modal>
  );
};

export default SignUp;
