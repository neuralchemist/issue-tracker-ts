// firesotore
import { doc, collection, setDoc, getDocs } from "firebase/firestore";
import { db } from "../../config";
import { IUser } from "../types";

class UsersService {
  private COLLECTION_NAME = "users";
  private collectionRef = collection(db, this.COLLECTION_NAME);

  async create({ id, email, username }: IUser): Promise<IUser["id"]> {
    const docRef = doc(this.collectionRef, id);
    const userInfo = { username, email };
    await setDoc(docRef, userInfo);
    return docRef.id;
  }

  async findAll(): Promise<IUser[]> {
    const querySnapshot = await getDocs(this.collectionRef);
    const userList = querySnapshot.docs.map((snapshot) => {
      // doc.data() is never undefined for query doc snapshots
      const user = {
        id: snapshot.id,
        ...snapshot.data(),
      };
      return user as IUser;
    });

    return userList;
  }
}

export default UsersService;
