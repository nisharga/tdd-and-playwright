import { MailSlurp } from 'mailslurp-client';

export class EmailUtils {

    private mailSlurp: MailSlurp;

    constructor() {
        this.mailSlurp = new MailSlurp({ apiKey: '2c289c94fb95a8d8d3cfe2b59d1a99e6f7eccf0d22f049508ee89a27ef0e6e40' })
    }

    public async createInbox() {
        const inbox = await this.mailSlurp.inboxController.createInboxWithDefaults();
        return inbox;
    }

    public async waitForLatestEmail(inboxId: string) {
        const email = await this.mailSlurp.waitForLatestEmail(inboxId, 30000)
        return email;
    }
}



