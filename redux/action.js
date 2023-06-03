import axios from "axios";

const serverUrl = "https://festivity0.onrender.com/api/v1";

export const login = (phone) => async (dispatch) => {
  try {
    dispatch({ type: "loginRequest" });

    const { data } = await axios.post(
      `${serverUrl}/login`,
      { phone },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    dispatch({ type: "loginSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "loginFailure", payload: error.response.data.message });
  }
};

export const getUser = (userId) => async (dispatch) => {
  ////('hii');
  try {
    dispatch({ type: "getUserRequest" });

    const res = await axios.get(`${serverUrl}/user/${userId}`);
    //(res.data);
    dispatch({ type: "getUserSuccess", payload: res.data });
  } catch (error) {
    dispatch({ type: "getUserFailure", payload: error.response.data.message });
  }
};

export const loadUser = () => async (dispatch) => {
  ////('hii');
  try {
    dispatch({ type: "loadUserRequest" });

    const res = await axios.get(`${serverUrl}/me`);
    //(res.data);
    dispatch({ type: "loadUserSuccess", payload: res.data });
  } catch (error) {
    dispatch({ type: "loadUserFailure", payload: error.response.data.message });
  }
};

export const loadPost = (id) => async (dispatch) => {
  //('hiiload '+id);
  try {
    dispatch({ type: "loadPostRequest" });

    const res = await axios.get(`${serverUrl}/getpost`);
    ////(res);
    loadUser();
    dispatch({ type: "loadPostSuccess", payload: res.data });
  } catch (error) {
    dispatch({ type: "loadPostFailure", payload: error.response.data.message });
  }
};

export const loadAllPost = (id) => async (dispatch) => {
  //('hiiload '+id);
  try {
    dispatch({ type: "loadAllPostRequest" });

    const res = await axios.get(`${serverUrl}/getallpost`);
    ////(res);
    loadUser();
    dispatch({ type: "loadAllPostSuccess", payload: res.data });
  } catch (error) {
    dispatch({ type: "loadAllPostFailure", payload: error.response.data.message });
  }
};

export const deletePost = (id) => async (dispatch) => {
  ////('hiiload '+id);
  try {
    dispatch({ type: "deletePostRequest" });

    const res = await axios.delete(`${serverUrl}/post/${id}`);
    ////(res);
    loadUser();
    dispatch({ type: "deletePostSuccess", payload: res.data });
  } catch (error) {
    dispatch({ type: "deletePostFailure", payload: error.response.data.message });
  }
};

export const addPost = (formData) => async (dispatch) => {
  try {
    dispatch({ type: "addPostRequest" });

    const { data } = await axios.post(
      `${serverUrl}/newpost`,formData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    dispatch({ type: "addPostSuccess", payload: data.message });
  } catch (error) {
    dispatch({ type: "addPostFailure", payload: error.response.data.message });
  }
};

export const addReview = (formData, userId) => async (dispatch) => {
  try {
    dispatch({ type: "addReviewRequest" });

    const { data } = await axios.post(
      `${serverUrl}/review/${userId}`,formData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    dispatch({ type: "addReviewSuccess", payload: data.message });
  } catch (error) {
    dispatch({ type: "addReviewFailure", payload: error.response.data.message });
  }
};

export const updateTask = (taskId) => async (dispatch) => {
  try {
    dispatch({ type: "updateTaskRequest" });

    const { data } = await axios.get(`${serverUrl}/task/${taskId}`);
    dispatch({ type: "updateTaskSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "updateTaskFailure",
      payload: error.response.data.message,
    });
  }
};

export const deleteTask = (taskId) => async (dispatch) => {
  try {
    dispatch({ type: "deleteTaskRequest" });

    const { data } = await axios.delete(`${serverUrl}/task/${taskId}`);
    dispatch({ type: "deleteTaskSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "deleteTaskFailure",
      payload: error.response.data.message,
    });
  }
};

export const addname = (formData) => async (dispatch) => {
  try {
    dispatch({ type: "updatePostRequest" });
    ////(formData)
    const res = await axios.put(`${serverUrl}/addname`, formData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    //loadUser();
    dispatch({ type: "updatePostSuccess", payload: res.data });
    loadUser();
    ////(res.data);
    ////('res');
  } catch (error) {
    //(error);
    dispatch({
      type: "updatePostFailure",
      payload: error.response.data.message,
    });
  }
};


export const updatePost = (formData) => async (dispatch) => {
  try {
    dispatch({ type: "updatePostRequest" });

    const { data } = await axios.put(`${serverUrl}/updateprofile`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    dispatch({ type: "updatePostSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "updatePostFailure",
      payload: error.response.data.message,
    });
  }
};

export const logout = () => async (dispatch) => {
  try {
    dispatch({ type: "logoutRequest" });
    //("logout")
    await axios.get(`${serverUrl}/logout`);
    dispatch({ type: "logoutSuccess" });
    loadUser()
    loadPost()
  } catch (error) {
    dispatch({
      type: "logoutFailure",
      payload: error.response.data.message,
    });
  }
};

export const register = (formData) => async (dispatch) => {
  try {
    //dispatch({ type: "registerRequest" });
    const res = await axios.post(`${serverUrl}/register`, formData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    dispatch({ type: "registerSuccess", payload: res });
  } catch (error) {
    dispatch({
      type: "registerFailure",
      payload: error.response.data.message,
    });
    //(error)
  }
};
