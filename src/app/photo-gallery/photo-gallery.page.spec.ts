import { ActionSheetController } from "@ionic/angular";
import { PhotoService } from "../services/photo.service";
import { PhotoGalleryPage } from "./photo-gallery.page";

describe('PhotoGalleryPage', () => {
    let component: PhotoGalleryPage;
    let photoService: PhotoService;
    let actionSheetController: ActionSheetController

    it('Should create component', () => {
        component = new PhotoGalleryPage(photoService, actionSheetController);
        expect(component).toBeTruthy();
    })
});
