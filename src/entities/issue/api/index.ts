// firestore
import {
  collection,
  addDoc,
  serverTimestamp,
  getDocs,
  updateDoc,
  doc,
} from "firebase/firestore";
import { IIssue, IIssueCreate, IIssueUpdate } from "../types";
import { db } from "../../../firebase/config";

class IssueApi {
  private COLLECTION_NAME = "issues";
  private collectionRef = collection(db, this.COLLECTION_NAME);

  async create(issue: IIssueCreate): Promise<IIssue["id"]> {
    console.log("%cIssueApi -> create:", "color: orange");
    const _issue = {
      ...issue,
      created_at: serverTimestamp(),
      updated_at: serverTimestamp(),
    };

    const doc = await addDoc(this.collectionRef, _issue);
    return doc.id;
  }

  async findAll(): Promise<IIssue[]> {
    console.log("%cIssueApi -> findAll:", "color: orange");
    const snapshot = await getDocs(this.collectionRef);
    const issueList = snapshot.docs.map((item) => {
      const issue = {
        id: item.id,
        ...item.data(),
      };
      return issue as IIssue;
    });

    return issueList;
  }

  async update(id: IIssue["id"], issue: IIssueUpdate): Promise<IIssue["id"]> {
    console.log("%cIssueApi -> update:", "color: orange");
    const _issue = {
      ...issue,
      updated_at: serverTimestamp(),
    };
    const docRef = doc(this.collectionRef, id);
    await updateDoc(docRef, _issue);
    return id;
  }
}

export const issueApi = new IssueApi();
