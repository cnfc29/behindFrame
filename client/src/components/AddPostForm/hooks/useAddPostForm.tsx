import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAppDispatch } from "../../../hooks/reduxHooks";
import { PostTypeAdd } from "../../../types/postsType";
import { addMyPostThunk } from "../../../redux/thunksActions/postsThunkActions";
import { scheme } from "../helpers";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTER } from "../../../../router";

export function useAddPostForm() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PostTypeAdd>({
    resolver: yupResolver(scheme),
  });

  const onSubmit = async (data: PostTypeAdd) => {
    setLoading(true);
    try {
      await dispatch(addMyPostThunk(data));
    } finally {
      setLoading(false);
      navigate(ROUTER.profile);
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
