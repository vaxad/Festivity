import { createReducer } from "@reduxjs/toolkit";
import { useContext } from "react";
import { context } from "../app/index";


export const authReducer = createReducer(
  {},
  {

    loginRequest: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.data.user;
      state.message = action.payload.data.message;
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload.data;
    },

    registerRequest: (state) => {
      state.loading = true;
    },
    registerSuccess: (state = null, action) => {

      ////('reg')
      ////(action.payload.data.user);
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.data.user;
      console.log(state.user);
      state.token=action.payload.data.token;
      console.log(state.token)
      //a.setState('hii')
      state.message = action.payload.data.message;

    },
    registerFailure: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload.data;
    },

    loadUserRequest: (state) => {
      state.loading = true;
    },
    loadUserSuccess: (state, action) => {
      ////('load')
      state.loading = false;
      state.isAuthenticated = true;
      state.res=true;
      state.user = action.payload.user;
      ////(action.payload);
    },
    loadUserFailure: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload.data;
    },

    getUserRequest: (state) => {
      state.loading = true;
    },
    getUserSuccess: (state, action) => {
      ////('load')
      state.loading = false;
      state.isAuthenticated = true;
      state.userFocus = action.payload.user;
      ////(action.payload);
    },
    getUserFailure: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload.data;
    },

    getPostFocusRequest: (state) => {
      state.loading = true;
    },
    getPostFocusSuccess: (state, action) => {
      ////('load')
      state.loading = false;
      state.isAuthenticated = true;
      state.postFocus = action.payload.user;
      ////(action.payload);
    },
    getPostFocusFailure: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload.data;
    },

    loadPostRequest: (state) => {
      state.loading = true;
    },
    loadPostSuccess: (state, action) => {
      ////('load')
      state.loading = false;
      state.isAuthenticated = true;
      state.post = action.payload.post;
      ////(action.payload);
    },
    loadPostFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload.data;
    },

    loadAllPostRequest: (state) => {
      state.loading = true;
    },
    loadAllPostSuccess: (state, action) => {
      ////('load')
      state.loading = false;
      state.isAuthenticated = true;
      state.allPosts = action.payload.posts;
      ////(action.payload);
    },
    loadAllPostFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload.data;
    },

    deletePostRequest: (state) => {
      state.loading = true;
    },
    deletePostSuccess: (state, action) => {
      ////('load')
      state.loading = false;
      state.isAuthenticated = true;
      ////(action.payload.post)
      ////(action.payload);
    },
    deletePostFailure: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload.data;
    },

    logoutRequest: (state) => {
      state.loading = true;
    },
    logoutSuccess: (state) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = null;
    },
    logoutFailure: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.error = action.payload.data;
    },

    verificationRequest: (state) => {
      state.loading = true;
    },
    verificationSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.data;
    },
    verificationFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload.data;
    },

    clearError: (state) => {
      state.error = null;
    },

    clearMessage: (state) => {
      state.message = null;
    },

    updatePostRequest: (state) => {
      state.loading = true;
    },
    updatePostSuccess: (state, action) => {
      ////(action.payload)
      state.loading = false;
      state.nameAdd = true;
      state.message = action.payload.message;
    },
    updatePostFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload.data;
    },
    addPostRequest: (state) => {
      state.loading = true;
    },
    addPostSuccess: (state, action) => {
      console.log("add")
      state.loading = false;
      state.message = action.payload.data.message;

    },
    addPostFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload.data;
    },
  }
);


