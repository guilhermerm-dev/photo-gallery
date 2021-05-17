import { AppComponent } from "./app.component";

describe('AppComponent', () => {
    let component: AppComponent;

    it('Should create component', () => {
        component = new AppComponent();
        expect(component).toBeTruthy();
    })
});
