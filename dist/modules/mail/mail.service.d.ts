import { MailerService } from '@nestjs-modules/mailer';
export declare class MailService {
    private mailerService;
    constructor(mailerService: MailerService);
    sendUserConfirmation(email: string, name: string): Promise<void>;
    sendUserRegisterConfirmationMail(email: string, name: string, code: number): Promise<void>;
}
