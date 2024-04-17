import { collection, doc, setDoc } from "firebase/firestore";
import { bd, collDossier, collUtilisateur } from "./init";

export async function creer(idUtil, infoDossier) {
  const refDossier = doc(collection(bd, collUtilisateur, idUtil, collDossier));
  await setDoc(refDossier, infoDossier);
  return refDossier.id;
}
