import styled from "styled-components";

export const Header = styled.h1`
  text-align: center;
  color: rgb(41, 37, 37);
`;
export const DeleteButtonAvatar = styled.button`
  width: 50px;
  height: 20px;
  margin-top: 0;
  border: none;
  position: relative;
  bottom: 255px;
  left: 160px;
  opacity: 0;
  background-color: rgba(255, 0, 0, 0);
`;
export const Avatar = styled.img`
  width: 200px;
  height: 250px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    opacity: 0.7;
  }
  border: 1px solid black;
`;

export const AvatarAndDeleteButton = styled.span`
  width: 200px;
  height: 250px;
  &:hover ${DeleteButtonAvatar} {
    opacity: 1;
  }
`;
export const WelcomeTitle = styled.p`
  text-align: center;
  padding-top: 60px;
  font-family: Arial, Helvetica, sans-serif;
`;
export const Collection = styled.img`
  width: 200px;
  height: 250px;
  margin: 10px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    opacity: 0.7;
  }

  @media (max-width: 700px) {
    width: 80%;
    height: 350px;
    margin: auto;
  }
`;

export const InputTypeFile = styled.input.attrs(props => ({
  type: "file"
}))`
  opacity: 0;
  position: absolute;
  pointer-events: none;
  width: 1px;
  height: 1px;
  background-color: rgb(90, 90, 89);
  padding: 10px;
  border-radius: 5px;
  color: white;
  margin-top: 10px;
  display: flex;
  align-items: center;
  width: 150px;
  display: flex;
  justify-content: center;
`;

export const LabelForProfilePicture = styled.label`
  background-color: black;
  padding: 10px;
  border-radius: 5px;
  color: white;
  margin-top: 10px;
  display: flex;
  align-items: center;
  width: 150px;
  display: flex;
  justify-content: center;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: lighter;
`;
export const LabelForCollections = styled.label`
  background-color: silver;
  padding: 10px;
  border-radius: 5px;
  color: white;
  margin: 10px;
  display: flex;
  align-items: center;
  width: 150px;
  display: flex;
  justify-content: center;
  height: 230px;
`;

export const MyPhotoCollection = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 50px;
  max-width: 800px;
`;

export const StatusStyle = styled.input`
  border: 1px solid black;
  border-radius: 3px;
  height: 60px;
  padding: 10px;
`;

export const PictureAndStatus = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    /* border: 1px solid red; */
  }
`;

export const AvatarAndChoose = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PostButton = styled.button`
  margin-left: 20px;
  background-color: black;
  border: none;
  margin-bottom: 59px;
  color: white;
  height: 30px;
  width: 80px;
  border-radius: 3px;
  font-family: Arial, Helvetica, sans-serif;
`;

export const TextAndStatus = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 150px;
`;

export const PostButtonTextAreaAndText = styled.div`
  display: flex;
  align-items: center;
  height: 250px;
  margin-left: 40px;
`;
export const DeleteButton = styled.button`
  margin-top: 0;
  border: none;
  position: relative;
  bottom: 255px;
  left: 80px;
  opacity: 0;
  background-color: rgba(255, 0, 0, 0);
`;

export const ImageAndDeleteButton = styled.div`
  position: static;
  display: flex;
  flex-direction: column;
  align-items: center;
  &:hover ${DeleteButton} {
    opacity: 1;
  }
`;

export const ContainerAllElements = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TextAreaAndErrors = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ErrorText = styled.div`
  color: red;
  position: relative;
  bottom: 120px;
  right: 30px;
`;

/* 

.open-image {
  width: 600px;
  height: 800px;
  background-color: rgba(0, 0, 0, 0.9);
}

.process_image {
  width: 200px;
  height: 200px;
}

.input-container {
  position: relative;
}

textarea {
  border-radius: 10px;
  width: 250px;
  margin-left: 30px;
}

 */

// input[type="file"] {
//   opacity: 0;
//   position: absolute;
//   pointer-events: none;
//   width: 1px;
//   height: 1px;
// }

// input[type="file"] + label {
//   background-color: rgb(90, 90, 89);
//   padding: 10px;
//   border-radius: 5px;
//   color: white;
//   margin-top: 10px;
//   display: flex;
//   align-items: center;
//   width: 150px;
//   display: flex;
//   justify-content: center;
// }
