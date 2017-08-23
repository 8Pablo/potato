/**
 * Created by Lena on 18.08.2017.
 */
import {CANDIDATE_UPDATE} from './types'

export const candidateUpdate = ({prop, value}) => {
  return {
    type   : CANDIDATE_UPDATE,
    payload: {prop, value}
  };
};