import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Photo } from '../interfaces/photo';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'photo-gallery',
  templateUrl: 'photo-gallery.page.html',
  styleUrls: ['photo-gallery.page.scss']
})
export class PhotoGalleryPage {

  constructor(public photoService: PhotoService,
    public actionSheetController: ActionSheetController) {
  }

  async ngOnInit() {
    await this.photoService.loadSaved();
  }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

  public async showActionSheet(photo: Photo, position: number) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Photos',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.photoService.deletePicture(photo, position);
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {

        }
      }]
    });
    await actionSheet.present();
  }

}
