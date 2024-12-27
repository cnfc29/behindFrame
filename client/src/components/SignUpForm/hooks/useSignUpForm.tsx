import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAppDispatch } from "../../../hooks/reduxHooks";
import { AuthSignUpType } from "../../../types/authTypes";
import { signUpThunk } from "../../../redux/thunksActions/authThunkActions";
import { scheme } from "../helpers";
import { useState } from "react";

export function useSignUpForm() {
  const dispatch = useAppDispatch();

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthSignUpType>({
    resolver: yupResolver(scheme),
  });

  const onSubmit = async (data: AuthSignUpType) => {
    setLoading(true);
    try {
      await dispatch(signUpThunk(data));
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    register,
    handleSubmit,
    errors,
    onSubmit,
  };
}
