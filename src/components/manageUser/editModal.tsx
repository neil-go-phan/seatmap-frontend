import React, { useEffect, useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { _VAR } from "src/constants/variable";
import { useForm, SubmitHandler } from "react-hook-form";
import axiosClient from "src/helpers/axiosClient";
import Swal from "sweetalert2";
import {
  ErrorMessage,
  ErrorMessageFromSever,
  Info,
  Input,
  InputCluster,
  Line,
  Modal,
  RoleOption,
  RoleSelect,
  SubmitBtn,
  Title,
} from "./style";

interface EditFormProperty {
  full_name: string;
  role: string;
}

interface Role {
  ID: number;
  RoleName: string;
}

interface Props {
  fullName: string;
  defaultRole: string;
  username: string;
  handleEditModelClose: () => void;
  handleEditUser: (username: string, full_name: string, role: string) => void;
}

const EditModal: React.FC<Props> = (props: Props) => {
  const [errorMessage, setErrorMessage] = useState({
    trigger: false,
    message: "",
  });
  const [roles, setRoles] = useState<Array<Role>>([]);
  useEffect(() => {
    const getRoles = async () => {
      let roleArray: Array<Role> = [];
      try {
        const { data } = await axiosClient.get(`/role/roles`);
        data.forEach((role: Role) => {
          if (role.RoleName !== "Admin") {
            roleArray.push(role);
          }
        });
        setRoles(roleArray);
      } catch (error: any) {
        Swal.fire({
          title: "Error",
          text: "Error when trying to get roles",
          icon: "error",
          confirmButtonText: "OK",
        });
        props.handleEditModelClose();
      }
    };
    getRoles();
  }, [props]);
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
    role: yup.string().oneOf(
      roles.map((role) => role.RoleName),
      "Role invalid"
    ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditFormProperty>({
    // cant not set default role, and a bug show up when select a invalid role 
    defaultValues: schema.cast({
      full_name: props.fullName,
      role: "CEO"
    }),
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<EditFormProperty> = async (data) => {
    let { full_name, role } = data;
    const username = props.username;
    try {
      const { data } = await axiosClient.put(`auth/update`, {
        full_name,
        role,
        username,
      });
      setErrorMessage({
        trigger: false,
        message: data.message,
      });
      props.handleEditUser(props.username, full_name, role);
      props.handleEditModelClose();
    } catch (error: any) {
      setErrorMessage({
        trigger: true,
        message: error.response.data.message,
      });
    }
  };
  function makeid(length: number): string {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  }
  if (roles.length !== 0) {
    return (
      <Modal>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Title>Edit user</Title>
          <Line />
          <InputCluster>
            <Info> Full name </Info>
            <Input
              {...register("full_name")}
              placeholder="Edit user's full name"
              type="text"
              required
            />
            {errors.full_name && (
              <ErrorMessage>{errors.full_name.message}</ErrorMessage>
            )}
          </InputCluster>

          <InputCluster>
            <Info> Role </Info>
            <RoleSelect
              {...register("role")}
              required
              defaultValue={props.defaultRole}
              
            >
              {roles.map((role: Role) => {
                return (
                  <RoleOption
                    key={`role_${role.ID}_${makeid(10)}`}
                    value={role.RoleName}
                  >
                    {role.RoleName}
                  </RoleOption>
                );
              })}
            </RoleSelect>
            {errors.role && <ErrorMessage>{errors.role.message}</ErrorMessage>}
          </InputCluster>

          {errorMessage.trigger && (
            <ErrorMessageFromSever>
              {errorMessage.message}
            </ErrorMessageFromSever>
          )}
          <SubmitBtn type="submit">Submit</SubmitBtn>
        </form>
      </Modal>
    );
  }
  return <Modal></Modal>;
};

export default EditModal;
