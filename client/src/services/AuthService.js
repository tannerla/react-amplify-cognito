import Amplify from "aws-amplify";
import { Auth } from "aws-amplify";
import awsconfig from "../aws-exports";

const init = () => Amplify.configure(awsconfig);

const isLoggedIn = async () => {
  try {
    await Auth.currentSession();
  } catch (e) {
    return false;
  }
  return true;
};

const login = async () => {
  //
};

const logout = async () => {
  await Auth.signOut();
};

export default { init, isLoggedIn, login, logout };
