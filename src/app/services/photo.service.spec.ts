import { Platform } from "@ionic/angular";
import { PhotoService } from "./photo.service";

describe('PhotoService', () => {
    let photoService: PhotoService;
    let platform: Platform;

    it('Should create component', () => {
        photoService = new PhotoService(platform);
        expect(photoService).toBeTruthy();
    })
});
