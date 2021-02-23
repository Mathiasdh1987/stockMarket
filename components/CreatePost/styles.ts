import styled from 'styled-components'
import { colors } from '../../utils/globalStyle'

export const AddPost = styled.div`
  form {
    padding: 20px;
    background: ${colors.primaryLight};
    display: flex;
    flex-direction: column;
    div {
      font-size: 2vw;
      display: flex;
      margin-bottom: 20px;
      align-items: center;
      justify-content: space-between;

      input {
        font-size: 20px;
        width: 80%;
        height: 30px;
      }
      textarea {
        font-size: 20px;
        width: 80%;
        height: 200px;
        resize: none;

      }
    }
    button {
      font-size 20px;
      width: 100px;
      height: 50px;
      border-radius: 12px;
    }
  }
`

export const Notification = styled.h3`
  font-size: 30px;
  width: 50%;
  margin-bottom: 20px;
  background: ${colors.blue};
  color: ${colors.white};
  border-radius: 12px;
`
