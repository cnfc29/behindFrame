import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAppDispatch } from "../../../hooks/reduxHooks";
import { AuthSignInType } from "../../../types/authTypes";
import { signInThunk } from "../../../redux/thunksActions/authThunkActions";
import { scheme } from "../helpers";
import { useState } from "react";

export function useSignInForm() {
  const dispatch = useAppDispatch();

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthSignInType>({
    resolver: yupResolver(scheme),
  });

  const onSubmit = async (data: AuthSignInType) => {
    setLoading(true);
    try {
      await dispatch(signInThunk(data));
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
