import React, { useState, useEffect } from "react";
import { db,  } from "./firebase.config";
import { collection, addDoc, getDocs} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { async  } from "@firebase/util";
import { storage } from "./firebase.config";

function MyData() {
  const [newfirstName, setNewFirstName] = useState("");
  const [newlastName, setNewLastName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [phoneNum, setPhoneNum] = useState(0);
  const [users, setUsers] = useState([]);
  const [myImage, setMyImage] = useState("");
  const [Update, setUpdate] = useState(true);
  const [removeData, setRemoveData] = useState("");
  const userCollectionRef = collection(db, "users");
  
  const createUser = async () => {
    const imageUrl = await upload();
    addDoc(userCollectionRef, {
      firstname: newfirstName,
      lastname: newlastName,
      email: newEmail,
      password: newPassword,
      phonenumber: phoneNum,
      image: imageUrl,
    }).then(()=>{
        alert("Data submitted to firestore")
        console.log("Data submitted");
    }).catch((error) => {
        alert("something failed")
         console.log(error);
         
    });
     
  };
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
      console.log(data);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);

  const myUpdate = (id) => {
    const newEditMessage = users.map((user) => {
      if (user.id === id) {
        const data = prompt();
        user.message = data;
      }
      return user;
    });

    setUsers(newEditMessage);
    console.log("done");
  };

  const deleteData = (id) => {
    const updatedUsers = users.filter((data) => data.id !== id);
    setUsers(updatedUsers);

    console.log("data deleted");
  };

  // function handleChange(event) {

  //     setMyFile(event.target.files[0]);
  // }

  const upload = async () => {
    if (myImage == null) return;
    const imageRef = ref(storage,`/images/${myImage.name}-${Date.now()}`);
    await uploadBytesResumable(imageRef,myImage)
    return getDownloadURL(imageRef);
  };

  return (
    <>
      <div className="container mx-auto py-10 px-10">
        <div class="relative z-0 mb-6 w-full group">
          <input
            type="email"
            name="floating_email"
            id="floating_email"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            required=""
            onChange={(event) => {
              setNewEmail(event.target.value);
            }}
          />
          <label
            for="floating_email"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email address
          </label>
        </div>
        <div class="relative z-0 mb-6 w-full group">
          <input
            type="password"
            name="floating_password"
            id="floating_password"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            required=""
            onChange={(event) => {
              setNewPassword(event.target.value);
            }}
          />
          <label
            for="floating_password"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Password
          </label>
        </div>

        <div class="grid md:grid-cols-2 md:gap-6">
          <div class="relative z-0 mb-6 w-full group">
            <input
              type="text"
              name="floating_first_name"
              id="floating_first_name"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              required=""
              onChange={(event) => {
                setNewFirstName(event.target.value);
              }}
            />
            <label
              for="floating_first_name"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              First name
            </label>
          </div>
          <div class="relative z-0 mb-6 w-full group">
            <input
              type="text"
              name="floating_last_name"
              id="floating_last_name"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              required=""
              onChange={(event) => {
                setNewLastName(event.target.value);
              }}
            />
            <label
              for="floating_last_name"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Last name
            </label>
          </div>
        </div>
        <div class="grid md:grid-cols-2 md:gap-6">
          <div class="relative z-0 mb-6 w-full group">
            <input
              type="tel"
              name="floating_phone"
              id="floating_phone"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300  dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              onChange={(event) => {
                setPhoneNum(event.target.value);
              }}
            />
            <label
              for="floating_phone"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Phone number 
            </label>
          </div>
          <div>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                setMyImage(e.target.files[0]);
              }}
            />
          </div>
        </div>
        <button
          type="submit"
          onClick={createUser}
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </div>

      <div class="container mx-auto overflow-x-auto relative mt-10 px-5">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 border-[1px] px-5 py-5">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="py-3 px-6">
                Email
              </th>
              <th scope="col" class="py-3 px-6">
                Password
              </th>

              <th scope="col" class="py-3 px-6">
                First Name
              </th>
              <th scope="col" class="py-3 px-6">
                Last Name
              </th>
              <th scope="col" class="py-3 px-6">
                Phone Number
              </th>
              <th scope="col" class="py-3 px-6">
                message
              </th>
              <th>File/Images</th>
              <th>Update & Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((users) => {
              return (
                <tr>
                  <td class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    {users.email}
                  </td>
                  <td class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    {users.password}
                  </td>

                  <td class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    {users.firstname}
                  </td>
                  <td class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    {users.lastname}
                  </td>
                  <td class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    {users.phonenumber}
                  </td>

                  <td class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    {users.message}
                  </td>
                  <td class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    {users.file}
                  </td>
                  <td class="flex flex-row bg-white border-b dark:bg-gray-800 dark:border-gray-700 gap-4">
                    <button
                      className="bg-[blue] text-[white] p-2 px-4"
                      onClick={() => myUpdate(users.id)}
                    >
                      edit
                    </button>
                    <button
                      className="bg-[red] text-[white] p-2 px-4"
                      onClick={() => deleteData(users.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default MyData;
