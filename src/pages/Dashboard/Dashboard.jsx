/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import Header from "../../components/Header/Header";
import "./Dashboard.css";
import { getCountriesApi } from "../../reducer/userActions/DashboardActions";
import { MyContext } from "../../reducer/store/store";
import {
  FETCH_COUNTRIES_FAILURE,
  FETCH_COUNTRIES_REQUEST,
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES_CLEAR,
} from "../../constants/Constants";
import ButtonConainer from "../../components/ButtonContainer/ButtonConainer";
import { AuthContext } from "../../reducer/context/AuthContext";

const Dashboard = () => {
  const {
    countriesDispatch,
    countriesState: { loading, data, error },
  } = useContext(MyContext);

  const { signOut } = React.useContext(AuthContext);

  const getAllCountries = async () => {
    countriesDispatch({ type: FETCH_COUNTRIES_REQUEST });
    try {
      const res = await getCountriesApi();
      countriesDispatch({ type: FETCH_COUNTRIES_SUCCESS, payload: res.data });
    } catch (error) {
      countriesDispatch({ type: FETCH_COUNTRIES_FAILURE, payload: error });
    }
  };

  const callServerAPI = async () => {
    await getAllCountries();
  };

  const clearData = async () => {
    countriesDispatch({ type: FETCH_COUNTRIES_CLEAR, payload: [] });
  };

  const signOutFunc = async () => {
    signOut();
  };

  return (
    <div>
        <title>Dashboard</title>
        <Header />
        <div className="btnsContainer">
          <ButtonConainer title="Load Countries" onSubmits={callServerAPI} />
          <ButtonConainer title="Delete All" onSubmits={clearData} />
          <ButtonConainer title="SignOut" onSubmits={signOutFunc} />
        </div>
        <div className="container">
          <table>
            <thead>
              <tr>
                <th>CCA Name</th>
                <th>CCN Name</th>
                <th>Country Status</th>
              </tr>
            </thead>
            <tbody>
              {data ? (
                Object.values(data)?.map((user, key) => (
                  <tr key={key}>
                    <td>{user?.cca2}</td>
                    <td>{user?.ccn3}</td>
                    <td>{user?.status}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td>N/A</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
    </div>
  );
};

export default Dashboard;
