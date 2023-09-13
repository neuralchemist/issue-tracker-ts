// firesotore
import { doc, collection, setDoc, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";
import { IUser } from "../types";

class UserApi {
  private COLLECTION_NAME = "users";
  private collectionRef = collection(db, this.COLLECTION_NAME);

  async create({ id, email, username }: IUser): Promise<IUser["id"]> {
    const docRef = doc(this.collectionRef, id);
    const userInfo = { email, displayName: username };
    await setDoc(docRef, userInfo);
    return docRef.id;
  }

  async findAll(): Promise<IUser[]> {
    const snapshot = await getDocs(this.collectionRef);
    const userList = snapshot.docs.map((item) => {
      const user = {
        id: item.id,
        ...item.data(),
      };
      return user as IUser;
    });

    return userList;
  }
}

export const userApi = new UserApi();
