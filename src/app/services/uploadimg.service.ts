import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore'
import * as firebase from 'firebase';
import 'firebase/storage';
import { FileItem } from '../Models/file-item';

@Injectable({
  providedIn: 'root'
})
export class UploadimgService {

  private IMG_FOLDER = 'img';

  constructor( private db: AngularFirestore ) {}

  loadImagesFirebase( images: FileItem[]){
    const storageRef = firebase.storage().ref();
    for ( const item of images ){
      item.estateOfCharge = true;
      if ( item.progress >= 100 ){
        continue;
      }
      const uploadTask: firebase.storage.UploadTask =
      storageRef.child(` ${ this.IMG_FOLDER }/${ item.fileName }`)
      .put( item.file);

      uploadTask.on( firebase.storage.TaskEvent.STATE_CHANGED,
        ( snapshot ) => item.progress = ( snapshot.bytesTransferred / snapshot.totalBytes ) * 100,
        ( error ) => console.log('Error al subir', error),
        () => {
          console.log('Imagen cargada', item.progress );
          uploadTask.snapshot.ref.getDownloadURL()
          .then(( data ) => {
            this.saveImg({
                name: item.fileName,
                url: data
            })
            item.estateOfCharge = false;
          })
          });
    }
  }
  private saveImg( image: { name: string, url: string }) {
    this.db.collection(`/${ this.IMG_FOLDER }`)
    .add( image );
  }
}
