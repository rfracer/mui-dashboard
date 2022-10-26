import { User } from 'firebase/auth';

type State = {
  currentUser: User;
};

type Action =
  | { type: 'LOGIN'; payload: User }
  | { type: 'LOGOUT'; payload: User };

const AuthReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'LOGIN': {
      return {
        currentUser: action.payload,
      };
    }
    case 'LOGOUT': {
      return {
        currentUser: null,
      };
    }
    default:
      return state;
  }
};

export default AuthReducer;
