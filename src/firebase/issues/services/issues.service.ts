// firesotore
import {
  collection,
  addDoc,
  serverTimestamp,
  getDocs,
  updateDoc,
  doc,
} from "firebase/firestore";
import { db } from "../../config";
import {
  IIssue,
  IIssueCreatePartial,
  IIssueCreateDTO,
  IIssueUpdateById,
} from "../types";

class IssuesService {
  private COLLECTION_NAME = "issues";
  private collectionRef = collection(db, this.COLLECTION_NAME);

  async create(partialIssue: IIssueCreatePartial): Promise<IIssue["id"]> {
    const issue = await this.createNewIssue(partialIssue);

    const doc = await addDoc(this.collectionRef, issue);
    return doc.id;
  }

  async findAll(): Promise<IIssue[]> {
    const querySnapshot = await getDocs(this.collectionRef);
    const issueList = querySnapshot.docs.map((snapshot) => {
      // doc.data() is never undefined for query doc snapshots
      const issue = {
        id: snapshot.id,
        ...snapshot.data(),
      };
      return issue as IIssue;
    });

    return issueList;
  }

  async updateById({
    id,
    partialIssue,
  }: IIssueUpdateById): Promise<IIssue["id"]> {
    const partialIssueUpdated = {
      ...partialIssue,
      updated_at: serverTimestamp(),
    };
    const docRef = doc(this.collectionRef, id);
    await updateDoc(docRef, partialIssueUpdated);
    return id;
  }

  private async createNewIssue(
    partialIssue: IIssueCreatePartial
  ): Promise<IIssueCreateDTO> {
    const issue: IIssueCreateDTO = {
      ...partialIssue,
      created_at: serverTimestamp(),
      updated_at: serverTimestamp(),
    };
    return issue;
  }
}

export default IssuesService;
