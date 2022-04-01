import {
  AuthorizationStatus,
  NameSpace
} from '../../constant';
import { State } from '../../types/state';

export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.user].authorizationStatus;
