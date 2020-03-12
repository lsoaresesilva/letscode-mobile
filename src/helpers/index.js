import firebase from 'firebase';

export function getSnapshot(
  snapshot: firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData>
): Promise<
  firebase.firestore.QueryDocumentSnapshot<firebase.firestore.DocumentData>
> {
  return new Promise(resolve => {
    snapshot.forEach(doc => {
      resolve(doc);
    });
  });
}
