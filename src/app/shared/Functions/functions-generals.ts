import { NotificationsService } from 'angular2-notifications';

export class Perform {

    private static _instancia: Perform;
    notificationsService: NotificationsService = new NotificationsService({});

    constructor() { }

    public static execute(): Perform {
        if (!Perform._instancia) {
            Perform._instancia = new Perform();
        }
        return Perform._instancia;
    }

    createNotification(title, content, type?, options?) {
        if (!options) {
            options = {
                template: '<simple-notifications></simple-notifications>',
                timeOut: 55000,
                showProgressBar: true,
                pauseOnHover: true,
                clickToClose: true,
                animate: 'fromRight',
            }
        }
        // this.notificationsService.create(title, content, type, options);
        this.notificationsService.success(title, content, type, options);
    }

}