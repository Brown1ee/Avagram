import React, { Component } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import Lightbox from "react-image-lightbox";
import SideTrigger from "./SideTrigger";
import {
  Avatar,
  WelcomeTitle,
  Collection,
  InputTypeFile,
  LabelForProfilePicture,
  LabelForCollections,
  MyPhotoCollection,
  StatusStyle,
  PictureAndStatus,
  DeleteButton,
  ImageAndDeleteButton,
  AvatarAndChoose,
  PostButton,
  TextAndStatus,
  ContainerAllElements,
  TextAreaAndErrors,
  PostButtonTextAreaAndText,
  ErrorText,
  DeleteButtonAvatar,
  AvatarAndDeleteButton
} from "./TaskId.jsx";

import LoadingComponent from "./LoadingComponent";
import SideNavBar from "./SideNavBar.js";

export default class TaskId extends Component {
  _isMounted = true;

  state = {
    message: "Loading...",
    base64Img: null,
    base64ImgAvatar: null,
    avatar: null,
    status: "",
    statusToPost: "",
    error: "",
    photoCollection: [],
    isLoading: false,
    photo: "",
    imagesFromCollection: [],
    photoIndex: 0,
    isOpen: false,
    sideBar: false
  };

  constructor(props) {
    super(props);
    this.handleFileSelect = this.handleFileSelect.bind(this);
    this.fetchUserPhoto = this.fetchUserPhoto.bind(this);
    this.handleFileAvatar = this.handleFileAvatar.bind(this);
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch("http://localhost:8080/api/secret", {
      headers: {
        "x-access-token": sessionStorage.getItem("token")
      }
    })
      .then(res => res.text())
      .then(res => this.setState({ message: res }));

    axios
      .get("http://localhost:8080/api/status", {
        headers: { "x-access-token": sessionStorage.getItem("token") }
      })
      .then(res =>
        this.setState({
          statusToPost: res.data
        })
      );
    this.fetchUserPhoto();
    this.fetchUserAvatar();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }
  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.base64Img !== this.state.base64Img ||
      prevState.base64ImgAvatar !== this.state.base64ImgAvatar ||
      prevState.photo !== this.state.photo ||
      prevState.avatar !== this.state.avatar
    ) {
      this.fetchUserPhoto();
      this.fetchUserAvatar();
      this.setState({ photo: "" });
    }
  }

  fetchUserPhoto() {
    axios
      .get("http://localhost:8080/api/picture", {
        headers: {
          "x-access-token": sessionStorage.getItem("token")
        }
      })
      .then(res => {
        if (this._isMounted) {
          const pic = res.data.record;
          const imageFromObject = pic.map(obj => obj.image);

          this.setState({
            isLoading: false,
            photoCollection: pic,
            imagesFromCollection: imageFromObject
          });
        }
      });
  }

  fetchUserAvatar() {
    axios
      .get("http://localhost:8080/api/avatar", {
        headers: {
          "x-access-token": sessionStorage.getItem("token")
        }
      })
      .then(res => {
        if (this._isMounted) {
          this.setState({ isLoading: false, avatar: res.data.user.avatar });
        }
      });
  }

  handleFileSelect(e) {
    const files = e.target.files;
    const file = files[0];

    if (files && file) {
      const reader = new FileReader();
      reader.onload = rdEvt => {
        const binaryStr = rdEvt.target.result;
        const base64Img = btoa(binaryStr);
        axios
          .post(
            "http://localhost:8080/api/picture",
            { data: base64Img },
            {
              headers: {
                "x-access-token": sessionStorage.getItem("token")
              }
            }
          )
          .then(data => {
            if (data.data.message) {
              this.setState({
                base64Img
              });
            }
          })
          .catch(err => {
            console.log(err.response);
          });
      };
      reader.readAsBinaryString(file);
    }
  }

  handleFileAvatar(e) {
    const files = e.target.files;
    const file = files[0];

    if (files && file) {
      const reader = new FileReader();
      reader.onload = rdEvt => {
        const binaryStr = rdEvt.target.result;
        const base64ImgAvatar = btoa(binaryStr);
        axios
          .post(
            "http://localhost:8080/api/avatar",
            { data: base64ImgAvatar },
            {
              headers: {
                "x-access-token": sessionStorage.getItem("token")
              }
            }
          )
          .then(data => {
            if (data.data.message) {
              this.setState({
                base64ImgAvatar
              });
            }
          })
          .catch(err => {
            alert("Error while uploading image using firebase storage");
          });
      };
      reader.readAsBinaryString(file);
    }
  }

  handleDelete = imageId => {
    axios
      .delete(`http://localhost:8080/api/picture/${imageId}`)
      .then(res => {
        this.setState({ photo: res.data });
      })
      .catch(err => {
        console.error(err);
      });
  };

  handleAvatarDelete = () => {
    const avatar = "";
    axios
      .post(
        "http://localhost:8080/api/avatar",
        { data: avatar },
        {
          headers: {
            "x-access-token": sessionStorage.getItem("token")
          }
        }
      )
      .then(data => this.setState({ avatar: "" }));
  };

  handleChange = e => {
    this.setState({
      status: e.target.value
    });
  };

  onSubmitHandler = () => {
    const { status } = this.state;
    axios
      .post(
        "http://localhost:8080/api/status",
        { status },
        {
          headers: { "x-access-token": sessionStorage.getItem("token") }
        }
      )
      .then(res => {
        if (res.data.message) {
          this.setState({ statusToPost: status });
        } else {
        }
      })
      .catch(err => this.setState({ error: err.response.data.errors.status }));
    axios
      .get("http://localhost:8080/api/status", {
        headers: { "x-access-token": sessionStorage.getItem("token") }
      })
      .then(res =>
        this.setState({
          statusToPost: res.data
        })
      );
    this.setState({ status: "" });
  };

  handleSideBar = () => {
    this.setState(prevState => {
      return { sideBar: !prevState.sideBar };
    });
  };

  render() {
    const {
      avatar,
      statusToPost,
      error,
      photoCollection,
      isLoading,
      imagesFromCollection,
      photoIndex,
      isOpen,
      sideBar
    } = this.state;
    let sideNavBar;
    if (sideBar) {
      sideNavBar = <SideNavBar />;
    }

    let data;
    if (!isLoading) {
      data = (
        <ContainerAllElements>
          {sideNavBar}
          <SideTrigger handleSideBar={this.handleSideBar} />
          <PictureAndStatus>
            <AvatarAndChoose>
              <WelcomeTitle>{this.state.message}</WelcomeTitle>

              {avatar ? (
                <AvatarAndDeleteButton>
                  <Avatar
                    src={`data:image/jpeg;base64,${avatar}`}
                    alt="avatar"
                  />
                  <DeleteButtonAvatar onClick={this.handleAvatarDelete}>
                    <FontAwesomeIcon icon={faWindowClose} size="2x" />
                  </DeleteButtonAvatar>
                </AvatarAndDeleteButton>
              ) : (
                <LabelForCollections />
              )}

              <InputTypeFile type="file" onChange={this.handleFileAvatar} />
              <InputTypeFile
                type="file"
                id="myuni"
                onChange={this.handleFileAvatar}
              />
              <LabelForProfilePicture htmlFor="myuni">
                Add a profile picture
              </LabelForProfilePicture>
            </AvatarAndChoose>
            <>
              <TextAreaAndErrors>
                <PostButtonTextAreaAndText>
                  <TextAndStatus>
                    <StatusStyle
                      onChange={this.handleChange}
                      value={this.state.status}
                      placeholder="what's on your mind?"
                    />
                    {statusToPost}
                  </TextAndStatus>

                  <PostButton onClick={this.onSubmitHandler}>post</PostButton>
                </PostButtonTextAreaAndText>
                <ErrorText> {error}</ErrorText>
              </TextAreaAndErrors>
            </>
          </PictureAndStatus>
          <MyPhotoCollection>
            <InputTypeFile type="file" onChange={this.handleFileSelect} />
            <InputTypeFile
              type="file"
              id="myuniqueid"
              onChange={this.handleFileSelect}
            />
            <LabelForCollections htmlFor="myuniqueid">
              <FontAwesomeIcon icon={faPlusCircle} size="4x" />
            </LabelForCollections>
            {photoCollection.map((photo, i) => (
              <ImageAndDeleteButton key={i}>
                <Collection
                  src={`data:image/jpeg;base64,${photo.image}`}
                  alt="collection"
                  onClick={() => this.setState({ isOpen: true, photoIndex: i })}
                />

                <DeleteButton onClick={() => this.handleDelete(photo._id)}>
                  <FontAwesomeIcon icon={faWindowClose} size="2x" />
                </DeleteButton>
              </ImageAndDeleteButton>
            ))}
          </MyPhotoCollection>
          {isOpen && (
            <Lightbox
              mainSrc={`data:image/jpeg;base64,${
                imagesFromCollection[photoIndex]
              }`}
              nextSrc={`data:image/jpeg;base64,${
                imagesFromCollection[
                  (photoIndex + 1) % imagesFromCollection.length
                ]
              }`}
              prevSrc={`data:image/jpeg;base64,${
                imagesFromCollection[
                  (photoIndex + imagesFromCollection.length - 1) %
                    imagesFromCollection.length
                ]
              }`}
              onCloseRequest={() => this.setState({ isOpen: false })}
              onMovePrevRequest={() =>
                this.setState({
                  photoIndex:
                    (photoIndex + imagesFromCollection.length - 1) %
                    imagesFromCollection.length
                })
              }
              onMoveNextRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + 1) % imagesFromCollection.length
                })
              }
            />
          )}
        </ContainerAllElements>
      );
    } else {
      data = <LoadingComponent />;
    }

    return <div>{data}</div>;
  }
}
